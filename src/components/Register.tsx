
import { SubmitHandler, useForm} from "react-hook-form" 
import { registerUser } from "../services/authUsers";
import { type FormValues } from "../types";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Register = () => {

    const {register, handleSubmit} = useForm<FormValues>()
    const [errorMessageEmail, setErrorMessageEmail] = useState('')
    const [errorMessagePassword, setErrorMessagePassword] = useState('')
    const [user, setUser] = useState(false);

    const handleFormSubmit:SubmitHandler<FormValues> = async (values) =>{
      const email = values.email
      const password = values.password
      const {user, error} = await registerUser(email, password)
      console.log(error);
      
      if (user) {
        setUser(true)
      }

      if (error == 'Firebase: Error (auth/invalid-email).') {
        const message = 'Proporcione un correo valido'
        setErrorMessageEmail(message)
      }else if (error == 'Firebase: Error (auth/email-already-in-use).') {
        const message = 'El correo ya se encuentra en uso'
        setErrorMessageEmail(message)
      }else(
        setErrorMessageEmail('')
      )
      if (error == 'Firebase: Error (auth/missing-password).') {
        const message = 'Debe introducir una contraseña'
        setErrorMessagePassword(message)
      }else if (error == 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
        const message = 'La contraseña debe tener al menos 6 caracteres'
        setErrorMessagePassword(message)
      }else(
        setErrorMessagePassword('')
      )
    }
    if(user){
      return <Navigate to ='/login'/>
    } 
      
      
      
  return (
    <section className="container-fluid bg-warning">
      <form className="m-auto text-center pt-4" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="mb-2 w-50 m-auto">
              <label className="form-label">Correo</label>
              <input
                {...register('email')}
                type="email"
                className="form-control w-50 m-auto bg-danger"
                id="exampleInputEmail1"
              />
            </div>
            <div className="form-text text-danger mb-2">{errorMessageEmail}</div>
            <div className="mb-2 w-50 m-auto">
              <label className="form-label">Contraseña</label>
              <input
                {...register('password')}
                type="password"
                className="form-control w-50 m-auto bg-danger"
                id="exampleInputPassword1"
              />
            </div>
            <div className="form-text text-danger mb-2">{errorMessagePassword}</div>
            <button type="submit" className="btn btn-danger mb-4 mt-3 " >
              Enviar
            </button>
          </form>
    </section>
  );
};

export default Register;
