import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../main";
const Register = () => {

  

  return (
    <section className="container-fluid bg-warning">
      <form className="m-auto text-center pt-4">
            <div className="mb-2 w-50 m-auto">
              <label className="form-label">Correo</label>
              <input
                type="email"
                className="form-control w-50 m-auto bg-danger"
                id="exampleInputEmail1"
              />
            </div>
            <div className="mb-2 w-50 m-auto">
              <label className="form-label">Contraseña</label>
              <input
                type="text"
                className="form-control w-50 m-auto bg-danger"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-danger mb-4 mt-3 " >
              Enviar
            </button>
          </form>
    </section>
  );
};

export default Register;
