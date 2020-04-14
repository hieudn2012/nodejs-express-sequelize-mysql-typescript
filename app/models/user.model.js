module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    token: {
      type: Sequelize.STRING
    },
    active: {
      type: Sequelize.BOOLEAN
    }
  });

  return User;
};
