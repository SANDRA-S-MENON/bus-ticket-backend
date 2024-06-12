const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":String,
        "date":String,
        "address":String,
        "place":String,
        "to":String,
        "from":String,
    }
)
let busmodel = mongoose.model("buss",schema);
module.exports={busmodel}