import type {Todolist} from '@/app/App'
import {useAppDispatch} from '@/common/hooks/useAppDispatch'
import {EditableSpan} from '@/EditableSpan'
import {changeTodolistTitleAC, deleteTodolistAC} from '@/model/todolists-reducer'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'

type Props = {
  todolist: Todolist
}

export const TodolistTitle = ({todolist}: Props) => {
  const {id, title} = todolist

  const dispatch = useAppDispatch()

  const deleteTodolistHandler = () => {
    dispatch(deleteTodolistAC({id}))
  }

  const changeTodolistTitleHandler = (title: string) => {
    dispatch(changeTodolistTitleAC({id, title}))
  }

  return (
      <div className={'container'}>
        <h3>
          <EditableSpan value={title} onChange={changeTodolistTitleHandler}/>
        </h3>
        <IconButton onClick={deleteTodolistHandler}>
          <DeleteIcon/>
        </IconButton>
      </div>
  )
}