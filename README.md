# Food-Truck-Application

  The purpose of this application is for a vendors and customers to help one another in finding local food trucks on a map. The vendor is able to make a profile where they can update a menu page with items they are selling, along with a description and price. They may also input a location on a map diplaying themselves to users. 
  When a user logs in, they are taken to a map page displaying all the vendors. The user may tap on the vendors pin 
and an info window is diplayed with the vendor name and brief description on the truck. They may click on the link inside the pin and are taken to the vendors menu page with all the items that vendor is selling. 

## Built With
 - Node JS
 - React 
 - Redux
 - NPM
 - JSX
 - React-Google-Maps
 - Google Maps API
 - Material UI
 - PostgreSQL 

## Getting Started

Clone the repo onto your local machine and start a database with PostgreSQL. 

Use the sequal document located in the repo to name the database and create the table.


## Prerequisites

- Node.js 
- Code editor w/ brew services 
- PostgreSQL 

### Installing 

1. Download project with git clone
2. npm install
3. Create a .env file same level as your node file, with REACT_APP_GOOGLE_KEY and SERVER_SESSION_SECRET keys. 
    The first will be your google react key, to get one you may follow this link,
    https://developers.google.com/maps/documentation/javascript/get-api-key#get-the-api-key.
    
    The second will help create your password and keep is safe, can be filled with random characters, numbers, and symbals.
    
    REACT_APP_GOOGLE_KEY = AIzaSyAzJ19_bp7AKuQZ9wkX6vBrSxL4P03HdG8
    SERVER_SESSION_SECRET = \C5aw(Xa%h8}fL.f

4. Open postgreSQL and create a database with the sequal file given
5. Killall node if necessary
6. npm install --save react-google-maps 
7. npm run server 
8. npm run client on one terminal


### Completed Features

Vendor should be able to update their location and menu items, user should be able to see their locations and search their menus after they click on the pin. 

### Next Steps 

- Push site to Heroku 

## Authors

- Jesse Gjerde

## Acknowledgments

- Dane Smith, Instructor
