import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Bars3Icon } from "@heroicons/react/16/solid";
const MenuIcon = ({ setMobileMenuOpen }) => {
    return (_jsx("div", { className: "flex lg:hidden", children: _jsxs("button", { className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700", onClick: () => setMobileMenuOpen(true), children: [_jsx("span", { className: "sr-only", children: "Open main menu" }), _jsx(Bars3Icon, { className: `h-6 w-6`, "aria-hidden": "true" })] }) }));
};
export default MenuIcon;
