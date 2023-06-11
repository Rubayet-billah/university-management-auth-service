import { ZodError } from 'zod';
import { IGenericErrorResponse } from '../interfaces/common';

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  console.log('fowehiufnlkaesngbw', error.issues[0], 'eta zod error');

  return {};
};

export default handleZodError;
