"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product, Category
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
import stripe
import json
# This is your test secret API key.
stripe.api_key = 'sk_test_51LakrAD6PMviDHCngv2eydyq5Kd9gYFgLkGrEObFcueT1ozLusNuaGvjtJmKldBmBZLyXq26O9hbPIb9cjdgeHEy00UMGa5T2L'

api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/product', methods=['GET'])
def get_products():
    products = Product.query.all()
  # Para buscar solo los productos activos >> products = Product.query.filter_by(is_active=True) <<
    data = []
    for product in products:
        data.append(product.serialize())
  # Otra forma de hacerlo mas corta es >> data = [product.serialize() for product in products] <<
    return jsonify(data), 200

@api.route('/product/<int:id>', methods=['GET'])
def product_detail(id):
  product = Product.query.get(id)
  return jsonify(product.serialize_detial()), 200
  
@api.route('/product-category/<id>', methods=['GET'])
def get_product_by_category(id):
    products = Product.query.filter_by(category_id = id)
    data = []
    for product in products:
        data.append(product.serialize())
    return jsonify(data), 200

@api.route('/category', methods=['GET'])
def get_category():
    categories = Category.query.all()
    data = []
    for category in categories:
        data.append(category.serialize())
        
    return jsonify(data), 200
    
@api.route('/user', methods=['GET'])
def get_users():
    users = User.query.all()
    data = []
    for user in users:
      data.append(user.serialize())

    return jsonify(data), 200

@api.route('/user', methods=['POST'])
def create_user():
    name = request.json.get("name", None)
    phone_number = request.json.get("phone_number", None)
    email = request.json.get("email", None)
    address = request.json.get("address", None)
    password = request.json.get("password", None)
    user = User(name= name, phone_number= phone_number, email= email, address= address, password= password)
    try:
      db.session.add(user)
      db.session.commit()
      access_token = create_access_token(identity=user.id)

      return jsonify({"message": "Bienvenido a DaRooms", "token": access_token}), 201
    except Exception as err:
      print(str(err))    
      return jsonify({"message": str(err)}), 500

    return jsonify(data), 200

@api.route('/login', methods=['POST'])
def login():
    data = request.json
    print(data)
    user = User.query.filter_by(email= data['email'], password= data['password']).first()
    if not user:
      return jsonify({"message": "Tu email o contraseña no son correctos", "loged": False}), 400
    access_token = create_access_token(identity=user.id)
    
    return jsonify({"token": access_token, "loged": True}), 200

@api.route('/user/<int:id>', methods=['GET'])
@jwt_required()
def get_user(id):
    user = User.query.get(id)
    return jsonify(user.serialize())

#Area Personal

@api.route('/personal', methods=['PUT'])
@jwt_required()
def modify_user():
    current_user = get_jwt_identity()
    user = User.query.filter_by(id=current_user).first()
    user.name = request.json.get("name", None)
    user.phone_number = request.json.get("phone_number", None)
    user.email = request.json.get("email", None)
    user.address = request.json.get("address", None)
    user.password = request.json.get("password", None)


    try:
      db.session.commit()

      return jsonify({"message": "Se han modificado tus datos en DaRoom's satisfactoriamente"}), 201
    except Exception as err:
      print(str(err))    
      return jsonify({"message": str(err)}), 500

    return jsonify(data), 200

def calculate_order_amount(items):
    # Replace this constant with a calculation of the order's amount
    # Calculate the order total on the server to prevent
    # people from directly manipulating the amount on the client
    return sum(item.get("price") for item in items)

@api.route('/create-payment-intent', methods=['POST'])
def create_payment():
    try:
        data = json.loads(request.data)
        intent = stripe.PaymentIntent.create(
            amount=calculate_order_amount(data['items']),
            currency='usd'
        )

        return jsonify({
          'clientSecret': intent['client_secret']
        })
    except Exception as e:
        return jsonify(error=str(e)), 403
