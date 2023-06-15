import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterController } from './academicSemester.controller';
import { academicSemesterValidation } from './academicSemester.validation';

const routes = express.Router();
routes.post(
  '/create-academic-semester',
  validateRequest(academicSemesterValidation.createAcademicSemesterZodSchema),
  academicSemesterController.createSemester
);
routes.get('/:id', academicSemesterController.getSingleSemester);
routes.patch(
  '/:id',
  validateRequest(academicSemesterValidation.updateAcademicSemesterZodSchema),
  academicSemesterController.updateSemester
);
routes.delete('/:id', academicSemesterController.deleteSemester);
routes.get('/', academicSemesterController.getAllSemesters);

export const academicSemeterRoutes = routes;
