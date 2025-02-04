import React from 'react';
import { BookOpen, Code, Database, Palette, Terminal, Brain } from 'lucide-react';

export const CATEGORIES = [
  { id: 'web-dev', name: 'Web Development', icon: Code },
  { id: 'data-science', name: 'Data Science', icon: Database },
  { id: 'design', name: 'Design', icon: Palette },
  { id: 'programming', name: 'Programming', icon: Terminal },
  { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
  { id: 'all', name: 'All Courses', icon: BookOpen },
];

interface CourseCategoriesProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const CourseCategories: React.FC<CourseCategoriesProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {CATEGORIES.map(({ id, name, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onSelectCategory(id)}
          className={`flex items-center px-4 py-2 rounded-full ${
            selectedCategory === id
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Icon className="w-4 h-4 mr-2" />
          {name}
        </button>
      ))}
    </div>
  );
};

export default CourseCategories;