import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import Header from "../../components/Header";
import PageLayout from "../../components/PageLayout";
import Hero from "../../modules/Home/Hero";
//import Products from "../../modules/Home/Products";
const Home = () => {
    const [darkMode, setDarkMode] = React.useState(true);
    return (_jsxs(PageLayout, { darkMode: darkMode, children: [_jsx(Header, { darkMode: darkMode, setDarkMode: setDarkMode }), _jsx(Hero, {})] }));
};
export default Home;
