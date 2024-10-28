import Meteors from "../components/ui/meteors";

export function MeteorDemo() {
  return (
    <div className=" flex !h-[100dvh] w-full flex-col items-center justify-center ">
      <Meteors number={60} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Belapu Sports Club
      </span>
      <span className=" mt-6 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Coming Soon
      </span>
    </div>
  );
}
