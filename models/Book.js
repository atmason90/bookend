const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {};

Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        isbn: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        page_count: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        club_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'club',
                key: 'id',
            },
        },
    },
);

module.exports = Book;