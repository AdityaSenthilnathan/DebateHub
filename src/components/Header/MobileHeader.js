import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dialog } from "@headlessui/react";
import { Link } from "react-router-dom";
import { RoutesEnum } from "../../routes";
import logo from "../../assets/logo.png";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { navigation } from "./helper";
import Toggle from "../Toggle";
import SignIn from "./SignIn";
const MobileHeader = ({ mobileMenuOpen, setMobileMenuOpen, darkMode, setDarkMode, }) => {
    return (_jsxs(Dialog, { as: "div", className: "lg:hidden", open: mobileMenuOpen, onClose: setMobileMenuOpen, children: [_jsx("div", { className: "fixed inset-0 z-40" }), _jsxs(Dialog.Panel, { className: "fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs(Link, { to: RoutesEnum.Home, children: [" ", _jsx("img", { className: "h-10 w-auto", src: logo, alt: "DebateHub" })] }), _jsxs("button", { type: "button", className: `-m-2.5 rounded-md p-2.5 text-gray-700`, onClick: () => setMobileMenuOpen(false), children: [_jsx("span", { className: "sr-only", children: "Close menu" }), _jsx(XMarkIcon, { className: "h-6 w-6", "aria-hidden": "true" })] })] }), _jsxs("div", { className: "mt-6 flow-root", children: [_jsx(Toggle, { darkMode: darkMode, setDarkMode: setDarkMode }), _jsxs("div", { className: "-my-6 divide-y divide-gray-500/10", children: [_jsx("div", { className: "space-y-2 py-6", children: navigation.map((item) => (_jsx("a", { href: item.href, className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50", children: item.name }, item.name))) }), _jsx("div", { className: "py-6", children: _jsx(SignIn, {}) })] })] })] })] }));
};
export default MobileHeader;
