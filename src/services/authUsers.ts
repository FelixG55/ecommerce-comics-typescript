
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main";

// Función para registrar usuario
const registerUser = async (email:string, password:string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('Usuario registrado:', userCredential.user);
  } catch (error) {
    console.error('Error en el registro:', error);
  }
};

// Función para iniciar sesión
const loginUser = async (email:string, password:string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('Usuario autenticado:', userCredential.user);
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
  }
};

export { registerUser, loginUser };
