from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    phone_number = db.Column(db.Integer)
    address = db.Column(db.String(120), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), default=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)  
    description = db.Column(db.String(250))
    stock = db.Column(db.Integer)
    is_active = db.Column(db.Boolean, default=True)
    image = db.Column(db.String(250))
    price = db.Column(db.Float)

    def __repr__(self):
        return f'<Product {self.name}>'

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
        }

    # >> Product(db.Model) (siguiendo el video de Marcos no veo ésto necesario) <<

    #photo_2 = db.Column(db.String(300), unique=False, nullable=False)
    #price = db.Column(db.Float)
    #size = db.Column(db.String(80), unique=False, nullable=False)
    #category_id = (db.Integer, ForeignKey(category.id))

    # >> Termina el comentario del class Product(db.Model) <<

    
class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
   
class Items(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.Integer)
    product_id = db.Column(db.Integer)
    unit = db.Column(db.Integer)
    order_id = db.Column(db.Integer)

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, primary_key=True)
#   date = db.Column(db.date, primary_key=True)
    discount = db.Column(db.Boolean(), unique=False, nullable=False)
    total_price = db.Column(db.Integer)
    status_delivery = db.Column(db.String(120), unique=True, nullable=False)
    