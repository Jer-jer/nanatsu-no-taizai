/* eslint-disable */
module.exports = (sequelize, DataTypes) => 
    sequelize.define("User", {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        username: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: DataTypes.STRING,
    });
