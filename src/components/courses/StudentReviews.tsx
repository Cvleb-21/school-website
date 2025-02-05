import React from 'react';
import { Star } from 'lucide-react';
import ReviewCard from './ReviewCard';
import ReviewStats from './ReviewStats';
import type { Review } from '../../types/reviews';

interface StudentReviewsProps {
  className?: string;
}

const REVIEWS: Review[] = [
  {
    id: '1',
    user: {
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    rating: 5,
    date: '2 weeks ago',
    comment: 'This course exceeded my expectations. The instructor explains complex concepts in a way that\'s easy to understand. I\'ve learned so much and feel confident in my web development skills now.'
  },
  {
    id: '2',
    user: {
      name: 'Michael Brown',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    rating: 4,
    date: '1 month ago',
    comment: 'Great course content and structure. The projects were challenging but helped reinforce the concepts. Would recommend to anyone starting their web development journey.'
  }
];

const StudentReviews: React.FC<StudentReviewsProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow ${className}`}>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium text-gray-900">Student Reviews</h3>
        <ReviewStats rating={4.8} />
      </div>
      
      <div className="border-t border-gray-200">
        {REVIEWS.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default StudentReviews;