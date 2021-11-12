module.exports = (sequelize, DataTypes) => {

    const Images = sequelize.define("Images", {
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Images.associate = models => {
        Images.belongsTo(models.Places, {
            foreignKey: {
                allowNull: false,
                name: 'place_id'
            }
        });
    };
    
    return Images;
};