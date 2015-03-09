
// Load Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create the Schema
var standupSchema = new Schema({
    memberName: String,
    project: String,
    workYesterday: String,
    workToday: String,
    impediment: String,
    createdOn: { type: Date, default: Date.now }
});

// Export the model ...
module.exports = mongoose.model('Standup', standupSchema);


/*
// how to create a schema that has no _id field
// disabled _id
var noIdSchema = new Schema({ name: String}, {_id: false});  // this document won't have an _id


// here is another way to create a schema
// Exampl of using Schema.add ...
var exampleSchema = new Schema;

exampleSchema.add({
    memberName: String,
    project: String,
    workYesterday: String,
    workToday: String,
    impediment: String,
    createdOn: { type: Date, default: Date.now }
});

// We can programmatically decide which fields to add to a schema
var includeMiddleName = true;

var exampleSchema2 = new Schema;

if (includeMiddleName){
    exampleSchema2.add({
       memberName: {
           first: String,
           middle: String,
           last: String
       }
    });
}
else{
    exampleSchema2.add({
        memberName:{
            first: String,
            last: String
        }
    });
}

exampleSchema2.add({
    project: String,
    workYesterday: String,
    workToday: String,
    impediment: String,
    createdOn: { type: Date, default: Date.now }
});
*/