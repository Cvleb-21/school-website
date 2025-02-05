import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../../components/dashboard/shared/DashboardLayout';
import EnrolledCourses from '../../components/dashboard/student/EnrolledCourses';

// Mock data
const ENROLLED_COURSES = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn web development from scratch',
    instructor: 'John Doe',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    progress: 45,
    category: 'Web Development',
    rating: 4.8,
    enrolledCount: 1234,
    price: 99.99
  },
  {
    id: '2',
    title: 'Data Science Fundamentals',
    description: 'Master data science basics',
    instructor: 'Jane Smith',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    progress: 30,
    category: 'Data Science',
    rating: 4.7,
    enrolledCount: 856,
    price: 89.99
  }
];

const DashboardPage = () => {
  return (
    <DashboardLayout userRole="student">
      <Routes>
        <Route
          path="/"
          element={
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-gray-900">My Dashboard</h1>
              <EnrolledCourses courses={ENROLLED_COURSES} />
            </div>
          }
        />
        <Route
          path="/courses"
          element={<EnrolledCourses courses={ENROLLED_COURSES} />}
        />
      </Routes>
    </DashboardLayout>
  );
};

export default DashboardPage;