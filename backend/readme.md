# Backend API Documentation

## Endpoint

' /api/users/register '

## Description

This endpoint is used to register a new user in the system. It requires specific user details to create an account and store the information in the database.

## HTTP Method

Post

## Request Body

The request body should be a JSON object with the following fields:

- `fullName`:(object):
  - `firstName` : (String, required) User first name (minimum 3 characters long)
  - `lastName` : (String, required) User last name
- `email`: (String, required) The email address for the new user. Must be a valid email format.
- `password`: (String, required) The password for the new user. Should meet the minimum security requirements ( minimum 6 characters long).

Example:

```json
{
  "username": "newuser",
  "email": "newuser@example.com",
  "password": "securePassword123"
}
```

## Response Status Codes

- 201 Created: Successfully registered the new user. The response body may contain user details or a success message.

```json
{
  "user": {
    "fullName": {
      "firstName": "Muhammad Zohaib",
      "lastName": "Hasan"
    },
    "email": "mzohaib27@gmail.com",
    "_id": "67d4b6f46f1a77d8cc119ec9",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDRiNmY0NmYxYTc3ZDhjYzExOWVjOSIsImlhdCI6MTc0MTk5MzcxNn0.GFxUQ7xgJ2lPO-PcYa_tFtG1-zlPOlDI7HRBi_ZLD8g"
}
```

- 400 Bad Request: The request body is invalid or missing required fields. The response body should contain error messages indicating the issue.

```json
{
  "errors": [
    {
      "msg": "First name is required",
      "param": "fullName.firstName",
      "location": "body"
    }
  ]
}
```

- 409 Conflict: The username or email is already taken. The response body should indicate which field is conflicting.

```json
{
  "message": "Email already exists"
}
```

- 500 Internal Server Error: An unexpected error occurred on the server. The response body may contain a generic error message.

```json
{
  "message": "Internal Server Error"
}
```

## Endpoint

' /api/users/login '

## Description

This endpoint is used to authenticate an existing user in the system. It verifies the user's credentials and returns a token for authentication.

## HTTP Method

Post

## Request Body

The request body should be a JSON object with the following fields:

- `email`: (String, required) The email address of the user. Must be a valid email format.
- `password`: (String, required) The password for the user.

Example:

```json
{
  "email": "user@example.com",
  "password": "securePassword"
}
```

## Response Status Codes

- 200 OK: Successfully authenticated the user. The response body contains user details and a token.

```json
{
  "userInfo": {
    "fullName": {
      "firstName": "Muhammad Zohaib",
      "lastName": "Hasan"
    },
    "_id": "67d4b6f46f1a77d8cc119ec9",
    "email": "mzohaib27@gmail.com",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDRiNmY0NmYxYTc3ZDhjYzExOWVjOSIsImlhdCI6MTc0MTk5NjM1Mn0.5m3pPHOnik9qwD15BQRFgZnXWh5e-9o9zuSqSSF3VeY"
}
```

- 400 Bad Request: The request body is invalid or missing required fields. The response body should contain error messages indicating the issue.

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

- 401 Unauthorized: Invalid email or password. The response body should indicate that the credentials are incorrect.

```json
{
  "message": "Invalid Email or Password"
}
```

- 500 Internal Server Error: An unexpected error occurred on the server. The response body may contain a generic error message.

```json
{
  "message": "Internal Server Error"
}
```

## Endpoint

' /api/users/getprofile '

## Description

This endpoint is used to retrieve the profile information of the authenticated user.

## HTTP Method

Get

## Request Body

No request body is required for this endpoint.

## Response Status Codes

- 200 OK: Successfully retrieved the user profile. The response body contains user details.

```json
{
  "fullName": {
    "firstName": "Muhammad Zohaib",
    "lastName": "Hasan"
  },
  "_id": "67d4b6f46f1a77d8cc119ec9",
  "email": "mzohaib27@gmail.com",
  "__v": 0
}
```

- 401 Unauthorized: The user is not authenticated. The response body should indicate that the user needs to log in.

```json
{
  "message": "Unauthorized, token is missing"
}
```

- 500 Internal Server Error: An unexpected error occurred on the server. The response body may contain a generic error message.

```json
{
  "message": "Internal Server Error"
}
```

## Endpoint

' /api/users/logout '

## Description

This endpoint is used to log out the authenticated user. It invalidates the current token.

## HTTP Method

Get

## Request Body

No request body is required for this endpoint.

## Response Status Codes

- 200 OK: Successfully logged out the user. The response body contains a success message.

```json
{
  "message": "Logged out."
}
```

- 401 Unauthorized: The user is not authenticated. The response body should indicate that the user needs to log in.

```json
{
  "message": "Unauthorized, token is missing"
}
```

- 500 Internal Server Error: An unexpected error occurred on the server. The response body may contain a generic error message.

```json
{
  "message": "Internal Server Error"
}
```

## Endpoint

' /api/captains/register '

## Description

This endpoint is used to register a new captain in the system. It requires specific captain details to create an account and store the information in the database.

