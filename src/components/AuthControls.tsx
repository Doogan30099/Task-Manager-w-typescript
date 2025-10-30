import { useAuth0 } from "@auth0/auth0-react";

const AuthControls: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();

  if (isLoading) return <p>Loading user…</p>;

  return (
    <div style={{ marginBottom: "1rem" }}>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Login</button>
      ) : (
        <>
          <p>Welcome, {user?.name || "User"}</p>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default AuthControls;
