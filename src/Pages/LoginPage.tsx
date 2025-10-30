import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage: React.FC = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard", { replace: true });
        }
    }, [isAuthenticated, navigate]);

    return (
        <div style={{padding: "2rem", textAlign: "center"}}>
            <h1>Welcome to the Task Manager</h1>
            <p>Please log in to continue.</p>
            <button
                onClick={() =>
                    loginWithRedirect({
                        authorizationParams: { prompt: "select_account" },
                    })
                }
                style={{
                    padding: "0.6rem 1.2rem",
                    borderRadius: "0.5rem",
                    border: "none",
                    backgroundColor: "#0004ffff",
                    color: "white",
                    cursor: "pointer",
                }}
            >
                Log in with Auth0
            </button>
        </div>
    );
}

export default LoginPage;