import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { loginUserWithEmailAndPassword } from "../../lib/firebase/Authentication/EmailAuth";
import { useState } from "react";
import { RoutesEnum } from "../../routes";
const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        loginUserWithEmailAndPassword(email, password, navigate);
    };
    return (_jsxs("form", { className: "flex flex-col gap-4 mt-10", onSubmit: (e) => handleSubmit(e), children: [_jsx(Input, { label: "Email address", name: "email", value: email, onChange: setEmail }), _jsx(Input, { label: "Password", name: "password", value: password, onChange: setPassword }), _jsx(Link, { to: RoutesEnum.ForgotPassword, className: "flex justify-end text-sm leading-6 font-semibold text-red-600 hover:text-red-500", children: "Forgot Password" }), _jsx(Button, { type: "submit", text: "Sign In" })] }));
};
export default LoginForm;
