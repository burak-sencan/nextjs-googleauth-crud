'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'

const CreateTodo = () => {
  const [submitting, setSubmitting] = useState(false)
  const [todo, setTodo] = useState({
    title: '',
    todo: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
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
