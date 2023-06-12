import { Model, Schema, model } from 'mongoose';
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

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
);
