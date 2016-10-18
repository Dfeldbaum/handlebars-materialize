var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { // 
  	res.render('index', { title: 'Snakes on a plane' });
});

router.get('/about', function(req, res, next){
	var self = {
		name: 'David',
		phone: '901-848-6450',
		email: 'defeldbaum@gmail.com'
	};
	// response.render() has two arguments
	// first - template (view)
	// second - an Object with data 
	res.render('about', self);
});


router.get('/faq', function(req, res, next) {
	var questions = {
		questions: ['I can have a cookie?', 'What time is lunch?','Whats my name?'],
		answers: ['yes', 'never. you shall not eat', 'slim shady'],
	};
	res.render('faq', questions);

});

router.get('/login', function(req, res, next) {
	var user = {
		name: 'David', // if you comment out name, the else in login.hbs will trigger
		password: 'bango',
		hint: 'strovia'
	};
	res.render('login', user);
});



module.exports = router;

