/* eslint-disable global-require */
module.exports = (app) => {
  const users = require('../controllers/user.controller');

  const router = require('express').Router();

  // Create a new User
  router.post('/', users.create);

  // Create a new User
  router.get('/', users.findAll);

  // Retrieve a single User with id
  router.get('/:id', users.findOne);

  // Update a User with id
  router.put('/:id', users.update);

  // Delete a User with id
  router.delete('/:id', users.deleteUser);

  // Create a new User
  router.delete('/', users.deleteAll);

  // Login
  router.post('/login', users.login);

  app.use('/api/users', router);
};
