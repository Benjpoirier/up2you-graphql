import path from 'path';
import Sequelize from 'sequelize';
import { readdirSync } from 'fs';

const ENV = process.env.NODE_ENV || 'development';
const modelsPath = path.join(__dirname, '..', 'src', 'models');
const config = require(path.join(__dirname, '..', 'config', 'database'))[ENV];
const { database, username, password, ...options } = config;

const db = new Sequelize(database, username, password, options);

let models = {};

readdirSync(modelsPath)
    .filter(file => {
        return file.indexOf('.') !== 0 && file !== 'index.js';
    })
    .forEach(file => {
        const model = db.import(path.join(modelsPath, file));
        models[model.name] = model;
    });

Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

export default db;
