import Main from "../Components/Main"

const Hero = () => {
  return (
    <main id="hero" className="relative overflow-hidden min-h-screen py-20 lg:py-10 px-5 md:px-10 lg:px-20 mx-auto items-center justify-center text-slate-950 dark:text-slate-100 bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/30 transition-colors duration-500">
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_0%,#eff6ff,transparent)] dark:bg-[radial-gradient(circle_800px_at_0%_0%,#1e293b,transparent)]"></div>
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute left-10 top-24 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute right-12 top-12 h-36 w-36 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute left-1/3 bottom-24 h-28 w-28 rounded-full bg-red-400/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-50 w-50 rounded-full bg-red-400/20 blur-3xl" />
        <div className="absolute inset-0 dark:bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_30%)]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.04),transparent_45%)]" />
      <Main />
    </main>
  )
}

export default Hero
