import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import {CreateItemForm} from "@/CreateItemForm.tsx";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {createTodolistAC} from "@/model/todolists-reducer.ts";
import {Todolists} from "@/Todolists";

export const Main = () => {
  const dispatch = useAppDispatch()
  const createTodolist = (title: string) => {
    dispatch(createTodolistAC(title))
  }

  return (
    <Container maxWidth={'lg'}>
      <Grid container sx={{mb: '30px'}}>
        <CreateItemForm onCreateItem={createTodolist}/>
      </Grid>
      <Grid container spacing={4}>
        <Todolists/>
      </Grid>
    </Container>
  );
};