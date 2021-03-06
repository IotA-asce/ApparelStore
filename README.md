# ApparelStore

A web-app for an apparel store with features
 
 - The store keeps reocrds for its items in a database where some items may be discounted and some other items should be displayed as "new arrivals".
 - A user may search for a specific item
 - By default, when a user signs in, based on his/her profile (male/female etc), show him/her preferred set of clothing.
 - Users will be divided into two groups: some users looking for seasonal clothing mainly, some other looking for new arrivals.
 - depending on their preference already set in the database, their shopping experience would be different
 - Users will be shown products of price range based on their purchase history


<!-- ![Logo]() -->

## Author

- [@IotA-asce](https://github.com/IotA-asce)

## Built With

 - [ReactJS](https://reactjs.org/)
 - [SpringBoot](https://spring.io/)


## Screenshots

  
## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/IotA-asce/ApparelStore.git
   ```
2. Install dependencies
   ```sh
   cd web-app
   npm install
   ```
    
## Run Locally

1. Start ReactJS web app

```bash
  cd web-app
  npm run dev
```

2. Start the spring server

```bash
  cd ../spring-server
  ./mvnw spring-boot:run
```