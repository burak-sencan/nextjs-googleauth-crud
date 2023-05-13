import Todo from '@/models/todo'
import { connectToDB } from '@/utils/database'

export const POST = async (req) => {
  const { title, todo, userId } = await req.json()

  try {
    await connectToDB()
    const newTodo = new Todo({
      creator: userId,
      title,
      todo,
    })
    await newTodo.save()

    return new Response(JSON.stringify(newTodo), { status: 201 })
  } catch (error) {
    return new Response('Failed to create new todo', { status: 500 })
  }
}
