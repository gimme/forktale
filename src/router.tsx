import React from "react"
import { createBrowserRouter } from "react-router-dom"

import App from "@/App"
import ErrorPage from "@/ErrorPage"
import { CrossroadsPage } from "@/features/crossroads/CrossroadsPage"
import RoomSettingsPage from "@/features/lobby/RoomSettingsPage"
import SeatingPage from "@/features/lobby/SeatingPage"

const router = createBrowserRouter([
    route("", <App />),
    route("create", <RoomSettingsPage />),
    route(":roomCode", <SeatingPage />),
    route(":roomCode/:seat/:card?/:page?", <CrossroadsPage />),
])

function route(path: string, element: React.ReactNode) {
    return {
        path,
        element,
        errorElement: <ErrorPage />,
    }
}

export default router
