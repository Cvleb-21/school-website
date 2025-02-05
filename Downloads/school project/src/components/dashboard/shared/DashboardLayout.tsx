import React from 'react';
import { Home, Book, Users, Settings, LogOut } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole: 'admin' | 'student';
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, userRole }) => {
  const navigationItems = userRole === 'admin'
    ? [
        { icon: <Home className="h-5 w-5" />, label: 'Dashboard', href: '/admin' },
        { icon: <Book className="h-5 w-5" />, label: 'Courses', href: '/admin/courses' },
        { icon: <Users className="h-5 w-5" />, label: 'Students', href: '/admin/students' },
      ]
    : [
        { icon: <Home className="h-5 w-5" />, label: 'Dashboard', href: '/dashboard' },
        { icon: <Book className="h-5 w-5" />, label: 'My Courses', href: '/dashboard/courses' },
      ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col h-0 flex-1 bg-white border-r border-gray-200">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <h1 className="text-xl font-bold text-indigo-600">LearnHub</h1>
                </div>
                <nav className="mt-5 flex-1 px-2 space-y-1">
                  {navigationItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.icon}
                      <span className="ml-3">{item.label}</span>
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <div className="flex items-center">
                  <div>
                    <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                      <Settings className="h-5 w-5 mr-2" />
                      Settings
                    </button>
                  </div>
                  <div className="ml-auto">
                    <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                      <LogOut className="h-5 w-5 mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;