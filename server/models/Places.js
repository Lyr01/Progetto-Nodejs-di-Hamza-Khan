module.exports = (sequelize, DataTypes) => {

    const Places = sequelize.define("Places", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
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
        descrizione: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        indirizzo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Places.associate = models => {
        Places.hasMany(models.Images, {
            onDelete: "cascade",
            foreignKey: 'place_id'
        });
    }
    return Places;
};