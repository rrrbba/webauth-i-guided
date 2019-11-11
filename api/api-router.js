const router = require('express').Router();

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

const bcrypt = require('bcryptjs');


router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

router.post('/hash', (req, res) => {
  //read the password from the body 
  //hash the password 
  //return it to the user in an object like
  //{ password: 'original password', hash: 'hashed password'}


  const password = req.body.password;
  res.json({password: `${password}`, hash: bcrypt.hashSync(password)})
})


module.exports = router;
