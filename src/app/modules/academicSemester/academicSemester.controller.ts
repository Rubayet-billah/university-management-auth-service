import { NextFunction, Request, Response } from 'express';
import { academicSemesterService } from './academicSemester.service';

const createSemester = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { ...academicSemesterData } = req.body;
    const result = await academicSemesterService.createSemester(
      academicSemesterData
    );
    res.status(200).json({
      success: true,
      message: 'semester created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const academicSemesterController = {
  createSemester,
};
