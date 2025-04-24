import React from "react";
import ProjectCard from "@/components/project-card";
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
        <div className="grid grid-cols-[repeat(auto-fill,minmax(550px,1fr))] gap-8">
          
          <ProjectCard imageUrl="/bruin-brawlers.png" title="Bruin Brawlers" description="Track in-game statistics for Brawl Stars, add and view your friends statistics, make posts to share anything related, check leaderboard to see top players at UCLA" 
          techStack={["React", "NextJS", "TypeScript", "MongoDB"]} links={["https://github.com/liubrian267/Bruin-Brawlers", "https://bruin-brawlers.vercel.app/"]}/>
          <ProjectCard imageUrl="/CollegeMart.png" title="CollegeMart" description="Marketplace exclusive to college students to safe transactions in a close proximity" techStack={["React", "NextJS", "JavaScript", "PostgresSQL", "Supabase"]}/>
          <ProjectCard imageUrl="/CourseSync.png" title="CourseSync" description="Generate a schedule based on desired courses" techStack={["React", "NextJS", "TypeScript", "MongoDB"
          ]}/>
          <ProjectCard title="WorthIt" description="Take a picture of a price tag in foreign currency and convert to realtime price, compare with market average to see if your getting a good deal" techStack={["React Native", "Javascript", "Python", "Fast API"
          ]} links={["https://github.com/SamuelLo1/WorthIt-"]}/>
        </div>
      </div>
    </div>
  );
};

export default page;
