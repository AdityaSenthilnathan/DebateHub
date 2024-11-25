import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase";
import UpdateForm from "./components/ChangeEmail";
import ChangePassword from "./components/ChangePassword";
import DeleteUser from "./components/DeleteUser";
export default function AccountLayout() {
    const [user, loading] = useAuthState(auth);
    if (loading)
        return _jsx("div", { children: "Loading..." });
    if (!user || user === null)
        return _jsx("div", { children: "Not Found" });
    const isGoogleUser = user.providerData[0].providerId === "google.com";
    return (_jsxs("div", { className: "mt-6 gap-8 flex flex-col h-screen", children: [_jsx("h2", { className: "text-2xl font-bold leading-7  sm:truncate sm:text-3xl sm:tracking-tight", children: "My Account" }), !isGoogleUser ? (_jsxs(_Fragment, { children: [_jsx(UpdateForm, { user: user }), _jsx(ChangePassword, {})] })) : (_jsx("p", { children: "you are a google user" })), _jsx(DeleteUser, {})] }));
}
