import express from 'express';
import { academicSemeterRoutes } from '../modules/academicSemester/academicSemester.route';
import { userRoutes } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/academic-semesters',
    route: academicSemeterRoutes,
  },
];

// Application routes
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
