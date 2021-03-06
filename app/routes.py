from app import app
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

@app.route("/theme1")
def walk1():
    return render_template("theme1.html", title="Theme 1")

@app.route("/theme2")
def walk2():
    return render_template("theme2.html", title="Theme 2")

@app.route("/theme3")
def walk3():
    return render_template("theme3.html", title="Theme 3")

if __name__=="__main__":
    app.run(debug=True)