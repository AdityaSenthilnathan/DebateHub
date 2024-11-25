import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import UpdateEmailForm from "./UpdateEmailForm";
const ChangeEmail = ({ user }) => {
    const [open, setOpen] = useState(false);
    return (_jsx("div", { className: "space-y-12", children: _jsxs("div", { className: "grid grid-cols-1 gap-x-8 gap-y-10 border-b  pb-12 md:grid-cols-3", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-base font-semibold leading-7", children: "Email" }), _jsx("p", { className: "mt-1 text-sm leading-6", children: "Update your email address" })] }), _jsx("div", { className: "grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2", children: _jsxs("div", { className: "sm:col-span-4", children: [_jsx("div", { className: "w-1/2 mt-4", children: _jsx(Button, { text: "Update Email", type: "button", handleClick: () => setOpen(!open) }) }), _jsx(Modal, { open: open, setOpen: setOpen, children: _jsx(UpdateEmailForm, { user: user }) })] }) })] }) }));
};
export default ChangeEmail;
