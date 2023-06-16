"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicSemeterRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const academicSemester_controller_1 = require("./academicSemester.controller");
const academicSemester_validation_1 = require("./academicSemester.validation");
const routes = express_1.default.Router();
routes.post('/create-academic-semester', (0, validateRequest_1.default)(academicSemester_validation_1.academicSemesterValidation.createAcademicSemesterZodSchema), academicSemester_controller_1.academicSemesterController.createSemester);
routes.get('/:id', academicSemester_controller_1.academicSemesterController.getSingleSemester);
routes.patch('/:id', (0, validateRequest_1.default)(academicSemester_validation_1.academicSemesterValidation.updateAcademicSemesterZodSchema), academicSemester_controller_1.academicSemesterController.updateSemester);
routes.delete('/:id', academicSemester_controller_1.academicSemesterController.deleteSemester);
routes.get('/', academicSemester_controller_1.academicSemesterController.getAllSemesters);
exports.academicSemeterRoutes = routes;
