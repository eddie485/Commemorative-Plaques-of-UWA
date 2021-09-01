from flask import Flask
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///Plaques.db' #sets the relative path of the database file
db = SQLAlchemy(app) #db object which represents our actual database

from app import routes
from app import models
