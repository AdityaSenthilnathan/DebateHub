import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PageLayout from "../../components/PageLayout";
import ContinueWithGoogle from "../../modules/Login/ContineWithGoogle";
import LogoSection from "../../modules/Login/LogoSection";
import loginBg from "../../assets/login-bg.jpg";
import RegisterForm from "../../modules/Register/RegisterForm";
const Register = () => {
    return (_jsx(PageLayout, { children: _jsxs("div", { className: "flex flex-1 min-h-screen", children: [_jsx("div", { className: "flex flex-1 flex-col justify-center px-4 py-16 sm:px-6 lg:flex-none xl:px-24", children: _jsxs("div", { className: "mx-auto w-full max-w-sm lg:w-96", children: [_jsx(LogoSection, { isRegisterPage: true }), _jsx(RegisterForm, {}), _jsx(ContinueWithGoogle, {})] }) }), _jsx("div", { className: "relative hidden w-0 flex-1 lg:block", children: _jsx("img", { src: loginBg, alt: "DebateHub", className: "absolute inset-0 h-full w-full object-cover" }) })] }) }));
};
export default Register;
