import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Users, Star, Award } from 'lucide-react';
import useAuth from '../../hooks/useAuth';
import type { Course } from '../../types';

interface CourseDetailsProps {
  course: Course;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ course }) => {
  const navigate = useNavigate();
  const { requireAuth } = useAuth();

  const handleEnroll = () => {
    requireAuth(() => {
      navigate(`/checkout/${course.id}`);
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div>
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-64 object-cover rounded-lg shadow-lg lg:h-96"
          />
        </div>
        
        <div className="mt-8 lg:mt-0">
          <div className="flex items-center">
            <span className="text-sm text-indigo-600 font-medium">{course.category}</span>
            <span className="mx-2 text-gray-500">•</span>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
            </div>
          </div>
          
          <h1 className="mt-4 text-3xl font-bold text-gray-900">{course.title}</h1>
          
          <p className="mt-4 text-lg text-gray-500">{course.description}</p>
          
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <Users className="h-5 w-5 text-gray-400" />
              <span className="ml-2 text-sm text-gray-600">{course.enrolledCount} students</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-gray-400" />
              <span className="ml-2 text-sm text-gray-600">6 hours</span>
            </div>
            <div className="flex items-center">
              <Award className="h-5 w-5 text-gray-400" />
              <span className="ml-2 text-sm text-gray-600">Certificate</span>
            </div>
          </div>
          
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900">${course.price}</span>
              <button
                onClick={handleEnroll}
                className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;