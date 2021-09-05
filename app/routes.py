from app import app, db
from flask import render_template, flash, redirect, url_for


@app.route("/")
@app.route("/index")
def index():
    return render_template("index.html", title="Home")

@app.route("/about")
def about():
    return render_template("about.html", title="About")




@app.route("/locations")
def locations():
    return render_template("locations.html", title="Locations")

if __name__=="__main__":
    app.run(debug=True)