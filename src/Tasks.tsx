import {type ChangeEvent, Fragment} from "react";
import {changeTaskStatusAC, deleteTaskAC} from "@/model/tasks-reducer.ts";
import List from "@mui/material/List";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {TaskItem} from "@/TaskItem.tsx";

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
           <TaskItem/>
          )
        })}
      </List>
    </>
  );
};