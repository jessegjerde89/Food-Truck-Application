# Foodaholic

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
    
    REACT_APP_GOOGLE_KEY = (key)
    
    SERVER_SESSION_SECRET = (key)

4. Open postgreSQL and create a database with the sequal file given
5. run ``killall node`` if necessary
6. run ``npm install --save react-google-maps``
7. ``npm run server `` on new terminal
8. ``npm run client`` on new terminal


### Completed Features

Vendor should be able to update their location and menu items, user should be able to see their locations and search their menus after they click on the pin. 

### Next Steps 

- Update location with address
- Switch from React to React Native

## Authors

- Jesse Gjerde

## Acknowledgments

- Dane Smith, Instructor
