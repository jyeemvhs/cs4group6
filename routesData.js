var express = require("express");
var passport = require("passport");
var path = require("path");


var User = require("./models/user");
var router = express.Router();

const myDatabase = require('./myDatabase');
let db = new myDatabase();

const Info = require('./Info');


router.use(function(req, res, next) {
  res.locals.currentUserjy = req.user;
  res.locals.errors = req.flash("error");
  res.locals.infos = req.flash("info");
  next();
});

//new create code from signup.
router.post('/create', function(req, res){
    if (!req.isAuthenticated()) {
        console.log("req is not Authenticated");
        res.json({error:true});
        return;
    }

//     let trimIdentifier = req.body.identifier.trim();
//     if (trimIdentifier == "") {
//         res.json({error:true});
//         return;
//     }

//     let identifier = Number(trimIdentifier);
//     if (Number.isNaN(identifier)) {
//         res.json({error:true});
//         return;
//     }

//     let trimgradeLevel = req.body.gradeLevel.trim();
//     if (trimgradeLevel == "") {
//         res.json({error:true});
//         return;
//     }

//     let gradeLevel = Number(trimgradeLevel);
//     if (Number.isNaN(gradeLevel)) {
//         res.json({error:true});
//         return;
//     }

//  let drives=false;

 let trimcountDown = req.body.countDown.trim();
    if (trimcountDown == "") {
        res.json({error:true});
        return;
    }

    let countDown = Number(trimcountDown);
    if (Number.isNaN(countDown)) {
        res.json({error:true});
        return;
    }

    let notes = " ";

    let obj = new Info(req.user.username,countDown,notes);
////change code       
    db.postData(obj,res);

    console.log("post create routesData.js");
//    res.json({error:true});
});

router.get('/read', function(req, res){
    if (!req.isAuthenticated()) {
        console.log("req is not Authenticated");
        res.json({error:true});
        return;
    }

    return(db.getData(req.user.username,res));

});

// router.put('/update', function(req, res){

//     if (!req.isAuthenticated()) {
//         console.log("req is not Authenticated");
//         res.json({error:true});
//         return;
//     }


//     let trimIdentifier = req.body.identifier.trim();
//     if (trimIdentifier == "") {
//         res.json({error:true});
//         return;
//     }

//     let identifier = Number(trimIdentifier);
//     if (Number.isNaN(identifier)) {
//         res.json({error:true});
//         return;
//     }


//     let trimgradeLevel = req.body.gradeLevel.trim();
//     if (trimgradeLevel == "") {
//         res.json({error:true});
//         return;
//     }

//     let gradeLevel = Number(trimgradeLevel);
//     if (Number.isNaN(gradeLevel)) {
//         res.json({error:true});
//         return;
//     }
//      let drives;

//      let trimDrives = req.body.drives.trim();
//     // console.log(trimDrives == "true");
//     if(trimDrives == "true"){
//         drives = true;
//     }else{
//         drives = false;
//     }
// console.log("here = " + gradeLevel);
//     let obj = new Info(identifier,req.user.username,gradeLevel,drives);

//     return(db.putData(obj,res));

// });

router.delete('/delete/:identifier', function(req, res){

    if (!req.isAuthenticated()) {
        console.log("req is not Authenticated");
        res.json({error:true});
        return;
    }

//changed code.
    return( db.deleteData(req.user.username,res));

});



// router.get('/readAdmin', function(req, res){
//     if (!req.isAuthenticated()) {
//         console.log("req is not Authenticated");
//         res.json({error:true});
//         return;
//     }

// //changed code.
// console.log(req.query.username);
// console.log(req.query.drives);
//     return(db.getData(req.query.username,res));

// });



// router.put('/updateAdmin', function(req, res){

//     if (!req.isAuthenticated()) {
//         console.log("req is not Authenticated");
//         res.json({error:true});
//         return;
//     }


//     let trimIdentifier = req.body.identifier.trim();
//     if (trimIdentifier == "") {
//         res.json({error:true});
//         return;
//     }

//     let identifier = Number(trimIdentifier);
//     if (Number.isNaN(identifier)) {
//         res.json({error:true});
//         return;
//     }


//     let trimgradeLevel = req.body.gradeLevel.trim();
//     if (trimgradeLevel == "") {
//         res.json({error:true});
//         return;
//     }

//     let gradeLevel = Number(trimgradeLevel);
//     if (Number.isNaN(gradeLevel)) {
//         res.json({error:true});
//         return;
//     }
//     let drives;

//     let trimDrives = req.body.drives.trim();
//     if(trimDrives == "true"){
//         drives = true;
//     }else{
//         drives = false;
//     }
// console.log("here = " + gradeLevel);
//     let obj = new Info(identifier,req.body.username,gradeLevel,drives);
// //changed code.
//     return(db.putData(obj,res));

// });

router.put('/updateTime', function(req, res){

    
    if (!req.isAuthenticated()) {
        console.log("req is not Authenticated");
        res.json({error:true});
        return;
    }

     let trimcountDown = req.body.countDown.trim();
     console.log(trimcountDown);
    if (trimcountDown == "") {
        res.json({error:true});
        return;
    }

    let countDown = Number(trimcountDown);
    if (Number.isNaN(countDown)) {
        res.json({error:true});
        return;
    }
// console.log("trimcountdown");
// console.log(req.body.notes.trim());
// let trimNotes = notes.trim();
let notes = req.body.notes.trim();
// let notes = trimNotes.toString();
// console.log(notes);
// console.log(typeof notes);

    let obj = new Info(req.user.username,countDown,notes);

    return(db.putData(obj,res));
   // User.findOneAndUpdate({_id}, { $set: userObj }, { upsert: true, new: true }, callback);

});

// router.put('/updateNotes', function(req, res){

    
//     if (!req.isAuthenticated()) {
//         console.log("req is not Authenticated");
//         res.json({error:true});
//         return;
//     }

//      let trimcountDown = req.body.countDown.trim();
//      console.log(trimcountDown);
//     if (trimcountDown == "") {
//         res.json({error:true});
//         return;
//     }

//     let countDown = Number(trimcountDown);
//     if (Number.isNaN(countDown)) {
//         res.json({error:true});
//         return;
//     }
// console.log("trimcountdown");

// // console.log(req.body.notes);
// let trimNotes = req.body.notes.trim();
// let notes = trimNotes.toString();
// console.log(notes);
// console.log(typeof notes);

//     let obj = new Info(req.user.username,countDown,notes);

//     return(db.putData(obj,res));
   // User.findOneAndUpdate({_id}, { $set: userObj }, { upsert: true, new: true }, callback);

// });

router.get('/readTime', function(req, res){
    if (!req.isAuthenticated()) {
        console.log("req is not Authenticated");
        res.json({error:true});
        return;
    }

    return(db.getData(req.user.username,res));

});

// router.patch('/updateNotes', function(req, res){

//     let trimNotes = req.body.notes.trim();
//     let notes = trimNotes.toString();
//     console.log(notes);
//     console.log(typeof notes);
//         // if (trimNotes == null) {
//     //     res.json({error:true});
//     //     return;
//     // }
//     if (!req.isAuthenticated()) {
//         console.log("req is not Authenticated");
//         res.json({error:true});
//         return;
//     }


//     // let obj = new Info(req.user.username,countDown);

//     return(db.patchData({notes:notes},res));
//    // User.findOneAndUpdate({_id}, { $set: userObj }, { upsert: true, new: true }, callback);

// });

module.exports = router;

