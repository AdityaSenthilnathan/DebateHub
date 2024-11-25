import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
const Header = ({ darkMode, setDarkMode }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    return (_jsxs("header", { children: [_jsx(DesktopHeader, { setMobileMenuOpen: setMobileMenuOpen, darkMode: darkMode, setDarkMode: setDarkMode }), _jsx(MobileHeader, { mobileMenuOpen: mobileMenuOpen, setMobileMenuOpen: setMobileMenuOpen, darkMode: darkMode, setDarkMode: setDarkMode })] }));
};
export default Header;
