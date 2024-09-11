import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { login as storeLogin } from "../authslice"; // Import the action

function OAuthCallback() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    const sessionKey = params.get("key");
    const sessionSecret = params.get("secret");

    if (sessionKey && sessionSecret) {
      // Create OAuth session using the key and secret
      authService
        .createOAuthSession(sessionKey, sessionSecret)
        .then(async () => {
          // Fetch the current user after creating the session
          const userData = await authService.getcurrentUser();
          if (userData) {
            // Dispatch login action to update Redux state
            dispatch(storeLogin({ userData })); // Pass userData to the action
            // Redirect to home or desired page after successful login
            navigate("/");
          }
        })
        .catch((error) => {
          console.error("Error creating OAuth session:", error);
        });
    } else {
      console.error("OAuth login failed: Missing session key or secret.");
    }
  }, [dispatch, navigate]);

  return <div>Logging you in...</div>;
}

export default OAuthCallback;
