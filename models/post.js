const mongoose= require('mongoose')

const postSchema= new mongoose.Schema({
    post:{
        type:String,
        required:true,
        maxlength:255,
        trim:true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})
const Post= mongoose.model('Post',postSchema)
module.exports= Post