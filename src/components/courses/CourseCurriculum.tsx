import React, { useState } from 'react';
import { ChevronDown, ChevronUp, PlayCircle, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

interface Section {
  id: string;
  title: string;
  duration: string;
  lectures: Lecture[];
}

interface Lecture {
  id: string;
  title: string;
  duration: string;
  videoUrl?: string;
  isLocked: boolean;
}

interface CourseCurriculumProps {
  sections: Section[];
  isEnrolled: boolean;
  courseId: string;
}

const CourseCurriculum: React.FC<CourseCurriculumProps> = ({
  sections,
  isEnrolled,
  courseId,
}) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const { requireAuth } = useAuth();
  const navigate = useNavigate();

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleLectureClick = (lecture: Lecture) => {
    if (!isEnrolled) {
      requireAuth(() => {
        navigate(`/checkout/${courseId}`);
      });
      return;
    }

    if (!lecture.isLocked) {
      navigate(`/courses/${courseId}/lecture/${lecture.id}`);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium text-gray-900">Course Curriculum</h3>
        <p className="mt-1 text-sm text-gray-500">
          {sections.reduce((total, section) => total + section.lectures.length, 0)} lectures
        </p>
      </div>
      
      <div className="border-t border-gray-200">
        {sections.map(section => (
          <div key={section.id} className="border-b border-gray-200 last:border-b-0">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 focus:outline-none"
            >
              <div className="flex items-center">
                {expandedSections.includes(section.id) ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
                <span className="ml-2 text-sm font-medium text-gray-900">{section.title}</span>
                <span className="ml-2 text-sm text-gray-500">{section.duration}</span>
              </div>
              <span className="text-sm text-gray-500">{section.lectures.length} lectures</span>
            </button>
            
            {expandedSections.includes(section.id) && (
              <div className="bg-gray-50">
                {section.lectures.map(lecture => (
                  <button
                    key={lecture.id}
                    onClick={() => handleLectureClick(lecture)}
                    className="w-full px-4 py-3 flex items-center justify-between border-t border-gray-200 hover:bg-gray-100"
                  >
                    <div className="flex items-center">
                      {lecture.isLocked ? (
                        <Lock className="h-5 w-5 text-gray-400" />
                      ) : (
                        <PlayCircle className="h-5 w-5 text-indigo-600" />
                      )}
                      <span className="ml-2 text-sm text-gray-900">{lecture.title}</span>
                    </div>
                    <span className="text-sm text-gray-500">{lecture.duration}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCurriculum;