"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product, Category
from api.utils import generate_sitemap, APIException

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

    
@api.route('/user', methods=['GET'])
def get_users():
    users = User.query.all()
    data = []
    for user in users:
      data.append(user.serialize())

    return jsonify(data), 200

@api.route('/user', methods=['POST'])
def post_users():
    data = request.json()
    print(data)

    user = User.query.filter_by(name=data['name'],
    email=data['email'], password=data['password'], 
    phone_number=data['phone_number'], address=data['address']).first()
    
    return jsonify(user.serialize), 200
    access_token = create_access_token(identity=user.id)


    
@api.route('/category', methods=['GET'])
def get_categories():
    categories = Category.query.all()
    data = []
    for category in categories:
      data.append(category.serialize())

    return jsonify(data), 200