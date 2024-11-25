import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Input = ({ name, label, value, onChange }) => {
    return (_jsxs("div", { children: [_jsx("label", { htmlFor: name, className: "block text-sm font-medium leading-6 text-gray-900", children: label }), _jsx("input", { type: name, id: name, required: true, value: value, onChange: (e) => onChange(e.target.value), className: "mt-2 block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400" })] }));
};
export default Input;
