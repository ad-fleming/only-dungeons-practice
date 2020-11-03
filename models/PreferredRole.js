const mongoose = require("mongoose")
const Schema = mongoose.Schema;

// We could line the role names on the form up exactly with the image filename
// When you click on a button, we have a data attribute with the corresponding name (data-name: ["barbarian", "rogue", etc.])
// Then we would be able to say (const url = `../graphics/${rolename}.svg)

const preferredRoleSchema = new Schema({
    roleName:{
        type: String,
        trim: true,
    },
})

const preferredRole = mongoose.model("preferredRole", preferredRoleSchema);
module.exports = preferredRole;