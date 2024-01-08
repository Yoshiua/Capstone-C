const {Model, DataTypes} = require('sequelize');


module.exports=(sequelize)=>{
    class Movie extends Model {}
    Movie.init({
        movie_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        movie_title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique : true,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cover_img: {
            type: DataTypes.STRING,
            allowNull: true
        },
        sort_status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'unSorted'
        }
    },
    {
        sequelize,
        modelName: 'Movie',
        timestamps: true,
        tableName: 'Movies',
    },)
    return Movie
}