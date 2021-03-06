# Commemorative-Plaques-of-UWA
This is the repository for group 32's project on their CITS3200 Professional Computing unit. 

About The Project

This is an interactive map website showcasing the myriad of unique locations within the University of Western Australia. Most of the locations have specific plaques dedicated to preserving the history behind them for many years to come. Each location is categorised based on a theme that they fit into, this is can be seen through their icon colours.

The themes present a narrative that the locations share with each other. Select one of the three below to begin your walk and to start exploring the many stories that UWA has to offer. You can also change the style of the map based on your own personal preference between a satelite or a street view style map.

Built With

* Mapbox
* Bootstrap
* JQuery
* Flask

Getting Started

To run on your local system start a new virtual environment with `python3 -m venv venv`
Then activate your virtual environment with `venv\scripts\activate`
And install all the required packages with `pip install -r requirements.txt`

Now you can run the website on localhost with `flask run`
If you open a browser and go to `localhost:5000` then the website will be running

Usage

* User starts on homepage 
  * Presents a map alongside sidebar with all information
    * Map has ability to change between satelite and street view
    * Sidebar contains future information regarding walks
  * Navbar allows for access to different features of website 
    * Locations Page
    * About Page
  * Option to choose one of three themes from buttons or navbar dropdown
    * Arts Through Time
    * Distinct Personalities
    * Bilya Marlee 
* Themes pages present a map along side a sidebar
  * Map contains all walk information
    * GPS information on user location is automatically presented on mobile devices
    * All the Locations have markers at their location on the map
    * Markers are numbered according to their walk order
    * The focused on location is highlighted in blue
    * The User can press a marker to focus on that location
    * The User can press the GPS button in the top left to hide or reveal there location
  * The Sidebar contains information on the walk
    * The Start walk button focuses on the first location
    * All focused locations will have extra information appear on the sidebar
    * Underneath the information contains a Previous and next location buttons for moving
      * The previous and next location buttons allow the user to move through the walk locations in order
* Locations page presents all locations that are available on website
  * Locations have image and title as well as shortened descriptions  
    * Can be expanded upon clicking the read more button
    * Has a find on map button to take user directly to the location on map
* About page has all information regarding website
  * Summary of UWA Historical Society
  * Information about how website came to be
  * Aknowledgements
  * Bibliography
    
  

Maps are used from Mapbox. To use this web application open in:
* Safari 9 and above.
* Chrome latest.
* Firefox latest.
* Microsoft Edge 13 (with the most recent Windows 10 update).
Internet explorer is not supported. 

Contact

Ervin Basilio (22836721)
Haotian Chen (22529033)
Jason Grogan (21830393)
Timothy Pye (22708266)
Cassie Ritchie (22358769)
Jamie Vo (22735819)

Acknowledgments

Special thanks to:

* Dr. Margo Warburton
* Dr. Joan Pope
* Maria Carvalho and Lesley Annamalay
* Tom Huckstadt
* Mapbox
