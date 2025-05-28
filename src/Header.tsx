// @flow
import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import {containerSx} from "@/TodolistItem.styles.ts";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {NavButton} from "@/NavButton.ts";
import Switch from "@mui/material/Switch";
import {getTheme} from "@/common/theme/theme.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectThemeMode} from "@/app/app-selectors.ts";
import {changeThemeModeAC} from "@/app/app-reducer.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";

export const Header = () => {
  const theme = getTheme('light')
  const themeMode = useAppSelector(selectThemeMode)
  const dispatch = useAppDispatch()
  const changeMode = () => {
    dispatch(changeThemeModeAC({themeMode: themeMode === 'light' ? 'dark' : 'light'}))
  }

  return (
    <AppBar position="static" sx={{mb: '30px'}}>
      <Toolbar>
        <Container maxWidth={'lg'} sx={containerSx}>
          <IconButton color="inherit">
            <MenuIcon/>
          </IconButton>
          <div>
            <NavButton>Sign in</NavButton>
            <NavButton>Sign up</NavButton>
            <NavButton background={theme.palette.primary.dark}>Faq</NavButton>
            <Switch color={'default'} onChange={changeMode} />
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};