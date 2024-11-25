import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
const TextContainer = () => {
    const [open, setOpen] = useState(false);
    console.log(open, "open");
    return (_jsxs("div", { className: "relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl", children: [_jsx("h1", { className: "text-4xl text-red-500 font-bold tracking-tight sm:text-6xl", children: "Dribble, Dunk, Shop" }), _jsx("p", { className: "mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none", children: "Welcome to Baller Boutique \u2013 Your Basketball Paradise. Baller Boutique brings you a curated selection of basketball apparel and accessories. Elevate your street-style game with our latest arrivals." }), _jsx("div", { className: "w-1/2 mt-4", children: _jsx(Button, { text: "Show more", type: "button", handleClick: () => setOpen(!open) }) }), _jsx(Modal, { open: open, setOpen: setOpen, children: _jsxs("div", { className: "p-4", children: [_jsx("h2", { className: "text-2xl font-bold", children: "More Information" }), _jsx("p", { className: "mt-4", children: "Here you can add more details about the Baller Boutique products or anything you'd like to show inside the modal." })] }) })] }));
};
export default TextContainer;
