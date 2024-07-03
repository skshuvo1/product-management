Details about how the projects run locally;

1. At first set install typeScript, mongoose, express, cors, dotenv
2. Set up eslint and prettier
3. Create interface, model, routes, controller, services for products.
4. Create a database in mongoDB to save all data.
5. Use json file to POST data to mongodb compass by connecting .env and the secrets are saved into .env file.
6. route.ts contains the route only
7. controller.ts receives data from routes and send to server by service.ts and get data from service.ts and returns it to client.
8. Use postman to check POST, GET, PUT, UPDATE, DELETE from server & client.
9. Use zod validation to validate data.
10. Create order interface, modes, route, controller, service etc to check and find order details and also use zod validation here to validate data.
