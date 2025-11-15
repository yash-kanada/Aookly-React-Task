import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {

  const navigate = useNavigate()
  const [btnDis, setBtnDis] = useState(false)
  const [show, setShow] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    const savedUser = JSON.parse(localStorage.getItem("user"))
    try {
      setBtnDis(true)
      if (savedUser && savedUser.email === data.email && savedUser.password === data.password) {
        toast.success("Login successful! Redirecting to your profile...", { autoClose: 1500 });
        navigate('/home')
      } else {
        toast.error("Invalid credentials. Please check your email or password.")
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setBtnDis(false)
    }
  }
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">

      <div className="card shadow p-4 text-center col-10 col-sm-8 col-md-7 col-lg-4" >

        <div className="mb-3"><img src="/images/banaslogo.png " alt="banas-dairy-logo" className="img-fluid" width={100} /></div>

        <h4 className="fw-bold mb-0">Welcome</h4>
        <h4 className="fw-bold mb-4">Banas CANDO</h4>


        <form >
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              {...register("email", { required: { value: true, message: "field is required" } })}
            />
            {errors.email && <small className="text-danger">{errors.email.message}</small>}
          </div>

          <div className="mb-3">
            <div className='position-relative'>
              <input
                 type={show ? 'text' : 'password'}
                className="form-control"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                    message:
                      "Must contain 8+ chars, uppercase, lowercase, number & special symbol",
                  },
                })}
              />
              <i
                className={`bi ${show ? 'bi-eye-slash' : 'bi-eye'} position-absolute top-50 end-0 translate-middle-y me-3 crsptr`}
                onClick={() => setShow(!show)}>
              </i>

            </div>

            {errors.password &&
              <small className="text-danger">{errors.password.message}</small>
            }
          </div>


          <div className="text-muted mb-2">Forgot Password?</div>

          <button className="btn btn-primary w-100 border-0 rounded mb-2" style={{ background: "linear-gradient(90deg, #07C3FD 0%, #A400FF 100%)" }} disabled={btnDis} onClick={handleSubmit(onSubmit)}>
            {btnDis ? (<>
              Log in...
              <span className="spinner-border spinner-border-sm ms-3" aria-hidden="true"></span>
            </>) : ("Login")}</button>
        </form>

        <div className="mb-3 text-muted"> Don’t have an account? <span className="text-primary crsptr" onClick={() => navigate('/sing-up')}>Sing up</span></div>

        <div className="mb-2" style={{ fontSize: "10px" }}>VERSION 24.11.14 Date:14-Nov-2024</div>
        <div className="text-muted " style={{ fontSize: "10px" }}>Developed by Delta Infosoft Pvt Ltd. Ahmedabad. </div>

      </div>

    </div>
  );
}

export default Login;
