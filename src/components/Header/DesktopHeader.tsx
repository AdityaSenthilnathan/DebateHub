import React from "react";
import { RoutesEnum } from "../../routes";
import logo from "../../assets/logo.png";
import { DesktopHeaderProps, NavigationType } from "./types";
import MenuIcon from "./MenuIcon";
import { navigation } from "./helper"; // Ensure this import is correct and `navigation` is defined
import Toggle from "../Toggle";
import SignIn from "./SignIn";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const DesktopHeader: React.FC<DesktopHeaderProps> = ({
  setMobileMenuOpen,
  darkMode,
  setDarkMode,
}) => {
  const [user, loading] = useAuthState(auth);
  //const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>; // Optional loading state
  }

  if (!user) {
    // Display for non-authenticated users
    return (
      <nav
        className="flex items-center justify-between p-6 lg:p-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to={RoutesEnum.Home}>
            <img className="h-10 w-auto" src={logo} alt="DebateHub" />
          </Link>
        </div>
        <MenuIcon setMobileMenuOpen={setMobileMenuOpen} />
        <p>Debate Hub</p>
        {/* Login */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
          <SignIn />
        </div>
      </nav>
    );
  }

  // Display for authenticated users
  return (
    <nav
      className="flex items-center justify-between p-6 lg:p-8"
      aria-label="Global"
    >
      {/* Logo */}
      <div className="flex lg:flex-1">
        <Link to={RoutesEnum.Home}>
          <img className="h-10 w-auto" src={logo} alt=" Debate Hub" />
        </Link>
      </div>
      <MenuIcon setMobileMenuOpen={setMobileMenuOpen} />
      
      {/* Navigation links */}
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item: NavigationType) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-semibold leading-6"
          >
            {item.name}
          </a>
        ))}
      </div>
      
      {/* Account Options */}
      <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <SignIn />
      </div>
    </nav>
  );
};

export default DesktopHeader;
