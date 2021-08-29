from app import db


'''
Each class is an abstraction of a table in the database
However, an actual table is used instead of a class to represent the associative entity/link table since we are not necessarily going to
modify or manipulate this table
'''

#Associative entity
Themes_Location = db.Table('Themes_Location',
    db.Column('Location_ID', db.Integer, db.ForeignKey('Location.Location_ID')),
    db.Column('Themes_ID', db.Integer, db.ForeignKey('Themes.Themes_ID')),
    )

#Location table model
class Location(db.Model):
    Location_ID = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String(100), nullable=False)
    Coordinates = db.Column(db.String(150), nullable=False)
    Description = db.Column(db.String(200), nullable=False)
    Type = db.Column(db.String(100), nullable=False)
    Image_Path = db.Column(db.String(150), nullable=False)

    #Attribute which creates the connection between a Location and a Theme
    Themes = db.relationship('Theme', secondary=Themes_Location, backref=db.backref('PathLocation'), lazy='dynamic')

    def __repr__(self):
        return '<Location {}>'.format(self.username)

#Theme table model
class Themes(db.Model):
    Theme_ID = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return '<Themes {}>'.format(self.body)
