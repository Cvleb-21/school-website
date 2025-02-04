import React from 'react';
import { Star } from 'lucide-react';

interface ReviewStatsProps {
  rating: number;
}

const ReviewStats: React.FC<ReviewStatsProps> = ({ rating }) => {
  return (
    <div className="mt-1 flex items-center">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className="h-5 w-5 text-yellow-400 fill-current"
          />
        ))}
      </div>
      <span className="ml-2 text-sm text-gray-600">{rating} out of 5</span>
    </div>
  );
};

export default ReviewStats;