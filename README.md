# SocialMediaBackend
A social media backend using ODM
 The application uses an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Application uses Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to that it uses [Express.js](https://www.npmjs.com/package/express) and [Mongoose](https://www.npmjs.com/package/mongoose) packages.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Screenshots of the application
![](https://github.com/WinnieThomas/SocialMediaBackend/blob/main/Assets/GetUsers.png?raw=true)
![](https://github.com/WinnieThomas/SocialMediaBackend/blob/main/Assets/GetuserbyID.png?raw=true)
![](https://github.com/WinnieThomas/SocialMediaBackend/blob/main/Assets/Getallthought.png?raw=true)
![](https://github.com/WinnieThomas/SocialMediaBackend/blob/main/Assets/DetthoughtbyId.png?raw=true)
![](https://github.com/WinnieThomas/SocialMediaBackend/blob/main/Assets/CreateReaction.png?raw=true)
![](https://github.com/WinnieThomas/SocialMediaBackend/blob/main/Assets/CeateFriends.png?raw=true)

## Vedio Walkthrough
![](https://user-images.githubusercontent.com/111534031/219866534-97cf2e5b-f554-43e8-9668-af4721736199.mp4)




