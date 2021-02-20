import {createContext} from "react"
import doNothing from "utils/doNothing"


export type ThemeContextValue = boolean
export const AppThemeContext = createContext<ThemeContextValue>(true)


export type SetThemeFunction = (isLight: ThemeContextValue) => void
export type ToggleThemeFunction = () => void
export type ThemeChangeContextControls = {
  set: SetThemeFunction
  toggle: ToggleThemeFunction
}

const defaultThemeControls: ThemeChangeContextControls = {
  set: doNothing,
  toggle: doNothing,
}

export const AppThemeChangeContext = createContext<ThemeChangeContextControls>(defaultThemeControls)
