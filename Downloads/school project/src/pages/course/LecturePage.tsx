import React from 'react';
import { useParams } from 'react-router-dom';
import CoursePlayer from '../../components/courses/CoursePlayer';
import CourseCurriculum from '../../components/courses/CourseCurriculum';

const LecturePage = () => {
  const { courseId, lectureId } = useParams();

  // Mock data - In a real app, fetch this based on courseId and lectureId
  const lecture = {
    id: lectureId,
    title: 'Introduction to Web Development',
    videoUrl: 'https://example.com/video.mp4',
    isLocked: false,
  };

  const sections = [
    {
      id: '1',
      title: 'Getting Started',
      duration: '45 min',
      lectures: [
        { id: '1-1', title: 'Course Introduction', duration: '5:00', isLocked: false },
        { id: '1-2', title: 'Setting Up Your Environment', duration: '15:00', isLocked: false },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CoursePlayer
            videoUrl={lecture.videoUrl}
            isLocked={lecture.isLocked}
            title={lecture.title}
          />
        </div>
        <div>
          <CourseCurriculum
            sections={sections}
            isEnrolled={true}
            courseId={courseId || ''}
          />
        </div>
      </div>
    </div>
  );
};

export default LecturePage;