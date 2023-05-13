import { Schema, model, models } from 'mongoose'

const TodoSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  todo: {
    type: String,
    required: [true, 'Todo is required'],
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
})

const Todo = models.Todo || model('Todo', TodoSchema)

export default Todo