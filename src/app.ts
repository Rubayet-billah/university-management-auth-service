import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { academicSemeterRoutes } from './app/modules/academicSemester/academicSemester.route';
import { userRoutes } from './app/modules/user/user.route';

const app: Application = express();

// cors

app.use(cors());

// parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use('/api/v1/users/', userRoutes);
app.use('/api/v1/academic-semesters/', academicSemeterRoutes);

// eslint-disable-next-line no-unused-vars
app.get('/', async (req: Request, res: Response) => {
  Promise.reject('Unhandled promise error');
});

// error handler middleware
app.use(globalErrorHandler);

export default app;
