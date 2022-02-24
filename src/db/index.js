const { connect } = require("mongoose")

// const MONGO_URI = "mongodb://localhost:27017/dxc-feb-22";
const MONGO_URI = "mongodb+srv://dxcuser:sXSgCbtFfU1AJ1LB@cluster0.e9xsq.mongodb.net/dxc-feb-22?retryWrites=true&w=majority";

connect(MONGO_URI)
    .then(conn => {
        console.log("Mongo Connected...")
    }).catch(err => {
        console.log(err);
        process.exit(1);
    })