import React from "react";

const ProjectCard = ({
  imageUrl,
  title,
  description,
  techStack = [],
  links = [],
}) => {
  return (
    <div className="bg-white rounded-[12px] overflow-hidden shadow-sm border border-gray-200 flex flex-col transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div
        className="h-[400px] bg-[#e9ecef] bg-cover bg-center bg-no-repeat flex items-center justify-center text-[#6c757d]"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      ></div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3 text-[#0d1117]">{title}</h3>
        <p className="text-[#495057] mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-[#f1f3f5] text-[#4361ee] text-xs py-1 px-2 rounded font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex">
          <a
            href={links[0]}
            className="text-[#4361ee] text-sm font-medium flex items-center gap-1 hover:underline"
          />
          GitHub
          {(
            links.length > 1 && (
              <a
                href={links[1]}
                className="text-[#4361ee] text-sm font-medium flex items-center gap-1 hover:underline ml-auto"
              >
                Check it out
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
