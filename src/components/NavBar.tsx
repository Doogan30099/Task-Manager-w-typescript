import { useAuth0 } from "@auth0/auth0-react";
import type React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const { user, logout, isAuthenticated, isLoading, loginWithRedirect } =
    useAuth0();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container-fluid">
        <Link to="/dashboard" className="navbar-brand fw-bold">
          Jeeves Task Assistant
        </Link>

        <div className="d-flex align-items-center ms-auto">
          {isLoading ? (
            <span className="text-muted small">Loading…</span>
          ) : isAuthenticated ? (
            <>
              <span className="me-3 text-muted small">
                Welcome, {user?.name ?? "User"}
              </span>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() =>
                  logout({
                    logoutParams: {
                      returnTo: `${window.location.origin}/login`,
                      federated: true,
                    },
                  })
                }
              >
                Log Out
              </button>
            </>
          ) : (
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() =>
                loginWithRedirect({
                  authorizationParams: { prompt: "select_account" },
                })
              }
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
