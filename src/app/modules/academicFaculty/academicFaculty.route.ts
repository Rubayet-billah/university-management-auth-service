import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicFacultyController } from './academicFaculty.controller';
import { academicFacultyValidation } from './academicFaculty.validation';

const routes = express.Router();
routes.post(
  '/create-academic-faculty',
  validateRequest(academicFacultyValidation.createAcademicFacultyZodSchema),
  academicFacultyController.createFaculty
);
routes.get('/:id', academicFacultyController.getSingleFaculty);
routes.patch(
  '/:id',
  validateRequest(academicFacultyValidation.updateAcademicFacultyZodSchema),
  academicFacultyController.updateFaculty
);
routes.delete('/:id', academicFacultyController.deleteFaculty);
routes.get('/', academicFacultyController.getAllFaculties);

export const academicFacultyRoutes = routes;
