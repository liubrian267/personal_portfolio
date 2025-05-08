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
      <div className="flex flex-col">
        <div className="flex justify-between mb-2">
          <h3 className="text-2xl font-semibold text-gray-800">Software Engineering Intern</h3>
          <span className="text-lg text-gray-500 whitespace-nowrap">Jan 2024 - Sept 2024</span>
        </div>
        <div className="flex items-center">
          <div className="mr-2 flex-shrink-0">
            <div className="h-10 w-10 rounded-full bg-white p-1 shadow-sm flex items-center justify-center overflow-hidden">
              <img src="/sjsu.png" alt="San Jose State University logo" className="h-10 w-10 object-contain" />
            </div>
          </div>
          <p className="text-xl text-gray-600">San Jose State University</p>
        </div>
        <p className="text-xl text-gray-600 mt-3">Set up schemas and database operations for professor/course review site, scrapping data from RateMyProfessor with GraphQL</p>
      </div>
    </div>
    
    <div className="p-6 rounded-xl bg-gray-200 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col">
        <div className="flex justify-between mb-2">
          <h3 className="text-2xl font-semibold text-gray-800">Software Engineering Intern</h3>
          <span className="text-lg text-gray-500 whitespace-nowrap">Sept 2023 - Nov 2023</span>
        </div>
        <div className="flex items-center">
          <div className="mr-2 flex-shrink-0">
          <div className="h-10 w-10 rounded-full bg-white shadow-sm overflow-hidden">              <img src="/CodeDay.jpeg" alt="CodeDay Labs logo" className="h-15 w-15 object-contain" />
            </div>
          </div>
          <p className="text-xl text-gray-600">CodeDay Labs</p>
        </div>
        <p className="text-xl text-gray-600 mt-3">Debugging Supabase data analytics log</p>
      </div>
    </div>
    
    <div className="p-6 rounded-xl bg-gray-200 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col">
        <div className="flex justify-between mb-2">
          <h3 className="text-2xl font-semibold text-gray-800">Tech Lead</h3>
          <span className="text-lg text-gray-500 whitespace-nowrap">Aug 2023 - Sept 2024</span>
        </div>
        <div className="flex items-center">
          <div className="mr-2 flex-shrink-0">
          <div className="h-10 w-10 rounded-full bg-white shadow-sm overflow-hidden">               <img src="GDSC.png" alt="Google Developer Student Club logo" className="h-10 w-10 object-contain" />
            </div>
          </div>
          <p className="text-xl text-gray-600">Google Developer Student Club</p>
        </div>
        <p className="text-xl text-gray-600 mt-3">Led technical workshops and helped organize and promote events such as DA Hacks and Google DevFest</p>
      </div>
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
        <ul className="text-2xl list-disc list-inside font-light leading-relaxed">
          <li>
            <a
              href="https://github.com/liubrian267/Bruin-Brawlers"
              className="transition-colors duration-200 hover:text-blue-500 hover:underline "
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