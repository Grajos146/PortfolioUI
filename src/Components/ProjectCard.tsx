import type { Project } from '../types/project';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import PlaceholderImage from './PlaceholderImage';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;

}

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
    const techArray = project.techStack 
    ?project.techStack.split(',').map(t => t.trim()) 
    : [];

  return (
    // Parent div with conditional classes based on the 'featured' prop
    <div className={`group rounded-3xl border border-slate-200/80 dark:border-slate-700/70 bg-white dark:bg-slate-900 shadow-[0px_3px_8px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        featured ? "col-span-full" : ""
      }`}>

        {/* Image div also with a conditional class based on the 'featured' prop */}
        <div className={`relative w-full overflow-hidden bg-slate-100 dark:bg-slate-800 ${
          featured ? "h-64 sm:h-72 md:h-96" : "h-48 sm:h-56 md:h-64"
        }`}>
            <img src={project.imageUrl || PlaceholderImage}  alt={project.title} className="w-full h-full object-cover object-top"/>
        </div>

        {/* subdiv */}
        <div className="p-6 md:p-8">
            <div className = "flex justify-between items-start gap-4">
                <h3 className= {`font-semibold text-slate-900 dark:text-white ${featured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}`}>{project.title}</h3>

                {/* The urls */}
                <div className = "flex items-center gap-2 shrink-0">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg ring-1 ring-slate-200 dark:ring-slate-700 hover:ring-indigo-600 transition duration-300">
                            <BsGithub className="text-slate-700 dark:text-slate-200" size={16} />
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg ring-1 ring-slate-200 dark:ring-slate-700 hover:ring-indigo-600 transition duration-300">
                            <BsArrowUpRight className="text-slate-700 dark:text-slate-200" size={16} />
                        </a>
                    )}
                </div>

            </div>

            {/* Description */}
            <p className={`mt-3 text-slate-600 dark:text-slate-300 leading-7 ${featured ? "text-base sm:text-lg" : "text-sm sm:text-base"}`}>
                {project.description}
            </p>

            {/* Tech Stack */}
            <div className={`mt-4 flex flex-wrap ${featured ? "gap-3" : "gap-2"}`}>
                {techArray.map((t, idx) => (
               <span 
                key={`t-${idx}`} className="text-[0.65rem] sm:text-[0.7rem] text-slate-700 dark:text-slate-200 bg-gray-600/10 dark:bg-slate-800 rounded-md px-3 py-1">
                    {t}
                </span>
            ))}
                    
            </div>

        </div>
    </div>
  )
}

export default ProjectCard
