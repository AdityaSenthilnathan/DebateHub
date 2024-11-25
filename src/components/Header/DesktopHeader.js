import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RoutesEnum } from "../../routes";
import logo from "../../assets/logo.png";
import MenuIcon from "./MenuIcon";
import { navigation } from "./helper"; // Ensure this import is correct and `navigation` is defined
import Toggle from "../Toggle";
import SignIn from "./SignIn";
import { Link } from "react-router-dom";
import { auth } from "../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const DesktopHeader = ({ setMobileMenuOpen, darkMode, setDarkMode, }) => {
    const [user, loading] = useAuthState(auth);
    //const navigate = useNavigate();
    if (loading) {
        return _jsx("div", { children: "Loading..." }); // Optional loading state
    }
    if (!user) {
        // Display for non-authenticated users
        return (_jsxs("nav", { className: "flex items-center justify-between p-6 lg:p-8", "aria-label": "Global", children: [_jsx("div", { className: "flex lg:flex-1", children: _jsx(Link, { to: RoutesEnum.Home, children: _jsx("img", { className: "h-10 w-auto", src: logo, alt: "DebateHub" }) }) }), _jsx(MenuIcon, { setMobileMenuOpen: setMobileMenuOpen }), _jsx("p", { children: "Debate Hub" }), _jsx("div", { className: "hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4", children: _jsx(SignIn, {}) })] }));
    }
    // Display for authenticated users
    return (_jsxs("nav", { className: "flex items-center justify-between p-6 lg:p-8", "aria-label": "Global", children: [_jsx("div", { className: "flex lg:flex-1", children: _jsx(Link, { to: RoutesEnum.Home, children: _jsx("img", { className: "h-10 w-auto", src: logo, alt: " Debate Hub" }) }) }), _jsx(MenuIcon, { setMobileMenuOpen: setMobileMenuOpen }), _jsx("div", { className: "hidden lg:flex lg:gap-x-12", children: navigation.map((item) => (_jsx("a", { href: item.href, className: "text-sm font-semibold leading-6", children: item.name }, item.name))) }), _jsxs("div", { className: "hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4", children: [_jsx(Toggle, { darkMode: darkMode, setDarkMode: setDarkMode }), _jsx(SignIn, {})] })] }));
};
export default DesktopHeader;
