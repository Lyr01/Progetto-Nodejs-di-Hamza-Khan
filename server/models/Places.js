module.exports = (sequelize, DataTypes) => {

    const Places = sequelize.define("Places", {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cognome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        citta: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descrizione: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        indirizzo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
    return Places;
}