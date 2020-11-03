const mongoose = require("mongoose");
const db = require("../models");
// const uuid = require ('uuid');

// This file empties the User collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/only-dungeons-practice"
)

const userSeed = [

    {
        // _id: uuid(),
        userName: "MoonRider34",
        password: "dNDrocks213",
        email: "moon_rider23@gmail.com",
        isDm: true,
        roomName: "The Moonlit Quarter",
        tagLine: "Snitches get stitches",
        categoryType: {
            byTheBook: true, 
            norestriction: false,
            homebrew: false,
            lvl1only: false,
            rpersonly: true,
            oneshots: true,
            displaydice: false,
            voyuerallowed: true
        },
        availablity:{
            monday: true,
            tuesday: false,
            wednesday: true,
            thursday: false,
            friday: true, 
            saturday: true,
            sunday: false
        }, 
        timeOfDay: {
            day: false,
            afternoon: false,
            night: true
        },
        preferredRole: []
    },

    {
        // _id: uuid(),
        userName: "SunRider43",
        password: "dndIsTheBEST22",
        email: "sunRider43@gmail.com",
        isDm: true,
        roomName: "The Sun Spot",
        tagLine: "Frosty Games Only",
        categoryType: {
            byTheBook: true, 
            norestriction: true,
            homebrew: true,
            lvl1only: true,
            rpersonly: true,
            oneshots: true,
            displaydice: true,
            voyuerallowed: true
        },
        availablity:{
            monday: true,
            tuesday: true,
            wednesday: false,
            thursday: true,
            friday: false, 
            saturday: true,
            sunday: true
        }, 
        timeOfDay: {
            day: true,
            afternoon: false,
            night: true
        },
        preferredRole: []
    },

    {
        // _id: uuid(),
        userName: "dnDreamer",
        password: "sweetDreams234",
        email: "dnDreamer@gmail.com",
        isDm: true,
        roomName: "The Astral Sea",
        tagLine: "Make a Constitution Saving Throw",
        categoryType: {
            byTheBook: false, 
            norestriction: true,
            homebrew: true,
            lvl1only: false,
            rpersonly: false,
            oneshots: true,
            displaydice: true,
            voyuerallowed: false
        },
        availablity:{
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true, 
            saturday: true,
            sunday: true
        }, 
        timeOfDay: {
            day: false,
            afternoon: true,
            night: false
        },
        preferredRole: []
    },

    {
        // _id: uuid(),
        userName: "MrMurderHobo",
        password: "killITWITHfire@gmail.com",
        email: "MrMurderHobo@gmail.com",
        isDm: false,
        tagLine: "Kill it with Fire!",
        categoryType: {
            byTheBook: false, 
            norestriction: true,
            homebrew: true,
            lvl1only: false,
            rpersonly: true,
            oneshots: true,
            displaydice: true,
            voyuerallowed: true
        },
        availablity:{
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true, 
            saturday: true,
            sunday: true
        }, 
        timeOfDay: {
            day: true,
            afternoon: true,
            night: true
        },
        preferredRole: []
    }

];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
