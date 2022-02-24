const { Schema, model } = require("mongoose")

const postSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    body: {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true,
        validate : {
            validator : (value) => value.includes("@"),
            message : () => "Author should be in proper email format"
        }
    },
    published : {
        type : Boolean,
        default : false
    }
})

postSchema.pre("save", () => {
    console.log("Before saving hook works")
})

postSchema.post("save", () => {
    console.log("After saving hook works")
})

const PostModel = model("Post", postSchema )

module.exports = PostModel;

// Post -> posts
// User -> users