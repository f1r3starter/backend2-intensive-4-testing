// Core
import mongoose from 'mongoose';

const classesSchema = new mongoose.Schema({
    title:       String,
    description: String,
    hash:        String,
    students:    [
        {
            user:     ObjectID,
            status:   String,
            expelled: Boolean,
            notes:    String,
        },
    ],
    lessons: [
        {
            lesson:    ObjectID,
            scheduled: Date,
        },
    ],
});

export const classes = mongoose.model('classes', classesSchema);
