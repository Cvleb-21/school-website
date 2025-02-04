import React from 'react';
import { PlayCircle } from 'lucide-react';
import type { Course } from '../../../types';

interface EnrolledCoursesProps {
  courses: Course[];
}

const EnrolledCourses: React.FC<EnrolledCoursesProps> = ({ courses }) => {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium text-gray-900">My Courses</h3>
      </div>
      
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {courses.map((course) => (
            <li key={course.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
              <div className="flex items-center space-x-4">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="h-16 w-24 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {course.title}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {course.instructor}
                  </p>
                </div>
                <button className="flex items-center text-indigo-600 hover:text-indigo-900">
                  <PlayCircle className="h-5 w-5 mr-1" />
                  Continue Learning
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EnrolledCourses;