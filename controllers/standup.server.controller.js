var Standup = require('../models/standup.server.model.js');

// handle post
exports.create = function(req, res) {
    // create a new standup model instance ( a new document)
    // from request parameters entered by the user
    var entry = new Standup({
        memberName: req.body.memberName,
        project: req.body.project,
        workYesterday: req.body.workYesterday,
        workToday: req.body.workToday,
        impediment: req.body.impediment
    });  //note _id will be auto generated, and our schema will supply default createdOn Date

    // save the entry to the database
    entry.save();// normally we do a call back to handle errors

    // redirect to home page
    res.redirect(301,"/");  //301 Moved Permanently
};

// handle get
exports.getNote = function(req, res){
    res.render('newnote', { title: 'Standup - New Note'});
};