'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.academicFacultyRoutes = void 0;
const express_1 = __importDefault(require('express'));
const validateRequest_1 = __importDefault(
  require('../../middlewares/validateRequest')
);
const academicFaculty_controller_1 = require('./academicFaculty.controller');
const academicFaculty_validation_1 = require('./academicFaculty.validation');
const routes = express_1.default.Router();
routes.post(
  '/create-academic-faculty',
  (0, validateRequest_1.default)(
    academicFaculty_validation_1.academicFacultyValidation
      .createAcademicFacultyZodSchema
  ),
  academicFaculty_controller_1.academicFacultyController.createFaculty
);
routes.get(
  '/:id',
  academicFaculty_controller_1.academicFacultyController.getSingleFaculty
);
routes.patch(
  '/:id',
  (0, validateRequest_1.default)(
    academicFaculty_validation_1.academicFacultyValidation
      .updateAcademicFacultyZodSchema
  ),
  academicFaculty_controller_1.academicFacultyController.updateFaculty
);
routes.delete(
  '/:id',
  academicFaculty_controller_1.academicFacultyController.deleteFaculty
);
routes.get(
  '/',
  academicFaculty_controller_1.academicFacultyController.getAllFaculties
);
exports.academicFacultyRoutes = routes;
