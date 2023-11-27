import Home from "./Components/home";
import { GoogleOAuthProvider } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';

function App() {
  const responseFacebook = (response) => {
    console.log(response);
  }
   
  return (
    <div className="App">
   <FacebookLogin
     appId="1036479691023707"
     autoLoad={true}
     fields="name,email,picture"
     cssClass="my-facebook-button-class"
     icon="fa-facebook"
    //  onClick={componentClicked}
     callback={responseFacebook} />
      <GoogleOAuthProvider clientId="381004058757-e7n42a24o1pst62ch61l2sod8hniojqa.apps.googleusercontent.com">
          <Home />
        </GoogleOAuthProvider>
    
    </div>
  );
}

export default App;
