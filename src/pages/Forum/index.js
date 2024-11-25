import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import Header from "../../components/Header";
import PageLayout from "../../components/PageLayout";
//import Products from "../../modules/Home/Products";
const Forum = () => {
    const [darkMode, setDarkMode] = React.useState(true);
    return (_jsx(PageLayout, { darkMode: darkMode, children: _jsx(Header, { darkMode: darkMode, setDarkMode: setDarkMode }) }));
};
export default Forum;
