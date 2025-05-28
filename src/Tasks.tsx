import {type ChangeEvent, Fragment} from "react";
import {changeTaskStatusAC, deleteTaskAC} from "@/model/tasks-reducer.ts";
import ListItem from "@mui/material/ListItem";
import {getListItemSx} from "@/TodolistItem.styles.ts";
import Checkbox from "@mui/material/Checkbox";
import {EditableSpan} from "@/EditableSpan.tsx";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import List from "@mui/material/List";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";

type Props = {
  
};
export const Tasks = (props: Props) => {

  const dispatch = useAppDispatch()

  return (
    <>
      <List>
        {filteredTasks.map(task => {
          const deleteTaskHandler = () => {
            dispatch(deleteTaskAC({todolistId: id, taskId: task.id}))
          }

          const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
            const newStatusValue = e.currentTarget.checked
            dispatch(changeTaskStatusAC({todolistId: id, taskId: task.id, isDone: newStatusValue}))
          }

          return (
            <ListItem key={task.id} sx={getListItemSx(task.isDone)}>
              <div>
                <Checkbox checked={task.isDone} onChange={changeTaskStatusHandler}/>
                <EditableSpan value={task.title} onChange={changeTaskTitleHandler} />
              </div>
              <IconButton onClick={deleteTaskHandler}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          )
        })}
      </List>
    </>
  );
};