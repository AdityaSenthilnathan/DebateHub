import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
};
const Toggle = ({ darkMode, setDarkMode }) => {
    return (_jsxs(Switch, { checked: darkMode, onChange: setDarkMode, className: classNames(darkMode ? "bg-red-600" : "bg-gray-100", "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"), children: [_jsx("span", { className: "sr-only", children: "Theme toggle" }), _jsxs("span", { className: classNames(darkMode ? "translate-x-5" : "translate-x-0", "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"), children: [_jsx("span", { className: classNames(darkMode
                            ? "opacity-0 duration-100 ease-out"
                            : "opacity-100 duration-200 ease-in", "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"), "aria-hidden": "true", children: _jsx(SunIcon, { className: "h-3 w-3 text-yellow-600", "aria-hidden": "true" }) }), _jsx("span", { className: classNames(darkMode
                            ? "opacity-100 duration-200 ease-in"
                            : "opacity-0 duration-100 ease-out", "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"), "aria-hidden": "true", children: _jsx(MoonIcon, { className: "h-3 w-3 text-gray-400", "aria-hidden": "true" }) })] })] }));
};
export default Toggle;
