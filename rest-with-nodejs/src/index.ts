import express from 'express';
import errorHandler from './middlewares/error-handler.middleware';
import jwtAuthenticationMiddleware from './middlewares/jwt-authentication.middleware';
import authorizationRouter from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(statusRoute);
app.use(authorizationRouter);

app.use(jwtAuthenticationMiddleware);
app.use(usersRoute);

app.use(errorHandler);

app.listen(3000, () => {
    console.log('app started at port 3000!');
});