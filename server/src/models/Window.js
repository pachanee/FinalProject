module.exports = (sequelize, DataTypes) => {
    const Window = sequelize.define('Window', {
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        tel: DataTypes.STRING,
        date: DataTypes.STRING,
        quantity: DataTypes.STRING,
    })
    return Window
}