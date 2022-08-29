from flask_sqlalchemy import SQLAlchemy
import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    phone_number = db.Column(db.String(40), nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), default=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "phone_number": self.phone_number,
            "name": self.name,
            "address": self.address,
            # do not serialize the password, its a security breach
        }

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)  
    description = db.Column(db.String(300))
    stock = db.Column(db.Integer)
    is_active = db.Column(db.Boolean, default=True)
    image = db.Column(db.String(250))
    price = db.Column(db.Float)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)
    category = db.relationship('Category', backref='product', lazy=True)
    id_stripe = db.Column(db.String(120), nullable=True) 


    def __repr__(self):
        return f'<Product {self.name}>'

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'image': self.image,
            'id_stripe': self.id_stripe,
        }

    def serialize_detial(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'image': self.image,
            'stock': self.stock,
            'description': self.description
        }
    
class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<Category {%s}>' % self.name
    
    def serialize(self):
        return {
        'id': self.id,
        'name': self.name,
    }
   
class Items(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.Float)
    unit = db.Column(db.Integer)
    order_id = db.Column(db.Integer, db.ForeignKey('order.id'), nullable=False)
    order = db.relationship('Order', backref='items', lazy=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    product = db.relationship('Product', backref='items', lazy=True)

    def serialize(self):
        return {
        'id': self.id,
        'price': self.price,
        'unit': self.unit,
        'product': self.product.serialize(),

    }

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    total_price = db.Column(db.Float)
    status_delivery = db.Column(db.String(120), unique=False, nullable=False)
    date = db.Column(db.DateTime, default=datetime.datetime.now())
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', backref='order', lazy=True)

    def serialize(self):
        return {
        'id': self.id,
        'name': self.user.email,
        'date': self.date,
        'status_delivery': self.status_delivery,
        "items": [item.serialize() for item in self.items]

    }