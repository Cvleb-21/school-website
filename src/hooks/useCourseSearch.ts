import { useState, useMemo } from 'react';
import type { Course } from '../types';

export const useCourseSearch = (courses: Course[], selectedCategory: string) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [courses, searchQuery, selectedCategory]);

  return {
    searchQuery,
    setSearchQuery,
    filteredCourses,
  };
};

export default useCourseSearch;