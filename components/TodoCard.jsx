const TodoCard = ({ todo }) => {
  return (
    <div className="scroll-hide flex h-[20rem] min-w-[14rem] max-w-[24rem] flex-col gap-4 rounded-lg bg-white/20 p-8 transition hover:bg-white/90 hover:text-purple-500 hover:shadow-lg hover:shadow-purple-400">
      <h1>{todo?.title}</h1>
      <p>{todo?.todo}</p>

      <div className="mt-auto  self-end text-sm">
        <p>{todo?.creator?.username}</p>
      </div>
    </div>
  )
}
export default TodoCard
