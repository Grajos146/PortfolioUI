const paragraphs = [
  {
    id: 1,
    text: "I'm a Full Stack Developer who enjoys building things that actually work and look good doing it. I'm looking for my first professional role, and while I'm early in my career, I've spent that time building real projects that taught me more than any tutorial could."
  },
  {
    id: 2,
    text: "I've built a fullstack to-do app with a login system backed by Entity Framework and C# MVC, created a church website for a mentor, rebuilt an educational platform MVP for my boss, and independently built a working OTP authentication system using Dapper. Earlier on, I also built a coffee website — the project that made me realize I actually loved this."
  },
  {
    id: 3,
    text: "I write code that I'd be comfortable showing to someone else — clean, intentional, and built with care. I'm looking for a team where I can contribute meaningfully from day one and keep getting better at what I do."
  },
];

const skillCategories = [
  {
    id: 1,
    label: "Frontend",
    pillClass: "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900/50",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    label: "Backend",
    pillClass: "bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-900/50",
    skills: ["C#", "ASP.NET Core", "SQL", "Entity Framework", "REST API"],
  },
  {
    id: 3,
    label: "Database",
    pillClass: "bg-teal-50 text-teal-700 border border-teal-200 dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-900/50",
    skills: ["SQL Server", "MySQL"],
  },
];

const About = () => {
  return (
    // Replaced the flat pink with a dynamic gradient / deep dark theme mesh background
    <section 
      id="about" 
      className="relative overflow-hidden w-full px-5 md:px-10 lg:px-20 py-16 sm:py-24 bg-linear-to-br from-slate-50 via-zinc-100 to-slate-50 dark:from-zinc-950 dark:via-slate-900 dark:to-zinc-950 text-slate-900 dark:text-slate-100"
    >
      {/* Visual background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Elements */}
        <span className="mb-3 animate-fade-down inline-block text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-indigo-600 dark:text-indigo-400">
          — About Me
        </span>
        <h1 className="text-4xl animate-fade-down sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white fraunces">
          Who I Am
        </h1>

        {/* Content Split Layout */}
        <div className="mt-10 lg:mt-14  grid gap-12 lg:grid-cols-[1.3fr_1fr] items-start">
          
          {/* Bio Column */}
          <div className="space-y-6 sm:space-y-7 lg:max-w-2xl animate-fade-right">
            {paragraphs.map((content) => (
              <p 
                key={content.id} 
                className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-normal"
              >
                {content.text}
              </p>
            ))}
          </div>

          {/* Skill Blocks Container */}
          <div className="grid grid-cols-1 animate-fade-left md:grid-cols-2 lg:grid-cols-1 gap-5 w-full">
            {skillCategories.map((cat) => (
              <div
                key={cat.id}
                className={`rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-xs backdrop-blur-md transition-all duration-300 dark:border-slate-800/80 dark:bg-slate-900/60 ${
                  cat.id === 3 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  {cat.label}
                </h2>
                
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-lg px-3 py-1.5 text-xs font-medium tracking-wide transition-colors ${cat.pillClass}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;