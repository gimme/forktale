import { RouterProvider } from "react-router-dom"

import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material"

import router from "@/router"
import { getTheme } from "@/theme"

export default function App() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

    return (
        <ThemeProvider theme={getTheme(prefersDarkMode)}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}
