const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const UserSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, unique: true},
    password: {type: String},
});

/* Se extiende userSchema agregando un NUEVO metodo */
UserSchema.methods.encryptPassword = async (password) => {
    /* A salt is a random string. By hashing a plain text password plus
     a salt, the hash algorithm’s output is no longer predictable. The 
     same password will no longer yield the same hash. The salt gets 
     automatically included with the hash, so you do not need to store 
     it in a database */
    const salt = await bcrypt.genSalt(Number(process.env.salt));
    return await bcrypt.hash(password, salt);
};

UserSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

UserSchema.methods.generateToken = function() {
    const token = jwt.sign(
        /* payload / datos cifrar entre el cliente y el server */
        {_id: this._id,
        email: this.email},

        process.env.JWTPRIVATEKEY,

        {expiresIn:'1d'}

        /*
        ,(err,token) => {
            if (err) throw err;
            else res.cookie('token', token).json('pass ok');
        }
        */
    );
    
    return token;
};


const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;