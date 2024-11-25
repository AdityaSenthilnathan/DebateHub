import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RoutesEnum } from "../../routes";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase";
import { signOutUser } from "../../lib/firebase/Authentication/SignOut";
const SignIn = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    if (loading) {
        return _jsx("div", { children: "Loading..." });
    }
    if (!user || user === null) {
        return (_jsxs(Link, { to: RoutesEnum.Login, className: "text-sm font-semibold leading-6", children: ["Log in ", _jsx("span", { "aria-hidden": "true", children: "\u2192" })] }));
    }
    return (_jsxs("div", { className: "flex gap-4 flex-col lg:flex-row", children: [_jsxs(Link, { to: RoutesEnum.Account, className: "text-sm font-semibold leading-6", children: ["My Account ", _jsx("span", { "aria-hidden": "true", children: "\u2192" })] }), _jsx("p", { onClick: () => signOutUser(navigate), className: "text-sm font-semibold leading-6 cursor-pointer text-red-600", children: "Sign Out" })] }));
};
export default SignIn;
