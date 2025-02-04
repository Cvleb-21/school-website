import React from 'react';
import { BookOpen, Users, Clock, Calendar } from 'lucide-react';

const admissionSteps = [
  {
    icon: BookOpen,
    title: "1. Submit Application",
    description: "Complete the online application form with all required documents."
  },
  {
    icon: Users,
    title: "2. Interview",
    description: "Attend a personal interview with our admissions team."
  },
  {
    icon: Clock,
    title: "3. Assessment",
    description: "Complete academic assessment tests in relevant subjects."
  },
  {
    icon: Calendar,
    title: "4. Decision",
    description: "Receive admission decision within 2-3 weeks."
  }
];

const requirements = [
  "Completed application form",
  "Academic transcripts",
  "Letters of recommendation",
  "Personal statement",
  "Standardized test scores",
  "Portfolio (if applicable)",
  "Interview"
];

const deadlines = [
  { term: "Fall 2024", date: "April 1, 2024" },
  { term: "Spring 2025", date: "November 1, 2024" },
  { term: "Summer 2025", date: "March 1, 2025" }
];

export default function Admissions() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 opacity-0 animate-fade-in">
              Join Our Academic Community
            </h1>
            <p className="text-xl text-gray-200 opacity-0 animate-fade-in animation-delay-300">
              Begin your journey towards academic excellence
            </p>
            <div className="mt-8 opacity-0 animate-fade-in animation-delay-600">
              <a
                href="#apply"
                className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Admission Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center opacity-0 animate-fade-in">
          Admission Process
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {admissionSteps.map((step, index) => (
            <div
              key={step.title}
              className="text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 300}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Requirements & Deadlines */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Requirements */}
            <div className="opacity-0 animate-fade-in animation-delay-1200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Requirements</h2>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li
                    key={requirement}
                    className="flex items-center space-x-3 text-gray-700"
                  >
                    <svg
                      className="h-5 w-5 text-indigo-600 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deadlines */}
            <div className="opacity-0 animate-fade-in animation-delay-1500">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Application Deadlines</h2>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Term
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Deadline
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {deadlines.map((deadline) => (
                      <tr key={deadline.term}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {deadline.term}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {deadline.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Now Section */}
      <div id="apply" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Apply?</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Take the first step towards your future. Our admissions team is here to help you through the process.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Start Application
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}