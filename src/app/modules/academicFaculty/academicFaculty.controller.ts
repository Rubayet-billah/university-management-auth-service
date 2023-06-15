import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IAcademicFaculty } from './academicFaculty.interface';
import { academicFacultyService } from './academicFaculty.service';

const createFaculty = catchAsync(async (req: Request, res: Response) => {
  const { ...academicFacultyData } = req.body;
  const result = await academicFacultyService.createFaculty(
    academicFacultyData
  );
  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'faculty created successfully',
    data: result,
  });
});

// const getAllFacultys = catchAsync(async (req: Request, res: Response) => {
//   const filters = pick(req.query, academicFacultyFilterableFields);
//   const paginationOptions = pick(req.query, paginationFields);

//   const result = await academicFacultyService.getAllFacultys(
//     filters,
//     paginationOptions
//   );

//   sendResponse<IAcademicFaculty[]>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'faculty retrieved successfully',
//     meta: result.meta,
//     data: result.data,
//   });
// });

// const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
//   const facultyId = req.params.id;
//   const result = await academicFacultyService.getSingleFaculty(facultyId);

//   sendResponse<IAcademicFaculty>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'faculty retrieved successfully',
//     data: result,
//   });
// });

// const updateFaculty = catchAsync(async (req: Request, res: Response) => {
//   const facultyId = req.params.id;
//   const updatedDoc = req.body;
//   const result = await academicFacultyService.updateFaculty(
//     facultyId,
//     updatedDoc
//   );

//   sendResponse<IAcademicFaculty>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'faculty updated successfully',
//     data: result,
//   });
// });

// const deleteFaculty = catchAsync(async (req: Request, res: Response) => {
//   const facultyId = req.params.id;
//   const result = await academicFacultyService.deleteFaculty(facultyId);
//   sendResponse<IAcademicFaculty>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'faculty deleted successfully',
//     data: result,
//   });
// });

export const academicFacultyController = {
  createFaculty,
  // getAllFacultys,
  // getSingleFaculty,
  // updateFaculty,
  // deleteFaculty,
};
