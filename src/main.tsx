
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from "react-dom/client"
import React from "react"
import { AppProvider } from './Context/AppContext.tsx'
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ckkyhqw0faz37rkg.us.auth0.com"
      clientId="26IRU9BXvPqzPZMCSLpTGjff6XTI68PM"
      authorizationParams={{ redirect_uri: window.location.origin }}
      cacheLocation="localstorage"
      useRefreshTokens={true}
    >
      <AppProvider>
      
          <App />
        
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>
);
