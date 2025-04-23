import React from "react";
import FaceCycle from "@/components/faceCycle";
const page = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 text-left">
      <div className="mt-10 text-5xl font-bold">
        <div className="flex items-center">
          Hello, I’m Brian
          <span className="ml-4">
            <FaceCycle />
          </span>
        </div>
        <hr className="mt-2 border border-#F5F5F5"></hr>
        <div className="mt-4 text-2xl font-normal">
          I’m a 3rd year student at UCLA studying computational mathematics. I’m
          highly interested in fullstack engineering as well as anything
          data/math based.
        </div>
        <div className="mt-4 text-2xl font-normal">
          In my free time I’m very likely to be at the gym 💪, playing brawl
          stars 🎮, brainrotting 🤳, sleeping in 😴, or stuffing my mouth 🍽️
        </div>
      </div>
      <div className="mt-10 text-5xl font-bold">
        Experience
        <hr className="mt-2 border border-#F5F5F5"></hr>
        <ul className="text-2xl font-normal">
          <li> - Software Engineering Intern at San Jose State University </li>
          <li> - Software Engineering Intern at CodeDay Labs </li>
          <li> - Tech Lead at Google Developer Student Club</li>
        </ul>
      </div>
      <div className="mt-10 text-5xl font-bold">
        Skills
        <hr className="mt-2 border border-#F5F5F5"></hr>
        <img
          widht={30}
          height={30}
          className="mt-2"
          src="https://skillicons.dev/icons?i=js,ts,py,react,nextjs,postgres,mongodb,cpp,html,css,sqlite,supabase,docker,svelte,graphql,fastapi,express,postman,linux&perline=10"
        ></img>
      </div>
      <div className="mt-10 text-5xl font-bold">
        What I've been up to
        <hr className="mt-2 border border-#F5F5F5"></hr>
        <ul className="text-2xl font-normal">
          <li>
            <a
              href="https://github.com/liubrian267/Bruin-Brawlers"
              className="transition-colors duration-200 hover:text-blue-500 hover:underline"
            >
              - Learning automation to refresh data for my Brawl Stars
              statistics application
            </a>
          </li>
          <li> - Self-studying machine learning topics </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
