'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const CreateTodo = () => {
  const router = useRouter()
  const { data: session } = useSession()

  const [submitting, setSubmitting] = useState(false)

  const [todo, setTodo] = useState({
    title: '',
    todo: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const response = await fetch('/api/todo/new', {
        method: 'POST',
        body: JSON.stringify({
          title: todo.title,
          todo: todo.todo,
          userId: session?.user.id,
        }),
      })

      if (response.ok) {
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="glassmorphism m-10 flex w-[640px] flex-col gap-4 p-8"
      >
        <div className="flex">
          <input
            className="glassmorphism-input"
            value={todo.title}
            onChange={(e) => {
              setTodo({ ...todo, title: e.target.value })
            }}
            type="text"
            id="title"
            required
            placeholder="Title"
          />
        </div>
        <div className="flex">
          <textarea
            rows="6"
            className="glassmorphism-input  resize-none"
            value={todo.todo}
            onChange={(e) => {
              setTodo({ ...todo, todo: e.target.value })
            }}
            type="text"
            id="todo"
            required
            placeholder="Todo"
          />
        </div>
        <button
          className="self-end rounded-md px-4 py-2 text-white"
          type="submit"
          disabled={submitting}
        >
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}
export default CreateTodo
