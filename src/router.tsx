import React from "react"
import { createBrowserRouter } from "react-router-dom"

import App from "@/App"
import ErrorPage from "@/ErrorPage"
import { CrossroadsPage } from "@/features/crossroads/CrossroadsPage"

const router = createBrowserRouter([
    route("/", <App />),
    route("/crossroads", <CrossroadsPage />),
])

function route(path: string, element: React.ReactNode) {
    return {
        path,
        element,
        errorElement: <ErrorPage />,
    }
}

export default router
