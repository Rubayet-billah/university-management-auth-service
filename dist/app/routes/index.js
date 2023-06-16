'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const academicDepartment_routes_1 = require('../modules/academicDepartment/academicDepartment.routes');
const academicFaculty_route_1 = require('../modules/academicFaculty/academicFaculty.route');
const academicSemester_route_1 = require('../modules/academicSemester/academicSemester.route');
const user_route_1 = require('../modules/user/user.route');
const router = express_1.default.Router();
const moduleRoutes = [
  {
    path: '/users',
    route: user_route_1.userRoutes,
  },
  {
    path: '/academic-semesters',
    route: academicSemester_route_1.academicSemeterRoutes,
  },
  {
    path: '/academic-faculties',
    route: academicFaculty_route_1.academicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: academicDepartment_routes_1.AcademicDepartmentRoutes,
  },
];
// Application routes
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
