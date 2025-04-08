import React from 'react';

const page = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-16 px-8">
      {/* Projects Section */}
      <div className="mb-24">
        <h2
          className="relative inline-block text-[2.5rem] font-bold mb-6 text-[#0d1117]
          after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-16 after:h-[4px] after:bg-[#4361ee] after:rounded-[2px]"
        >
          Projects
        </h2>
        <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
          {/* Project Card 1 */}
          <div className="bg-white rounded-[12px] overflow-hidden shadow-sm border border-gray-200 flex flex-col transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div
              className="h-[200px] bg-[#e9ecef] bg-cover bg-center bg-no-repeat flex items-center justify-center text-[#6c757d]"
              style={{ backgroundImage: "url('/api/placeholder/400/200')" }}
            ></div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3 text-[#0d1117]">
                Weather Dashboard
              </h3>
              <p className="text-[#495057] mb-4 flex-grow">
                A real-time weather application that provides current conditions
                and 5-day forecasts. Features include location search, saved
                locations, and detailed weather metrics.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-[#f1f3f5] text-[#4361ee] text-xs py-1 px-2 rounded font-medium">
                  React
                </span>
                <span className="bg-[#f1f3f5] text-[#4361ee] text-xs py-1 px-2 rounded font-medium">
                  Node.js
                </span>
                <span className="bg-[#f1f3f5] text-[#4361ee] text-xs py-1 px-2 rounded font-medium">
                  OpenWeather API
                </span>
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href="#"
                  className="text-[#4361ee] text-sm font-medium flex items-center gap-1 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-[#4361ee] text-sm font-medium flex items-center gap-1 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-[12px] overflow-hidden shadow-sm border border-gray-200 flex flex-col transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div
              className="h-[200px] bg-[#e9ecef] bg-cover bg-center bg-no-repeat flex items-center justify-center text-[#6c757d]"
              style={{ backgroundImage: "url('/api/placeholder/400/200')" }}
            ></div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3 text-[#0d1117]">
                Task Management API
              </h3>
              <p className="text-[#495057] mb-4 flex-grow">
                A RESTful API for task management with features like user
                authentication, task creation, due dates, priorities, and
                categories. Includes comprehensive test coverage.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-[#f1f3f5] text-[#4361ee] text-xs py-1 px-2 rounded font-medium">
                  Express
                </span>
                <span className="bg-[#f1f3f5] text-[#4361ee] text-xs py-1 px-2 rounded font-medium">
                  MongoDB
                </span>
                <span className="bg-[#f1f3f5] text-[#4361ee] text-xs py-1 px-2 rounded font-medium">
                  JWT
                </span>
                <span className="bg-[#f1f3f5] text-[#4361ee] text-xs py-1 px-2 rounded font-medium">
                  Jest
                </span>
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href="#"
                  className="text-[#4361ee] text-sm font-medium flex items-center gap-1 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-[#4361ee] text-sm font-medium flex items-center gap-1 hover:underline"
                >
                  Documentation
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white rounded-[12px] overflow-hidden shadow-sm border border-gray-200 flex flex-col transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div
              className="h-[200px] bg-[#e9ecef] bg-cover bg-center bg-no-repeat flex items-center justify-center text-[#6c757d]"
              style={{ backgroundImage: "url('/api/placeholder/400/200')" }}
            ></div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3 text-[#0d1117]">
                E-commerce Platform
              </h3>
              <p className="text-[#495057] mb-4 flex-grow">
                A full-stack e-commerce solution with product catalog, user
                accounts, shopping cart, payment processing, and order management
                features.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-[#f1f3f5] text-[#4361ee] text-xs py-1 px-2 rounded font-medium">
                  React
                </span>
                <span className="bg-[#f1f3f5] text-[#4361ee] text-xs py-1 px-2 rounded font-medium">
                  Redux
                </span>
                <span className="bg-[#f1f3f5] text-[#4361ee] text-xs py-1 px-2 rounded font-medium">
                  Node.js
                </span>
                <span className="bg-[#f1f3f5] text-[#4361ee] text-xs py-1 px-2 rounded font-medium">
                  PostgreSQL
                </span>
                <span className="bg-[#f1f3f5] text-[#4361ee] text-xs py-1 px-2 rounded font-medium">
                  Stripe
                </span>
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href="#"
                  className="text-[#4361ee] text-sm font-medium flex items-center gap-1 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-[#4361ee] text-sm font-medium flex items-center gap-1 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Food Reviews Section */}
      
    </div>
  );
};

export default page;
