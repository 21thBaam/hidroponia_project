const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/hidroponic", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log("DB Connected"))
    .catch(err => console.log(err));

module.exports = mongoose;