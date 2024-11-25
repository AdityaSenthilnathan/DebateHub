import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import ChangePasswordForm from "./ChangePasswordForm";
const ChangePassword = () => {
    const [open, setOpen] = useState(false);
    return (_jsx("form", { onSubmit: (e) => {
            e.preventDefault();
            // updateUserDetails(email, isGoogleUser, setIsLoading);
        }, children: _jsx("div", { className: "space-y-12", children: _jsxs("div", { className: "grid grid-cols-1 gap-x-8 gap-y-10 border-b  pb-12 md:grid-cols-3", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-base font-semibold leading-7", children: "Password" }), _jsx("p", { className: "mt-1 text-sm leading-6", children: "Update your password" })] }), _jsx("div", { className: "grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2", children: _jsxs("div", { className: "sm:col-span-4", children: [_jsx("div", { className: "w-1/2 mt-4", children: _jsx(Button, { text: "Change Password", type: "button", handleClick: () => setOpen(!open) }) }), _jsx(Modal, { open: open, setOpen: setOpen, children: _jsx(ChangePasswordForm, {}) })] }) })] }) }) }));
};
export default ChangePassword;
