import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../lib/firebase";
// import { deleteUserFromFirestore } from "../../../lib/firebase/DeleteAuth";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { deleteUserFromFirestore } from "../../../lib/firebase/Authentication/DeleteUser";
const ConfirmDeleteUser = () => {
    const navigate = useNavigate();
    const [password, setPassword] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const isEmailUser = auth?.currentUser?.providerData.some((provider) => provider.providerId === "password");
    const isGoogleUser = auth?.currentUser?.providerData.some((provider) => provider.providerId === "google.com");
    if (isLoading)
        return _jsx("div", { children: "Loading..." });
    if (isGoogleUser) {
        return (_jsx("div", { className: "mt-4 text-sm text-gray-500 flex flex-col gap-4", children: _jsx(Button, { text: "Confirm delete", type: "button", handleClick: () => deleteUserFromFirestore(navigate, false, true, setIsLoading) }) }));
    }
    if (isEmailUser) {
        return (_jsxs("div", { className: "mt-4 text-sm text-gray-500 flex flex-col gap-4", children: ["Please enter your password to delete your account:", _jsx(Input, { label: "Password", name: "password", value: password, onChange: setPassword }), _jsx(Button, { text: "Confirm delete", type: "button", handleClick: () => deleteUserFromFirestore(navigate, true, false, setIsLoading, password) })] }));
    }
    return;
};
export default ConfirmDeleteUser;
