import React from 'react';
import { Lock, PlayCircle } from 'lucide-react';

interface CoursePlayerProps {
  videoUrl: string;
  isLocked: boolean;
  title: string;
  onComplete?: () => void;
}

const CoursePlayer: React.FC<CoursePlayerProps> = ({
  videoUrl,
  isLocked,
  title,
  onComplete,
}) => {
  if (isLocked) {
    return (
      <div className="bg-gray-100 rounded-lg p-8 text-center">
        <Lock className="w-12 h-12 mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900">Content Locked</h3>
        <p className="mt-2 text-sm text-gray-500">
          Please enroll in this course to access this content.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-black rounded-lg overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <video
          src={videoUrl}
          controls
          className="w-full h-full object-cover"
          onEnded={onComplete}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="p-4 bg-white border-t">
        <h3 className="font-medium text-gray-900">{title}</h3>
      </div>
    </div>
  );
};

export default CoursePlayer;