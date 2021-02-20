import {AppThemeContext, ThemeContextValue} from "features/app-theme-provider/app-theme-context"
import {useContext} from "react"


export default function useTheme(): ThemeContextValue {
  return useContext(AppThemeContext)
}
