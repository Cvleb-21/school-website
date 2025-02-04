import React from 'react';
import CourseCard from '../courses/CourseCard';
import type { Course } from '../../types';

const FEATURED_COURSES: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn web development from scratch. Master HTML, CSS, JavaScript, React, and Node.js.',
    price: 99.99,
    instructor: 'John Doe',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Web Development',
    rating: 4.8,
    enrolledCount: 1234
  },
  {
    id: '2',
    title: 'Data Science Fundamentals',
    description: 'Master the basics of data science, statistics, and machine learning with Python.',
    price: 89.99,
    instructor: 'Jane Smith',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Data Science',
    rating: 4.7,
    enrolledCount: 856
  },
  {
    id: '3',
    title: 'Mobile App Development with React Native',
    description: 'Build cross-platform mobile apps using React Native and JavaScript.',
    price: 79.99,
    instructor: 'Mike Johnson',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Mobile Development',
    rating: 4.9,
    enrolledCount: 645
  }
];

const FeaturedCourses = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
          <p className="mt-4 text-lg text-gray-600">
            Start your learning journey with our most popular courses
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;