module.exports = (sequelize, DataTypes) => {
    const Advice = sequelize.define('Advice', {
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        tel: DataTypes.STRING,
        date: DataTypes.STRING,
    })
    return Advice
}