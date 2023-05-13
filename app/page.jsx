const Home = () => {
  return (
    <div className="m-4 flex flex-col  gap-8 rounded-[4rem] border-4 border-purple-400 p-16 ">
      <section className="flex flex-col gap-8">
        <p className="purple_gradient text-center text-5xl font-bold capitalize text-white">
          Lorem ipsum dolor sit amet
        </p>
        <p className="text-center text-4xl font-bold capitalize text-white">
          Lorem sit amet
        </p>
      </section>
      <div className="mt-2 flex flex-col items-center gap-4">
        <p className=" w-2/3 text-center text-white">
          Lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Optio, itaque! dolor sit amet consectetur, adipisicing elit. Sunt,
          eum?
        </p>
        <button className="w-64 rounded-md bg-white/90 px-4 py-2 transition  hover:bg-white hover:text-purple-500 hover:shadow-lg hover:shadow-purple-400">
          Discover
        </button>
      </div>
    </div>
  )
}
export default Home
