import mongoose, {Schema} from "mongoose"

const userSchema  = new Schema ({

    personalDetails: {

        name: {
            firstName: String,
            lastName: String,
            req: true
        },

        email: {
            type: String,
            unique: true,
            req: true
        },

        phone:{
            type: String,
            unique: true,
            req: true
        },

        address:{
            type: String,
            req: true
        },

        username: {
            type: String,
            unique: true,
            toLowerCase: true,
            req: true
        },

        password: {
            type: String,
            req: true
        },

        avatar: {
            type: String,
            default: 'default.jpg',
            req: true
        },

        coverImage: {
            type: String,
            default: 'default.jpg'
        },

        role: {
            type: String,
            enum: ["customer", "buyer"],
            default: "customer",
            req: true
        }
    }
},{timestamps: true})

export const User = mongoose.model("User", userSchema)