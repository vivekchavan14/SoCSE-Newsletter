
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            required : true,
            unique : true,
        },
        email : {
            type : String,
            required : true,
            unique : true
        },
        password : {
            type : String,
            required : true,
        }, 
        avatar : {
            type : String,
            default : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3ASample_User_Icon.png&psig=AOvVaw2UVPqy37t8CSW9TJdklwvS&ust=1698696342255000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCM34-HnIIDFQAAAAAdAAAAABAE'
        }
    }, {
        timestamps : true,
    }
)

const User = mongoose.model('User',userSchema);

export default User;