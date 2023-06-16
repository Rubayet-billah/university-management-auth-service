'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.academicSemesterValidation = void 0;
const zod_1 = require('zod');
const academicSemester_constants_1 = require('./academicSemester.constants');
// req validation
const createAcademicSemesterZodSchema = zod_1.z.object({
  body: zod_1.z.object({
    title: zod_1.z.enum(
      [...academicSemester_constants_1.academicSemeterTitle],
      {
        required_error: 'Title is required',
      }
    ),
    year: zod_1.z.string({
      required_error: 'Year is required',
    }),
    code: zod_1.z.enum([...academicSemester_constants_1.academicSemesterCode], {
      required_error: 'Code is required',
    }),
    startMonth: zod_1.z.enum(
      [...academicSemester_constants_1.academicSemesterMonth],
      {
        required_error: 'Start month is required',
      }
    ),
    endMonth: zod_1.z.enum(
      [...academicSemester_constants_1.academicSemesterMonth],
      {
        required_error: 'End month is required',
      }
    ),
  }),
});
const updateAcademicSemesterZodSchema = zod_1.z
  .object({
    body: zod_1.z.object({
      title: zod_1.z
        .enum([...academicSemester_constants_1.academicSemeterTitle], {
          required_error: 'Title is required',
        })
        .optional(),
      year: zod_1.z
        .string({
          required_error: 'Year is required',
        })
        .optional(),
      code: zod_1.z
        .enum([...academicSemester_constants_1.academicSemesterCode], {
          required_error: 'Code is required',
        })
        .optional(),
      startMonth: zod_1.z
        .enum([...academicSemester_constants_1.academicSemesterMonth], {
          required_error: 'Start month is required',
        })
        .optional(),
      endMonth: zod_1.z
        .enum([...academicSemester_constants_1.academicSemesterMonth], {
          required_error: 'End month is required',
        })
        .optional(),
    }),
  })
  .refine(
    data =>
      (data.body.title && data.body.code) ||
      (!data.body.title && !data.body.code),
    {
      message: 'Either both title and code should be provided or neither',
    }
  );
exports.academicSemesterValidation = {
  createAcademicSemesterZodSchema,
  updateAcademicSemesterZodSchema,
};