## HTTP Method

Post

## Request Body

The request body should be a JSON object with the following fields:

- `fullName`:(object):
  - `firstName` : (String, required) Captain's first name (minimum 3 characters long)
  - `lastName` : (String, required) Captain's last name
- `email`: (String, required) The email address for the new captain. Must be a valid email format.
- `password`: (String, required) The password for the new captain. Should meet the minimum security requirements ( minimum 6 characters long).
- `vehicle`:(object):
  - `color`: (String, required) Vehicle color
  - `plate`: (String, required) Vehicle plate number
  - `capacity`: (Number, required) Vehicle capacity
  - `vehicleType`: (String, required) Vehicle type

Example:

```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword",
  "vehicle": {
    "color": "red",
    "plate": "ABC-123",
    "capacity": 4,
    "vehicleType": "Car"
  }
}
```

## Response Status Codes

- 201 Created: Successfully registered the new captain. The response body may contain captain details or a success message.

```json
{
  "captain": {
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC-123",
      "capacity": 4,
      "vehicleType": "Car"
    },
    "_id": "60f0a0b0c0d0e0f0a0b0c0d0",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGYwYTBiMGMwZDBlMGYwYTBiMGMwZDAiLCJpYXQiOjE2MjY0NDQ4MDAsImV4cCI6MTYyNzY1NDQwMH0.abcdefghijklmnopqrstuvwxyz123456"
}
```

- 400 Bad Request: The request body is invalid or missing required fields. The response body should contain error messages indicating the issue.

```json
{
  "errors": [
    {
      "msg": "First name is required",
      "param": "fullName.firstName",
      "location": "body"
    }
  ]
}
```

- 409 Conflict: The email is already taken. The response body should indicate which field is conflicting.

```json
{
  "message": "Captain already exist with this email"
}
```

- 500 Internal Server Error: An unexpected error occurred on the server. The response body may contain a generic error message.

```json
{
  "message": "Internal Server Error"
}
```

## Endpoint

' /api/captains/login '

## Description

This endpoint is used to authenticate an existing captain in the system. It verifies the captain's credentials and returns a token for authentication.

## HTTP Method

Post

## Request Body

The request body should be a JSON object with the following fields:

- `email`: (String, required) The email address of the captain. Must be a valid email format.
- `password`: (String, required) The password for the captain.

Example:

```json
{
  "email": "captain@example.com",
  "password": "securePassword"
}
```

## Response Status Codes

- 200 OK: Successfully authenticated the captain. The response body contains captain details and a token.

```json
{
  "captainInfo": {
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC-123",
      "capacity": 4,
      "vehicleType": "Car"
    },
    "_id": "60f0a0b0c0d0e0f0a0b0c0d0",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGYwYTBiMGMwZDBlMGYwYTBiMGMwZDAiLCJpYXQiOjE2MjY0NDQ4MDAsImV4cCI6MTYyNzY1NDQwMH0.abcdefghijklmnopqrstuvwxyz123456"
}
```

- 400 Bad Request: The request body is invalid or missing required fields. The response body should contain error messages indicating the issue.

```json
{
  "message": "Invalid email or password"
}
```

- 401 Unauthorized: Invalid email or password. The response body should indicate that the credentials are incorrect.

```json
{
  "message": "Captain not found"
}
```

- 403 Forbidden: Invalid password.

```json
{
  "message": "Invalid Password"
}
```

- 500 Internal Server Error: An unexpected error occurred on the server. The response body may contain a generic error message.

```json
{
  "message": "Internal Server Error"
}
```

## Endpoint

' /api/captains/getcaptainprofile '

## Description

This endpoint is used to retrieve the profile information of the authenticated captain.

## HTTP Method

Get

## Request Body

No request body is required for this endpoint.

## Response Status Codes

- 200 OK: Successfully retrieved the captain profile. The response body contains captain details.

```json
{
  "captain": {
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC-123",
      "capacity": 4,
      "vehicleType": "Car"
    },
    "_id": "60f0a0b0c0d0e0f0a0b0c0d0",
    "__v": 0
  }
}
```

- 401 Unauthorized: The captain is not authenticated. The response body should indicate that the captain needs to log in.

```json
{
  "message": "Unauthorized"
}
```

- 500 Internal Server Error: An unexpected error occurred on the server. The response body may contain a generic error message.

```json
{
  "message": "Internal Server Error"
}
```

## Endpoint

' /api/captains/logout '

## Description

This endpoint is used to log out the authenticated captain. It invalidates the current token.

## HTTP Method

Get

## Request Body

No request body is required for this endpoint.

## Response Status Codes

- 200 OK: Successfully logged out the captain. The response body contains a success message.

```json
{
  "message": "Logged out."
}
```

- 401 Unauthorized: The captain is not authenticated. The response body should indicate that the captain needs to log in.

```json
{
  "message": "Unauthorized"
}
```

- 500 Internal Server Error: An unexpected error occurred on the server. The response body may contain a generic error message.

```json
{
  "message": "Internal Server Error"
}
```
