import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { registerUser } from "../../lib/firebase/Authentication/EmailAuth";
import { useNavigate } from "react-router-dom";
const RegisterForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        registerUser(name, email, password, setIsLoading, navigate);
    };
    if (isLoading) {
        return _jsx("p", { children: "Loading..." });
    }
    return (_jsxs("form", { className: "flex flex-col gap-4 mt-10", onSubmit: (e) => handleSubmit(e), children: [_jsx(Input, { label: "First Name", name: "text", value: name, onChange: setName }), _jsx(Input, { label: "Email address", name: "email", value: email, onChange: setEmail }), _jsx(Input, { label: "Password", name: "password", value: password, onChange: setPassword }), _jsx(Button, { text: "Register", type: "submit" })] }));
};
export default RegisterForm;