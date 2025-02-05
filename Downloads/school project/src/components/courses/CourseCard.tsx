import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import type { Course } from '../../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="text-sm text-indigo-600 font-medium">{course.category}</span>
        <h3 className="mt-2 text-lg font-semibold text-gray-900">{course.title}</h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{course.description}</p>
        
        <div className="mt-3 flex items-center">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
          </div>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-sm text-gray-600">{course.enrolledCount} students</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-bold text-gray-900">${course.price}</p>
          <Link
            to={`/courses/${course.id}`}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;