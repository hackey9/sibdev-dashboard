import {AppThemeChangeContext, ThemeChangeContextControls} from "features/app-theme-provider/app-theme-context"
import {useContext} from "react"


export default function useChangeTheme(): ThemeChangeContextControls {
  return useContext(AppThemeChangeContext)
}
