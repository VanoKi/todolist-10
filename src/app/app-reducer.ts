import {createAction, createReducer} from '@reduxjs/toolkit'

export const deleteTaskAC = createAction<{todolistId: string, taskId: string}>('tasks/deleteTask')

const initialState = {
  themeMode: 'light' as ThemeMode
}

export const appReducer = createReducer(initialState, builder => {
  builder
    .addCase(deleteTaskAC, (state, action) => {

    })
})

type ThemeMode = 'dark' | 'light'
