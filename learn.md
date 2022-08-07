# mern chat app Socket.io

## Project Decription:-

- I am create this amazin chat application .
- So the chat application is developed using _react node.js and Socket.io_ .
- Designed this by **style componet**

## Project Demo Text:-

- Login Page
- Register Page
- We have a Beautiful Loader
- We have to set an avatar from hear.
- avatar is change time to time
- avatar API Name **multi avatarAPI**
- _Chat application start_
- All chat show hear
- **real time data flow**
- **Emoji sand in chat**

### Our Projeco constst 2 main file

- public (Front-end) `yarn start`
- Server (Back-end) `yarn start`

# Install dependancy in Server

`npm i bcrypt cors dotenv express mongoose socket.io`

# How to run server

`yarn start`

## What is CORS in simple terms?

- **Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.**

# [What are three dots (…) in Javascript](https://codeburst.io/what-are-three-dots-in-javascript-6f09476b03e1)

- It takes in an iterable (e.g an array) and expands it into individual elements.
- The spread syntax is commonly used to make shallow copies of JS objects. Using this operator makes the code concise and enhances its readability.

---

## toast use for alert

`import {ToastContainer, toast} from 'react-toastify'`

### written reqister code in userController.js

### userModel.js :- defines the user Shema and Model

- **brcypt is used to encryption of the password**

# Connect to MongoDB

```
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

```

---

# COMMIT OF DAY :-

## DAY-1 :- Register Functionality is complit.

        - Data store in mongodb data base .
        - Anter register user move to chat page

## in the process of somw errror realated login and register **chear catch memery**.

## [multiavatar](https://api.multiavatar.com/4645646)

---

[HOW TO STYLE .md FILE](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
