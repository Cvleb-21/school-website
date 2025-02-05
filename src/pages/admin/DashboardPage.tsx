import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../../components/dashboard/shared/DashboardLayout';
import CourseAnalytics from '../../components/dashboard/admin/CourseAnalytics';
import CourseManagement from '../../components/dashboard/admin/CourseManagement';

// Mock data
const COURSES = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn web development from scratch',
    instructor: 'John Doe',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
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
    category: 'Data Science',
    rating: 4.7,
    enrolledCount: 856,
    price: 89.99
  }
];

const DashboardPage = () => {
  const handleEditCourse = (courseId: string) => {
    console.log('Edit course:', courseId);
  };

  const handleDeleteCourse = (courseId: string) => {
    console.log('Delete course:', courseId);
  };

  return (
    <DashboardLayout userRole="admin">
      <Routes>
        <Route
          path="/"
          element={
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <CourseAnalytics />
              <CourseManagement
                courses={COURSES}
                onEdit={handleEditCourse}
                onDelete={handleDeleteCourse}
              />
            </div>
          }
        />
        <Route
          path="/courses"
          element={
            <CourseManagement
              courses={COURSES}
              onEdit={handleEditCourse}
              onDelete={handleDeleteCourse}
            />
          }
        />
      </Routes>
    </DashboardLayout>
  );
};

export default DashboardPage;