import {useAppDispatch} from '@/common/hooks/useAppDispatch'
import {FilterButtons} from '@/FilterButtons'
import {createTaskAC} from '@/model/tasks-reducer'
import {Tasks} from '@/Tasks'
import {TodolistTitle} from '@/TodolistTitle'
import type {Todolist} from './app/App'
import {CreateItemForm} from './CreateItemForm'

type Props = {
  todolist: Todolist
}

export const TodolistItem = ({todolist}: Props) => {
  const dispatch = useAppDispatch()

  const createTaskHandler = (title: string) => {
    dispatch(createTaskAC({todolistId: todolist.id, title}))
  }

  return (
      <div>
        <TodolistTitle todolist={todolist}/>
        <CreateItemForm onCreateItem={createTaskHandler}/>
        <Tasks todolist={todolist}/>
        <FilterButtons todolist={todolist}/>
      </div>
  )
}
