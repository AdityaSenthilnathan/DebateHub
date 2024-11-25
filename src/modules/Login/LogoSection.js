import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { RoutesEnum } from "../../routes";
import logo from "../../assets/logo.png";
const LogoSection = ({ isRegisterPage }) => {
    const appColor = "red";
    if (isRegisterPage) {
        return (_jsxs(_Fragment, { children: [_jsx(Link, { to: RoutesEnum.Home, children: _jsx("img", { className: "h-16 w-auto", src: logo, alt: "DebateHub" }) }), _jsx("h2", { className: "mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Register for an account" }), _jsxs("p", { className: "mt-2 text-sm leading-6 text-gray-500", children: ["Are you a member?", " ", _jsxs(Link, { to: RoutesEnum.Login, className: `cursor-pointer font-semibold text-${appColor}-600 hover:text-${appColor}-500`, children: [" ", "Sign In"] })] })] }));
    }
    return (_jsxs(_Fragment, { children: [_jsx(Link, { to: RoutesEnum.Home, children: _jsx("img", { className: "h-16 w-auto", src: logo, alt: "DebateHub" }) }), _jsx("h2", { className: "mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Sign in to your account" }), _jsxs("p", { className: "mt-2 text-sm leading-6 text-gray-500", children: ["Not a member?", " ", _jsxs(Link, { to: RoutesEnum.Register, className: `cursor-pointer font-semibold text-${appColor}-600 hover:text-${appColor}-500`, children: [" ", "Register Now"] })] })] }));
};
export default LogoSection;
