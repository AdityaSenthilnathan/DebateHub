import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import PageLayout from "../../components/PageLayout";
import Header from "../../components/Header";
import AccountLayout from "../../modules/Account";
const Account = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (_jsxs(PageLayout, { darkMode: darkMode, children: [_jsx(Header, { darkMode: darkMode, setDarkMode: setDarkMode }), _jsx("main", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: _jsx(AccountLayout, {}) })] }));
};
export default Account;
