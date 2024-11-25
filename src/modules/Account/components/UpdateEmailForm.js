import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { updateUserEmail } from "../../../lib/firebase/Authentication/EmailAuth";
const UpdateEmailForm = ({ user }) => {
    const [email, setEmail] = useState(user?.email);
    const [newEmail, setNewEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    if (isLoading)
        return _jsx("div", { children: "Loading..." });
    return (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx("div", { children: _jsx(Input, { label: "Current Email address", name: "email", value: email, onChange: setEmail }) }), _jsx("div", { children: _jsx(Input, { label: "New Email address", name: "email", value: newEmail, onChange: setNewEmail }) }), _jsx("div", { children: _jsx(Input, { label: "Password", name: "password", value: password, onChange: setPassword }) }), _jsx("div", { children: _jsx(Button, { text: "Update Email", type: "button", handleClick: () => {
                        updateUserEmail(email, newEmail, password, setIsLoading);
                    } }) })] }));
};
export default UpdateEmailForm;
