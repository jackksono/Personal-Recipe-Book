const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 20;
const bcrypt = require('bcryptjs');

const userSchema = new Schema ({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
})

userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, SALT_WORK_FACTOR);
    return
})
module.exports = mongoose.module('User', userSchema)