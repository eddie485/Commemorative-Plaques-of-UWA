from app import app, db
from flask import render_template, flash, redirect, url_for


@app.route("/")
@app.route("/index")
def index():
    return render_template("index.html", title="Home")

@app.route("/about")
def about():
    return render_template("about.html", title="About")

#Creating a locations class for debugging purposes before the database is created
"""class Location:
    def __init__(self):
        self.Name = "Winthrop Hall"
        self.Description = "Winthrop Hall is a nice place"
        self.Type = "Building"
        self.Image_Path = "{{ url_for('static', filename='images/winthrophall1.jpg')}}"

locations_list = [Location()]
for location in locations_list:
    print(location.Name)
    print(location.Description)
    print(location.Type)
    print(location.Image_Path)"""
    
@app.route("/locations")
def locations():
    return render_template("locations.html", title="Locations")

if __name__=="__main__":
    app.run(debug=True)