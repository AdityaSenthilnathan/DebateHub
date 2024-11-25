import { jsx as _jsx } from "react/jsx-runtime";
const PageLayout = ({ children, darkMode }) => {
    return (_jsx("html", { className: `h-full ${darkMode ? "dark-mode" : "light-mode"}`, children: _jsx("body", { className: "h-full", children: children }) }));
};
export default PageLayout;
