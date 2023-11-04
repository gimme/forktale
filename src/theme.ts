import { blue, purple } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

// A custom theme for this app
const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: blue[200],
            light: blue[50],
            dark: blue[400],
        },
        secondary: {
            main: purple["200"],
            light: purple["50"],
            dark: purple["400"],
        },
    },
})

export default theme
