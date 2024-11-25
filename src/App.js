import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { RoutesEnum } from "./routes";
const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const ForgotPassword = React.lazy(() => import("./pages/ForgotPassword"));
const Account = React.lazy(() => import("./pages/Account"));
const Forums = React.lazy(() => import("./pages/Forums"));
const RequireUser = React.lazy(() => import("./lib/firebase/components/RequireUser"));
function App() {
    return (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsxs(Routes, { children: [_jsx(Route, { path: RoutesEnum.Login, element: _jsx(Login, {}) }), _jsx(Route, { path: RoutesEnum.Home, element: _jsx(Home, {}) }), _jsx(Route, { path: RoutesEnum.Register, element: _jsx(Register, {}) }), _jsx(Route, { path: RoutesEnum.ForgotPassword, element: _jsx(ForgotPassword, {}) }), _jsx(Route, { path: RoutesEnum.Forums, element: _jsx(Forums, {}) }), _jsx(Route, { path: RoutesEnum.Account, element: _jsx(RequireUser, { children: _jsx(Account, {}) }) }), _jsx(Route, { path: "*", element: _jsx("div", { children: "Not Found" }) })] }) }));
}
export default App;
