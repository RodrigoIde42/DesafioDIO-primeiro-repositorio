import { MongoConnection } from './database/MongoConnection';
import express from 'express';
import { URLController } from './controller/URLController';
import dotenv from 'dotenv';
import { config } from './config/Constants';
dotenv.config();

const api = express();
api.use(express.json());

const database = new MongoConnection();
database.connect();

const urlController = new URLController;
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);

api.listen(5000, () => {
    console.log(`Server running at ${config.API_URL}`);
})