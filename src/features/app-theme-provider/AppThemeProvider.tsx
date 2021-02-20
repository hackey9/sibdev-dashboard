import React, {FC, PropsWithChildren, useCallback, useMemo, useState} from "react"
import {AppThemeChangeContext, AppThemeContext, ThemeChangeContextControls} from "./app-theme-context"


export type AppThemeProviderProps = PropsWithChildren<{}>

const AppThemeProvider: FC<AppThemeProviderProps> = ({children}) => {

  const [isLight, setIsLight] = useState(true)
  const toggleIsLight = useCallback(() => setIsLight(v => !v), [])

  const controls: ThemeChangeContextControls = useMemo(() => ({
    set: setIsLight,
    toggle: toggleIsLight,
  }), [])

  return (
    <AppThemeContext.Provider value={isLight}>
      <AppThemeChangeContext.Provider value={controls}>
        {children}
      </AppThemeChangeContext.Provider>
    </AppThemeContext.Provider>
  )
}
export default AppThemeProvider
