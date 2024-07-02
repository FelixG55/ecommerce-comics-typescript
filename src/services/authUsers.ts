
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main";

// Función para registrar usuario
const registerUser = async (email:string, password:string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error:any) {
    return { user: null, error: error.message }; 
  }
};

// Función para iniciar sesión
const loginUser = async (email:string, password:string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: 'Error en el inicio de sesión' };
  }
};

export { registerUser, loginUser };
