import React from 'react';
import { Star } from 'lucide-react';
import type { Review } from '../../types/reviews';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="px-4 py-6 sm:px-6 border-b border-gray-200 last:border-b-0">
      <div className="flex items-center">
        <img
          className="h-10 w-10 rounded-full"
          src={review.user.avatar}
          alt={review.user.name}
        />
        <div className="ml-3">
          <h4 className="text-sm font-medium text-gray-900">{review.user.name}</h4>
          <div className="flex items-center mt-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < review.rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">{review.date}</span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-600">{review.comment}</p>
    </div>
  );
};

export default ReviewCard;