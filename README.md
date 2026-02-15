# 📇 Contact Manager API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)

Backend REST API demonstrating nested objects and arrays in Mongoose.

------------------------------------------------------------------------

## 🚀 Features

-   Nested Social Media Object
-   Array of Phone Numbers

------------------------------------------------------------------------

## 📌 API Example

POST `/api/contacts`

Request:

``` json
{
  "fullName": "John Doe",
  "phones": ["01012345678"],
  "socialMedia": {
    "facebook": "john.doe",
    "linkedin": "linkedin.com/in/johndoe"
  }
}
```

Response:

``` json
{
  "success": true,
  "data": {
    "_id": "...",
    "fullName": "John Doe",
    "phones": ["01012345678"],
    "socialMedia": {
      "facebook": "john.doe",
      "linkedin": "linkedin.com/in/johndoe"
    }
  }
}
```
