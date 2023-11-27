import Home from "./Components/home";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="381004058757-e7n42a24o1pst62ch61l2sod8hniojqa.apps.googleusercontent.com">
          <Home />
        </GoogleOAuthProvider>
    
    </div>
  );
}

export default App;
