
const controller = {};

controller.error404 = (req, res, next) => {

    res.status(404).render('404/index');
  
  };

controller.indexPage = (req, res) => {

    // res.render('index');
    res.send('index page');

}


module.exports = controller;