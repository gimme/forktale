import React from "react"
import { createBrowserRouter } from "react-router-dom"
import App from "@/App.tsx"
import ErrorPage from "@/ErrorPage.tsx"

const router = createBrowserRouter([route("/", <App />)])

function route(path: string, element: React.ReactNode) {
    return {
        path,
        element,
        errorElement: <ErrorPage />,
    }
}

export default router
