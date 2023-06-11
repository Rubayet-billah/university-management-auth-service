import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

// now we can access the env variable from here, and we need to export it from here to use it in another file

const envObj = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  defaultUserPass: process.env.DEFAULT_USER_PASS,
};

export default envObj;
