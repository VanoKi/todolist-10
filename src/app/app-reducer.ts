import {createAction, createReducer} from '@reduxjs/toolkit'

export const changeThemeModeAC = createAction<{themeMode: ThemeMode}>('app/changeThemeMode')

const initialState = {
  themeMode: 'light' as ThemeMode
}

export const appReducer = createReducer(initialState, builder => {
  builder
    .addCase(changeThemeModeAC, (state, action) => {
      state.themeMode = action.payload.themeMode
    })
})

type ThemeMode = 'dark' | 'light'
