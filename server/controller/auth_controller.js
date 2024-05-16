const UserModel = require('../models/user.js');


const createUser = async (req,res) => {
    const { name, email, password } = req.body;

    try {
        const User = new UserModel(
            {name: name,
            email: email,
            password: password}
        );

        User.password = await User.encryptPassword(User.password);

        await User.save();
        res.status(200).send({data: User, message: 'Account created succesfully'})
    } catch (err) {
        res.status(422).json(err);
    } 
};


const validateLogin = async (req,res) => {
    const { email, password } = req.body;

    // mongo document email: request email
    const User = await UserModel.findOne({email: email});

    //if not null
    if (User) {
        const passValid = await User.comparePassword(password);
        if(passValid){
            const token = await User.generateToken();
            //another option
            //res.status(200).json({ auth: true, data: token, message: 'Sign in successful, please wait...' });
            res.status(200).cookie('token', token).json(User);
        } else {
            res.status(422).json('password not valid');
        }
    } else {
        res.status(422).json('User not found')
    };
};


const passwordChange = async (req,res) => {
    const { email, password, new_password } = req.body;
    
    
    // mongo document email: request email
    const User = await UserModel.findOne({email: email});

    //if not null
    if (User) {
        const passValid = await User.comparePassword(password);
        if (passValid) {
            const passEncrypt = await User.encryptPassword(new_password);
            await UserModel.updateOne(/*filter = */{email: email},/* update = */{ $set : {password: passEncrypt}});                
        } else {
            res.status(422).json('Password is incorrect')
        }
        // sin el .json() no se manda bien
        res.status(200).cookie('token', '', {maxAge: 1}).json();
    } else {
        res.status(422).json('User not found');
    };
}

const usernameChange = async (req,res) => {
    const { email, new_username, password } = req.body;
    
    // mongo document email: request email
    const User = await UserModel.findOne({email: email});

    //if not null
    if (User) {
        const passValid = await User.comparePassword(password);
        if (passValid) {
            await UserModel.updateOne(/*filter = */{email: email},/* update = */{ $set : {name: new_username}});                
        } else {
            res.status(422).json('Password is incorrect')
        }
        res.status(200).json();
    }
}

    

const getProfile = async (req, res) => {
    const { _id } = req;
    const User = await UserModel.findOne({_id: _id});

    res.status(200).json( User );
}  


const deleteToken = async (req, res) => {
    res.cookie('token', '', {maxAge: 1}).json(true);
};

module.exports = {
    createUser,
    validateLogin,
    passwordChange,
    usernameChange,
    getProfile,
    deleteToken
};