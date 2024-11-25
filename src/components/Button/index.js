import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ type, text, handleClick }) => {
    return (_jsx("button", { onClick: handleClick, type: type, className: "flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-md hover:bg-red-500", children: text }));
};
export default Button;
