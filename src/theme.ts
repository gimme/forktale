import { blue, purple } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

export const getTheme = (darkMode?: boolean) =>
    darkMode ? darkTheme : lightTheme

// A custom theme for this app
const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: blue[500],
        },
        secondary: {
            main: purple[500],
        },
    },
})

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: blue[200],
        },
        secondary: {
            main: purple[200],
        },
    },
})
