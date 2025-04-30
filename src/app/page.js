import React from "react";
import FaceCycle from "@/components/faceCycle";

const page = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 text-left font-sans">
      <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex-1">
          <div className="text-5xl font-bold">
            <div className="flex items-center">
              Hello, I'm Brian
              <span className="ml-4">
                <FaceCycle />
              </span>
            </div>
            <hr className="mt-2 border border-gray-200" />
          </div>
          <div className="mt-4 text-2xl font-light leading-relaxed pl-6">
            I'm a 3rd year student at UCLA studying computational mathematics. I'm
            highly interested in fullstack engineering as well as anything
            data/math based.
          </div>
          <div className="mt-4 text-2xl font-light leading-relaxed pl-6">
            In my free time I'm very likely to be at the gym 💪, playing brawl
            stars 🎮, brainrotting 🤳, sleeping in 😴, or stuffing my mouth 🍽️
          </div>
        </div>
        
        <div className="w-full md:w-64 h-64 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg flex-shrink-0 mt-4 md:mt-0">
          <img
            src="/api/placeholder/300/300"
            alt="Brian's Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
    
      
      <div className="mb-16 mt-6">
        <h2 className="text-5xl font-bold text-gray-900">
          Experience
        </h2>
        <hr className="mt-2 border border-gray-200" />
        <div className="space-y-6 mt-6">
          <div className="p-6 rounded-xl bg-gray-200 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">Software Engineering Intern</h3>
            <p className="text-xl text-gray-600 mt-1">San Jose State University</p>
            <p className="text-xl text-gray-600 mt-3">Developed and maintained web applications using modern JavaScript frameworks and backend technologies.</p>
          </div>
          
          <div className="p-6 rounded-xl bg-gray-200 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">Software Engineering Intern</h3>
            <p className="text-xl text-gray-600 mt-1">CodeDay Labs</p>
            <p className="text-xl text-gray-600 mt-3">Collaborated with a team to build innovative solutions during this intensive program focused on real-world projects.</p>
          </div>
          
          <div className="p-6 rounded-xl bg-gray-200 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">Tech Lead</h3>
            <p className="text-xl text-gray-600 mt-1">Google Developer Student Club</p>
            <p className="text-xl text-gray-600 mt-3">Led technical workshops and coordinated project development among student developers.</p>
          </div>
        </div>
      </div>
      
      <div className="mb-16 mt-6 text-5xl font-bold">
        Skills
        <hr className="mt-2 border border-gray-200" />
        <p>
        <img
          className="mt-6 pl-6"
          src="https://skillicons.dev/icons?i=js,ts,py,react,nextjs,postgres,mongodb,cpp,html,css,sqlite,supabase,docker,svelte,graphql,fastapi,express,postman,linux&perline=10"
          alt="Skill Icons"
          width={800}
          height={30}
        />
        </p>
      </div>
      
      <div className="mt-6 text-5xl font-bold mb-16 font-sans">
        What I've been up to
        <hr className="mt-2 border border-gray-200" />
        <ul className="text-2xl font-normal list-disc list-inside">
          <li>
            <a
              href="https://github.com/liubrian267/Bruin-Brawlers"
              className="transition-colors duration-200 hover:text-blue-500 hover:underline"
            >
              Learning automation to refresh data for my Brawl Stars
              statistics application
            </a>
          </li>
          <li>Self-studying machine learning topics</li>
        </ul>
      </div>
    </div>
  );
};

export default page;