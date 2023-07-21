import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  name: string;
  description?: string;
  creator_id?: string;
  instructor_id?: string;
  created_at?: any;
  updated_at?: any;

  user_course_creator_idTouser?: UserInterface;
  user_course_instructor_idTouser?: UserInterface;
  _count?: {};
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  creator_id?: string;
  instructor_id?: string;
}
