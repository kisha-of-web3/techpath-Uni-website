import React, { useState, useEffect } from 'react';
import { BookOpen, Award, Clock, DollarSign, User, Settings, Bell, LogOut, Play, CheckCircle, Star, TrendingUp, Zap, Target, Monitor, Brain } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const studentData = {
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    enrolledCourses: 3,
    completedCourses: 1,
    totalHours: 142,
    balance: 0
  };

  const enrolledCourses = [
    {
      id: 1,
      title: 'Full-Stack Web Development',
      progress: 75,
      nextLesson: 'React Hooks Advanced',
      timeRemaining: '3 weeks',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      title: 'Digital Marketing Mastery',
      progress: 40,
      nextLesson: 'SEO Fundamentals',
      timeRemaining: '6 weeks',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 3,
      title: 'UX/UI Design Excellence',
      progress: 20,
      nextLesson: 'Design Principles',
      timeRemaining: '8 weeks',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const upcomingExams = [
    {
      id: 1,
      course: 'Full-Stack Web Development',
      topic: 'React Component Architecture',
      date: '2024-01-15',
      duration: '2 hours'
    },
    {
      id: 2,
      course: 'Digital Marketing',
      topic: 'Analytics & Reporting',
      date: '2024-01-20',
      duration: '1.5 hours'
    }
  ];

  const stats = [
    {
      icon: BookOpen,
      label: 'Enrolled Courses',
      value: studentData.enrolledCourses,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Award,
      label: 'Completed',
      value: studentData.completedCourses,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Clock,
      label: 'Study Hours',
      value: studentData.totalHours,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: DollarSign,
      label: 'Balance',
      value: `$${studentData.balance}`,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'courses', label: 'My Courses', icon: Play },
    { id: 'exams', label: 'Exams', icon: CheckCircle },
    { id: 'payments', label: 'Payments', icon: DollarSign },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Learning Dashboard Environment"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-8">
        
        {/* Header */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                <Zap className="h-4 w-4 mr-2" />
                Student Dashboard
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {studentData.name}!
              </h1>
              <p className="text-gray-600">Continue your educational journey</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <button className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors duration-300">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors duration-300">
                <Settings className="h-5 w-5" />
              </button>
              <button className="p-3 bg-red-100 rounded-lg text-red-600 hover:bg-red-200 transition-colors duration-300">
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-300 ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                          </div>
                          <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                            <Icon className={`h-6 w-6 ${stat.color}`} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Current Courses */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Learning</h2>
                  <div className="space-y-6">
                    {enrolledCourses.map((course) => (
                      <div key={course.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{course.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">Next: {course.nextLesson}</p>
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${course.progress}%` }}
                              />
                            </div>
                            <span className="text-sm text-gray-600">{course.progress}%</span>
                          </div>
                        </div>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2">
                          <Play className="h-4 w-4" />
                          <span>Continue</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Exams */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Exams</h2>
                  <div className="space-y-4">
                    {upcomingExams.map((exam) => (
                      <div key={exam.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{exam.topic}</h3>
                          <p className="text-gray-600 text-sm">{exam.course}</p>
                          <p className="text-gray-600 text-sm">Duration: {exam.duration}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{exam.date}</p>
                          <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors duration-300">
                            Start Exam
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Other tabs content */}
            {activeTab !== 'overview' && (
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {tabs.find(tab => tab.id === activeTab)?.icon && 
                    React.createElement(tabs.find(tab => tab.id === activeTab)!.icon, { className: "h-10 w-10 text-blue-600" })
                  }
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {tabs.find(tab => tab.id === activeTab)?.label}
                </h2>
                <p className="text-gray-600">
                  This section is under development. Full functionality coming soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;