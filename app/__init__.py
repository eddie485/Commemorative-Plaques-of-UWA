from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///Plaques.db' #sets the relative path of the database file
db = SQLAlchemy(app) #db object which represents our actual database
migrate = Migrate(app,db)

from app import routes
from app import models
