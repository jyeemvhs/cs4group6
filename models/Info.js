

var mongoose = require("mongoose");

//Schema is a decription (the definition) of the mongoDB document.
var infoSchema = mongoose.Schema({
	name: {
		required: true,
		unique: true,		
		type:String
    },
	countDown: Number,
	notes: String
});

var Info = mongoose.model("Info", infoSchema);

module.exports = Info;



