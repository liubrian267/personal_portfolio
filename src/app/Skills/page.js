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
          <ProjectCard title="CollegeMart"/>
          <ProjectCard title="WorthIt"/>
        </div>
      </div>
    </div>
  );
};

export default page;
