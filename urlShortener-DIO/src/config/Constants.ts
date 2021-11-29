import dotenv from 'dotenv';
dotenv.config();

export const config = {
    API_URL: "http://localhost:5000",
    MONGO_CONNECTION: `mongodb+srv://${process.env.DBUSERNAME}:${process.env.PASSWORD}@${process.env.DATABASE}.x6qga.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`
}