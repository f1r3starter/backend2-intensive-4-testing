// Core
import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
    name: {
        first: String,
        last:  String,
    },
    email:    String,
    phone:    String,
    password: {
        type:   String,
        select: false,
    },
    sex: {
        type: String,
        enum: [ 'm', 'f' ],
    },
});

export const users = mongoose.model('users', usersSchema);
