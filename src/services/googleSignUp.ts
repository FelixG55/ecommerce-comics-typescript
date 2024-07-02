import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider } from "../main";

const googleSignUp = () => {

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
            const token = credential.accessToken;
            return token
        }
        // The signed-in user info.
        const user = result.user;
        return user
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
      
}

export default googleSignUp