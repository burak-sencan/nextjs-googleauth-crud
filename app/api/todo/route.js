import Todo from '@/models/todo'
import { connectToDB } from '@/utils/database'

export const GET = async (req) => {
  try {
    await connectToDB()
    const todos = await Todo.find({}).populate('creator')

    return new Response(JSON.stringify(todos), { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response('Failed to get todos', { status: 500 })
  }
}
