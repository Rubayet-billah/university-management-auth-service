import { Model, Schema, model } from 'mongoose';
import { IAcademicFaculty } from './academicFaculty.interface';

type AcademicFacultyModel = Model<IAcademicFaculty, object>;

const academicFacultySchema = new Schema<IAcademicFaculty>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const AcademicFaculty = model<IAcademicFaculty, AcademicFacultyModel>(
  'AcademicFaculty',
  academicFacultySchema
);
