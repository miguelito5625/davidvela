const controller = {};

//Renders web pages

controller.signin = (req, res) => {

    res.render('auth/signin');

}

controller.signup = (req, res) => {

    res.render('auth/signup');

}

controller.signupPost = (req, res) =>{
    var data = req.body;

    

    console.log('usuario:', data.user, 'password:', data.password);
}

module.exports = controller;