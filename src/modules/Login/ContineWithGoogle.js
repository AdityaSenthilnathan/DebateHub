import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { signInUserWithGoogle } from "../../lib/firebase/Authentication/GoogleAuth";
const ContinueWithGoogle = () => {
    const navigate = useNavigate();
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "mt-10", children: _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-0 flex items-center", "aria-hidden": "true", children: _jsx("div", { className: "w-full border-t border-gray-200" }) }), _jsx("div", { className: "relative flex justify-center text-sm font-medium leading-6", children: _jsx("span", { className: "px-2 bg-white text-gray-900", children: "Or continue with" }) })] }) }), _jsx("div", { className: "mt-6 grid grid-cols-1", onClick: () => signInUserWithGoogle(navigate), children: _jsxs("a", { className: "flex w-full items-center justify-center gap-3 rounded-md bg-[#020202] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#020202] hover:bg-red-500", children: [_jsx("svg", { fill: "currentColor", className: "h-5 w-5", viewBox: "0 0 210 210", children: _jsx("path", { d: "M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40\r\n\tc-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105\r\n\tS0,162.897,0,105z" }) }), _jsx("span", { className: "text-sm font-semibold leading-6", children: "Google" })] }) })] }));
};
export default ContinueWithGoogle;
