import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

// now we can access the env variable from here, and we need to export it from here to use it in another file

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  default_student_pass: process.env.DEFAULT_STUDENT_PASS,
  default_faculty_pass: process.env.DEFAULT_FACULTY_PASS,
  default_admin_pass: process.env.DEFAULT_ADMIN_PASS,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
};

export default config;
