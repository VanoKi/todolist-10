import type {FilterValues} from '@/app/App'
import {useAppDispatch} from '@/common/hooks/useAppDispatch'
import {useAppSelector} from '@/common/hooks/useAppSelector'
import {createTaskAC} from '@/model/tasks-reducer'
import {selectTasks} from '@/model/tasks-selectors'
import {changeTodolistFilterAC, changeTodolistTitleAC, deleteTodolistAC} from '@/model/todolists-reducer'
import {selectTodolists} from '@/model/todolists-selectors'
import {TodolistItem} from '@/TodolistItem'
import Grid from '@mui/material/Grid2'
import Paper from '@mui/material/Paper'

export const Todolists = () => {
  const todolists = useAppSelector(selectTodolists)
  const tasks = useAppSelector(selectTasks)

  const dispatch = useAppDispatch()

  const changeFilter = (todolistId: string, filter: FilterValues) => {
    dispatch(changeTodolistFilterAC({id: todolistId, filter}))
  }

  const deleteTodolist = (todolistId: string) => {
    dispatch(deleteTodolistAC({id: todolistId}))
  }

  const changeTodolistTitle = (todolistId: string, title: string) => {
    dispatch(changeTodolistTitleAC({id: todolistId, title}))
  }

  const createTask = (todolistId: string, title: string) => {
    dispatch(createTaskAC({todolistId, title}))
  }

  return (
      <>
        {todolists.map(todolist => {
          const todolistTasks = tasks[todolist.id]
          let filteredTasks = todolistTasks
          if (todolist.filter === 'active') {
            filteredTasks = todolistTasks.filter(task => !task.isDone)
          }
          if (todolist.filter === 'completed') {
            filteredTasks = todolistTasks.filter(task => task.isDone)
          }

          return (
              <Grid key={todolist.id}>
                <Paper sx={{p: '0 20px 20px 20px'}}>
                  <TodolistItem todolist={todolist}
                                tasks={filteredTasks}
                                changeFilter={changeFilter}
                                createTask={createTask}
                                deleteTodolist={deleteTodolist}
                                changeTodolistTitle={changeTodolistTitle}/>
                </Paper>
              </Grid>
          )
        })}
      </>
  )
}