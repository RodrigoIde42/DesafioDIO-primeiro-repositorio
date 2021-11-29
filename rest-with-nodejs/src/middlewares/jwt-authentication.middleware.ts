import { NextFunction, Request, Response } from 'express';
import JWT from 'jsonwebtoken';
import ForbiddenError from '../models/errors/forbidden.error.model';

export default function jwtAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const authHeader = req.headers['authorization'];

        if (!authHeader) {
            throw new ForbiddenError('Credentials not informed');
        }

        const [authType, token] = authHeader.split(' ');

        if (authType !== 'Bearer' || !token) {
            throw new ForbiddenError('Invalid authentication type');
        }

        try {
            const tokenPayload = JWT.verify(token, 'secret_key');

            if (typeof tokenPayload !== 'object' || !tokenPayload.sub) {
                throw new ForbiddenError('Invalid token');
            }
            
            const user = { 
                uuid: tokenPayload.sub, 
                username: tokenPayload.username 
            };

            req.user = user;
            next();
        } catch (error) {
            throw new ForbiddenError('Invalid token');
        }
    } catch (error) {
        next(error);
    }
}