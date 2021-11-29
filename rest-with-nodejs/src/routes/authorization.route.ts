import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import JWT, { SignOptions } from 'jsonwebtoken';
import basicAuthenticationMiddleware from '../middlewares/basic-authentication.middleware';
import jwtAuthenticationMiddleware from '../middlewares/jwt-authentication.middleware';
import ForbiddenError from '../models/errors/forbidden.error.model';

const authorizationRouter = Router();

authorizationRouter.post('/token/validate', jwtAuthenticationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
});

authorizationRouter.post('/token', basicAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user;

        if (!user) {
            throw new ForbiddenError('User not informed');
        }
        
        const jwtPayload = { username: user.username };
        const jwtOptions: SignOptions = { subject: user?.uuid, expiresIn: '15m' };
        const secretKey = 'secret_key';

        const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);

        res.status(StatusCodes.OK).json({ token: jwt });
    } catch (error) {
        next(error);    
    }
});

export default authorizationRouter;