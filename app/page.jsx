const Home = () => {
  return (
    <div className="m-4 flex w-2/3 cursor-context-menu flex-col gap-8 rounded-[4rem] border-4 border-purple-400 p-16 ">
      <section className="flex flex-col gap-8 text-slate-200">
        <p className="purple_gradient text-center text-5xl font-bold capitalize ">
          Next Todo App
        </p>
        <p className="text-center text-4xl font-bold capitalize">
          Authendicate with google account <br /> & <br />
          create todos
        </p>
      </section>
      <div className="mt-2 flex flex-col items-center gap-4">
        <p className=" w-2/3 text-center text-slate-200">
          You can create todos and read update and delete.
          <br /> Your todos will be saved to database
        </p>
        <button className="w-64 rounded-sm bg-white/80 px-4 py-2 transition ease-linear hover:bg-white hover:text-purple-500 hover:shadow-lg hover:shadow-purple-400">
          Get Started
        </button>
      </div>
    </div>
  )
}
export default Home
