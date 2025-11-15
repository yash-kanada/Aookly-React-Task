import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUp() {

  const navigate = useNavigate()
  const [btnDis, setBtnDis] = useState(false)
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {

    if (data.password !== data.conf_password) {
      toast.error("Passwords do not match. Please try again.")
      return
    }
    try {
      setBtnDis(true)
      localStorage.setItem("user", JSON.stringify(data))
      toast.success("Registration successful! You can now log in.", { autoClose: 1500 })
      navigate('/')
    } catch (error) {
      toast.error(error.message)
    } finally {
      setBtnDis(false)
    }

  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">

      <div className="card shadow p-4 text-center col-10 col-sm-8 col-md-7 col-lg-4" >

        <div className="mb-3">
          <img
            src="/images/banaslogo.png"
            alt="banas-dairy-logo"
            className="img-fluid"
            width={100}
          />
        </div>

        <h4 className="fw-bold mb-0">Welcome</h4>
        <h4 className="fw-bold mb-4">Banas CANDO</h4>

        <form action="" >

          <div className="mb-3" fullName>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              {...register("fullName", { required: { value: true, message: "field is required" } })}
            />
            {errors.fullName && <small className="text-danger">{errors.fullName.message}</small>}
          </div>

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


          <div className="mb-4">
            <div className='position-relative'>
              <input
                type={show1 ? 'text' : 'password'}
                className="form-control"
                placeholder="Confirm Password"
                {...register("conf_password", {
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
                className={`bi ${show1 ? 'bi-eye-slash' : 'bi-eye'} position-absolute top-50 end-0 translate-middle-y me-3 crsptr`}
                onClick={() => setShow1(!show1)}>
              </i>
            </div>

            {errors.password &&
              <small className="text-danger">{errors.conf_password.message}</small>
            }
          </div>

          <button className="btn btn-primary w-100 mb-3 rounded border-0 fw-medium" style={{ background: "linear-gradient(90deg, #07C3FD 0%, #A400FF 100%)" }} disabled={btnDis} onClick={handleSubmit(onSubmit)}>
            {btnDis ? (<>
              Sing Up...
              <span className="spinner-border spinner-border-sm ms-3" aria-hidden="true"></span>
            </>) : ("Sing Up")}
          </button>
        </form>

        <div className="text-muted" style={{ cursor: "pointer" }} onClick={() => navigate('/')}>
          Already have an account?
        </div>

        <div className="mb-2 mt-4" style={{ fontSize: "10px" }}>
          VERSION 24.11.14 Date:14-Nov-2024
        </div>

        <div className="text-muted" style={{ fontSize: "10px" }}>
          Developed by Delta Infosoft Pvt Ltd. Ahmedabad.
        </div>
      </div>

    </div>
  );
}

export default SignUp;
