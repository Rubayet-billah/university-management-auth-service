import status from 'http-status';
import { Model, Schema, model } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemeterTitle,
} from './academicSemester.constants';
import { IAcademicSemester } from './academicSemester.interface';

type AcademicSemesterModel = Model<IAcademicSemester, object>;

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemeterTitle,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
  },
  {
    timestamps: true,
  }
);

// use mongoose pre hook for checking existing value
academicSemesterSchema.pre('save', async function (next) {
  const ifExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (ifExist) {
    throw new ApiError(status.CONFLICT, 'Semester already exists');
  }
  next();
});

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
);
