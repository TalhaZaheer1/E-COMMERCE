import SignUp from "../../components/Auth/SignUp"
import { Link, useLocation } from "react-router-dom";


function AuthPage() {
    const location = useLocation()
    const isSignUp = location.pathname.includes("signup");
    return (
        <div className="pt-[6rem] text-black px-5">
            <img src="" alt="" />
            <h1 className="text-center text-[2.5rem] tracking-tighter">
                {isSignUp ? "Create my account" : "My account"}</h1>
            <div className="flex justify-center gap-5 text-2xl">
                <Link to="/account/login" className={`text-black border-black ${isSignUp ? "text-opacity-50" : "border-b-[1px]"}`}>Login</Link>
                <Link to="/account/signup" className={`text-black border-black ${isSignUp ? "border-b-[1px]" : "text-opacity-50"}`}>Sign up</Link>
            </div>
            {isSignUp ? <SignUp /> : <div>Login</div>}
        </div>
    );
}

export default AuthPage;