import {createTheme} from "@mui/material/styles";
import {ThemeMode} from "../../app/app-reducer.ts";

export const geTheme = (themeMode: ThemeMode) => {
  return createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: '#087EA4',
      },
    },
  })
}