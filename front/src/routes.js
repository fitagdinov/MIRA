import Home from "./pages/Home"
import Opros from "./pages/Opros"
import OprosSecond from "./pages/OprosSecond"
import OprosThird from "./pages/OprosThird"
import User from "./pages/User"
import { HOME_ROUTE, OPROS_FIRST_ROUTE, OPROS_SECOND_ROUTE, OPROS_THIRD_ROUTE, USER_ROUTE } from "./utils/consts"
export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: USER_ROUTE,
        Component: User
    },
    {
        path: OPROS_FIRST_ROUTE,
        Component: Opros
    },
    {
        path: OPROS_SECOND_ROUTE,
        Component: OprosSecond
    },
    {
        path: OPROS_THIRD_ROUTE,
        Component: OprosThird
    },
]