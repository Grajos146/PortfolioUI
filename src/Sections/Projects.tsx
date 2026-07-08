import { useProjects } from '../hooks/useProjects';
import ProjectCard from '../Components/ProjectCard';
import Loader from '../Components/Loader';
import ErrorState from '../Components/ErrorState';

const Projects = () => {
    const { projects, loading, error, refetch } = useProjects();

    const featured = projects.find((p) => p.title === "Educational Platform MVP");
    const others = projects.filter((p) => p.title !== "Educational Platform MVP");

  return (
    <section 
      id="projects" 
      className="relative overflow-hidden w-full px-5 py-16 sm:py-24 md:px-10 lg:px-20 border-y border-slate-200/60 dark:border-indigo-950/40 bg-linear-to-tr from-slate-50 via-indigo-50/40 to-purple-50/30 dark:from-slate-950 dark:via-indigo-950/20 dark:to-slate-950"
    >
      {/* High-contrast colorful ambient glows */}
      <div className="absolute -top-20 left-1/3 w-150 h-150 bg-linear-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/15 dark:to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-10 w-100 h-100 bg-linear-to-tr from-blue-500/10 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <span className="mb-3 animate-fade-down inline-block text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-indigo-600 dark:text-indigo-400">— Projects</span>
        <h1 className="text-4xl animate-fade-down sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white fraunces">Featured Projects</h1>

        {/* for the loading */}
        {loading && (
            <div className="mt-4 text-sm text-slate-700 dark:text-slate-300"><Loader /></div>
        )}

        {/* for the error */}
        {error && (
            <div className="mt-4 text-center text-sm text-red-500"><ErrorState message={error} onRetry={refetch} /></div>
        )}

        {/* for the project display */}
        {!loading && !error && (
            <div className="mt-8 sm:mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 transition-all duration-300">
                {/* Display the featured project first, if it exists */}
                {featured && <ProjectCard project={featured} featured />}
                {others.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        )}
      </div>
    </section>
  )
}

export default Projects