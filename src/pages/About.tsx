import React from 'react';
import { Users, Award, BookOpen, Target } from 'lucide-react';

interface StaffMember {
  name: string;
  role: string;
  image: string;
}

const staffMembers: StaffMember[] = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Principal",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Prof. James Wilson",
    role: "Vice Principal",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Dr. Emily Parker",
    role: "Head of Academics",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Prof. Michael Chen",
    role: "Head of Research",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

const achievements = [
  { icon: Users, title: "5000+", description: "Graduated Students" },
  { icon: Award, title: "150+", description: "Awards Won" },
  { icon: BookOpen, title: "50+", description: "Courses Offered" },
  { icon: Target, title: "98%", description: "Success Rate" }
];

export default function About() {
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
              About Academia
            </h1>
            <p className="text-xl text-gray-200 opacity-0 animate-fade-in animation-delay-300">
              Shaping minds and building futures since 1970
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 opacity-0 animate-fade-in animation-delay-600">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-700">
              To provide exceptional education that empowers students to become innovative thinkers,
              creative problem-solvers, and inspired learners prepared for future challenges.
            </p>
          </div>
          <div className="space-y-6 opacity-0 animate-fade-in animation-delay-900">
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            <p className="text-lg text-gray-700">
              To be a leading institution that nurtures global citizens who contribute positively
              to society through knowledge, innovation, and character.
            </p>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${(index + 4) * 300}ms` }}
              >
                <achievement.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Staff Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Leadership Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {staffMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-lg opacity-0 animate-fade-in"
              style={{ animationDelay: `${(index + 8) * 300}ms` }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-gray-300">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}