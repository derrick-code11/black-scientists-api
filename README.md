# Black Scientists API

Welcome to the Black Scientists API project! This API provides information about notable black scientists and their contributions. It allows you to retrieve, create, update, and delete scientist records. You can access the api [here](https://black-scientists-api-c34142d28576.herokuapp.com/scientists)

## Features

- Retrieve a list of black scientists.
- Get details about a specific scientist by ID.
- Create a new scientist record.
- Update an existing scientist's information.
- Delete a scientist from the database.

## Installation

1. Clone the repository:

```
git clone https://github.com/derrick-code11/black-scientists-api.git
cd black-scientists-api 
```

2. Install dependencies:
```
npm install express mongoose cors nodemon
```

3. Set up environment variables:
Create a .env file in the root directory and add your MongoDB connection URI:
```
MONGODB_URI=your-mongodb-uri
```

## Usage
1. Start server: ```nodemon app.js```

2. Interact with the API using endpoints like ```/scientists``` and /```scientists/:id.```

## Folder Structure
```go
BLACK-SCIENTISTS-API/
├── controllers/
│   ├── scientistController.js
│   
├── models/
│   ├── scientist.js
│   
├── routes/
│   ├── scientists.js
│   
├── .env
├── package.json
├── app.js
└── README.md
```

## Contributing
It's my dream to make this API a bigger one 🚀🔥 hence your contributions are welcome! If you have any additions or suggestions for improvement, please feel free to submit a pull request. I'll happy to review them since they could provide a new learning experience.

## Acknowledgment
All info were sourced from [Wikipedia](https://wikipedia.com)


## License
This project is licensed under the MIT License.






