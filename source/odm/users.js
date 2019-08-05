// Core
import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
    name: {
        first: String,
        last:  String,
    },
    phones: [
        {
            email:   String,
            primary: Boolean,
        },
    ],
    emails: [
        {
            email:   String,
            primary: Boolean,
        },
    ],
    password: String,
    sex:      {
        type: String,
        enum: [ 'm', 'f' ],
    },
    social: {
        facebook: String,
        linkedin: String,
        github:   String,
        skype:    String,
    },
    notes:    String,
    hash:     String,
    disabled: Boolean,
    created:  Date,
    modified: Date,
});

export const users = mongoose.model('users', usersSchema);
