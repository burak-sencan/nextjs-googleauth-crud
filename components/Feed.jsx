'use client'

import { useEffect, useState } from 'react'
import TodoCard from './TodoCard'
import { useSession } from 'next-auth/react'

const Feed = () => {
  const { data: session } = useSession()

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch(`/api/todo`)
      const data = await response.json()
      console.log(data)
      setTodos(data)
    }

    fetchTodo()
  }, [])

  return (
    <div className="flex-center gap-4 flex-wrap">
      {todos.map((todo, idx) => (
        <TodoCard key={idx} todo={todo} />
      ))}
    </div>
  )
}
export default Feed
