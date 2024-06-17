// Login.tsx

import { GoogleLogin, GoogleLogout } from "react-google-login";
import { auth, provider } from "../main";
import { signInWithCredential, signOut } from "firebase/auth";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  return (
    <section className="container-fluid bg-warning">
      <div className="row m-auto pt-4" style={{ width: "200px" }}>
        <GoogleLogin
          className="justify-content-center"
          clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
          buttonText="Login with Google"
          // onSuccess={handleLogin}
          // onFailure={handleFailure}
          cookiePolicy={"single_host_origin"}
        />
        <div className="d-flex">
          <hr className="border border-black col-5" />
          <p className="col-2 text-center m-auto">o</p>
          <hr className="border border-black col-5" />
        </div>
      </div>
      <form className="m-auto text-center mt-5">
            <div className="mb-2 ">
              <label className="form-label">Correo</label>
              <input
                type="text"
                className="form-control w-50 m-auto bg-danger"
                id="exampleInputEmail1"
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control w-50 m-auto bg-danger"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-danger mb-4" >
              Generar orden !
            </button>
          </form>
    </section>
  );
};

export default Login;
