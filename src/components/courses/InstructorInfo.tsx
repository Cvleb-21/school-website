import React from 'react';
import { Star } from 'lucide-react';

const InstructorInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <img
          className="h-16 w-16 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="John Doe"
        />
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">John Doe</h3>
          <div className="flex items-center mt-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">4.8 Instructor Rating</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Total Students</span>
          <span className="font-medium">12,345</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-gray-500">Courses</span>
          <span className="font-medium">15</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-gray-500">Reviews</span>
          <span className="font-medium">2,456</span>
        </div>
      </div>
      
      <p className="mt-4 text-sm text-gray-600">
        Web Development instructor with over 10 years of experience in full-stack development.
        Passionate about teaching and helping students achieve their coding goals.
      </p>
    </div>
  );
};

export default InstructorInfo;