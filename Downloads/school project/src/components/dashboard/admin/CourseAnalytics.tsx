import React from 'react';
import { TrendingUp, Users, DollarSign, BookOpen } from 'lucide-react';

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ title, value, icon, trend }) => (
  <div className="bg-white overflow-hidden shadow rounded-lg">
    <div className="p-5">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div className="p-3 bg-indigo-50 rounded-md">{icon}</div>
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
            <dd className="flex items-baseline">
              <div className="text-2xl font-semibold text-gray-900">{value}</div>
              {trend && (
                <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  <TrendingUp className="self-center flex-shrink-0 h-4 w-4" aria-hidden="true" />
                  <span className="ml-1">{trend}</span>
                </div>
              )}
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
);

const CourseAnalytics = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <AnalyticsCard
        title="Total Students"
        value="2,735"
        icon={<Users className="h-6 w-6 text-indigo-600" />}
        trend="12%"
      />
      <AnalyticsCard
        title="Total Revenue"
        value="$45,231"
        icon={<DollarSign className="h-6 w-6 text-indigo-600" />}
        trend="8.1%"
      />
      <AnalyticsCard
        title="Active Courses"
        value="12"
        icon={<BookOpen className="h-6 w-6 text-indigo-600" />}
      />
      <AnalyticsCard
        title="Completion Rate"
        value="87%"
        icon={<TrendingUp className="h-6 w-6 text-indigo-600" />}
        trend="3.2%"
      />
    </div>
  );
};

export default CourseAnalytics;