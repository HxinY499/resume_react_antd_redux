import { Redirect } from "react-router"

import About from "../pages/about"
import Contact from "../pages/contact"
import Detail from "../pages/detail"
import Home from "../pages/home"

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (<Redirect to="/home"></Redirect>)
  },
  {
    path: "/home",
    component: Home,
    exact: true
  },
  {
    path: "/about",
    component: About,
    exact: true
  },
  {
    path: "/contact",
    component: Contact,
    exact: true
  },
  {
    path: "/detail",
    component: Detail,
    exact: true
  }
]

export default routes