import { NextFunction, Request, Response } from 'express';
import userRepository from '../../repositories/user.repository';
import ForbiddenError from '../models/errors/forbidden.error.model';

export default async function basicAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
        const authHeader = req.headers['authorization'];

        if (!authHeader) {
            throw new ForbiddenError('Credentials not found');
        }

        const [authType, token] = authHeader.split(' ');

        if (authType !== 'Basic' || !token){
            throw new ForbiddenError('Invalid authentication type');
        }

        const tokenContent = Buffer.from(token, 'base64').toString('utf-8');
        const [username, password] = tokenContent.split(':');

        if (!username || !password) {
            throw new ForbiddenError('Credentials not found');
        }

        const user = await userRepository.findByUsernameAndPassword(username, password);

        if (!user) {
            throw new ForbiddenError('Invalid credentials');
        }

        req.user = user;
        next();
  } catch (error) {
      next(error);
  }
}