import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { updateUserPassword } from "../../../lib/firebase/Authentication/PasswordAuth";
const ChangePasswordForm = () => {
    const navigate = useNavigate();
    const [currentPassword, setCurrentPassword] = React.useState("");
    const [newPassword, setNewPassword] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    if (isLoading)
        return _jsx("div", { children: "Loading..." });
    return (_jsxs("div", { className: "mt-4 text-sm text-gray-500 gap-4 flex flex-col", children: ["Please enter your password to delete your account:", _jsx(Input, { label: "Current Password", name: "current-password", value: currentPassword, onChange: setCurrentPassword }), _jsx(Input, { label: "New Password", name: "new-password", value: newPassword, onChange: setNewPassword }), _jsx(Button, { text: "Confirm password change", type: "button", handleClick: () => updateUserPassword(currentPassword, newPassword, navigate, setIsLoading) })] }));
};
export default ChangePasswordForm;
