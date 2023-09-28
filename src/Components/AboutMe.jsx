export default function AboutMe() {
  return (
    <section className="mt-3 pt-1 h-screen">
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-around">
        <p className="bg-orange-600 rounded w-5/6 sm:w-1/3 h-1"></p>
        <h1 className="text-center my-2 sm:my-0 text-3xl font-bold">
          ABOUT ME
        </h1>
        <p className="bg-cyan-500 rounded w-5/6 sm:w-1/3 h-1 "></p>
      </div>
    </section>
  );
}