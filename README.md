# Restaurant-reservations-api
  API for Restaurant reservations.

  The API provides REST routes for accessing the data.

## Requirements
  1. Heroku
  2. MONGODB Atlas
  3. Node.js ^v8.14.0

## Getting Started
  1. Install required packages:
      ```
       npm install
      ```
  2. Then start:
      ```
      npm start
      ```
      
 ### Database
  The database configuration is MONGODB_URL variable in the .env file
  
  You might want to get a database instance running locally, The easiest way to do this is to use docker via command:

  `docker run --name local-mongo -d mongo`

  Restaurant-reservations-api runs on http://localhost:3000
