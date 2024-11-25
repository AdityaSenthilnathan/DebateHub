import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PageLayout from "../../components/PageLayout";
import loginBg from "../../assets/52718813992_0b3a9db2bc_o-1-900x454.jpg";
import LogoSection from "../../modules/Login/LogoSection";
import LoginForm from "../../modules/Login/LoginForm";
import ContinueWithGoogle from "../../modules/Login/ContineWithGoogle";
const Login = () => {
    return (_jsx(PageLayout, { children: _jsxs("div", { className: "relative flex items-center justify-center min-h-screen", children: [_jsx("div", { className: "absolute inset-0 bg-cover bg-center filter blur-md -z-1", style: {
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${loginBg})`
                    } }), _jsxs("div", { className: "relative bg-white bg-opacity-70 rounded-lg shadow-lg p-6 w-full max-w-sm lg:w-96 z-10", children: [_jsx(LogoSection, {}), _jsx(LoginForm, {}), _jsx(ContinueWithGoogle, {})] })] }) }));
};
export default Login;
