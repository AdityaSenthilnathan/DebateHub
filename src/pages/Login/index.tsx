import PageLayout from "../../components/PageLayout";
import loginBg from "../../assets/52718813992_0b3a9db2bc_o-1-900x454.jpg";
import LogoSection from "../../modules/Login/LogoSection";
import LoginForm from "../../modules/Login/LoginForm";
import ContinueWithGoogle from "../../modules/Login/ContineWithGoogle";

const Login = () => {
  return (
    <PageLayout>
      <div className="relative flex items-center justify-center min-h-screen">
        {/* Background image container */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-md -z-1"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${loginBg})`
          }}
        ></div>

        {/* Foreground content */}
        <div className="relative bg-white bg-opacity-70 rounded-lg shadow-lg p-6 w-full max-w-sm lg:w-96 z-10">
          <LogoSection />
          <LoginForm />
          <ContinueWithGoogle />
        </div>
      </div>
    </PageLayout>
  );
};

export default Login;
