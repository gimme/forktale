import React from "react"
import { createBrowserRouter as createRouter } from "react-router-dom"

import ErrorPage from "@/ErrorPage"
import { CrossroadsPageWrapper } from "@/features/crossroads/CrossroadsPage"
import LobbyPage from "@/features/lobby/LobbyPage"
import RoomSettingsPage from "@/features/lobby/RoomSettingsPage"
import SeatingPage from "@/features/lobby/SeatingPage"

const router = createRouter(
    [
        route("/", <LobbyPage />),
        route("/create", <RoomSettingsPage />),
        route("/:roomCode", <SeatingPage />),
        route(
            "/:roomCode/:seat/:card?/:page?/:option?",
            <CrossroadsPageWrapper />,
        ),
    ],
    { basename: "/forktale" },
)

function route(path: string, element: React.ReactNode) {
    return {
        path,
        element,
        errorElement: <ErrorPage />,
    }
}

export default router
