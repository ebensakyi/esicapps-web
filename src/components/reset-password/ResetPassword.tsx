"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

export default function ResetPassword() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [password, setPassword] = useState("");


  const handleResetPassword = async (e: any) => {
    e.preventDefault();
    try {



      if (phoneNumber == "") {
        return toast.error("Phone number cannot be empty");
      }

      let data = {
        phoneNumber
      };


      const response = await axios.post("/api/auth/forget-password", data);
      setPhoneNumber("");



      if (response.status == 200) {
        //redirect to reset password
        return
      }
      if (response.status == 201) {
        return toast.error(response.data.message);

      }


    } catch (error) {
      console.log(error);
    }
  };

  return (

    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <Link
                    href="/"
                    className="logo d-flex align-items-center w-auto"
                  >
                    {/* <Image src="/assets/img/logo.png"
                          width={600}
                          height={100}
                          alt={""} /> */}
                    <span className="d-none d-lg-block">ESICApps</span>
                  </Link>
                </div>
                {/* End Logo */}
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        Reset Password
                      </h5>
                      <p className="text-center small">
                        Enter your phone number
                      </p>
                    </div>
                    <form className="row g-3 needs-validation">
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">
                          Phone Number
                        </label>
                        <div className="input-group has-validation">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            #
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your phone number used "
                            required
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Please enter your phone number.
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">
                          Reset Code
                        </label>
                        <div className="input-group has-validation">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            #
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter reset code "
                            required
                            value={resetCode}
                            onChange={(e) => setResetCode(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Please enter reset code.
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">
                          New Password                            </label>
                        <div className="input-group has-validation">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            #
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter new password "
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Please enter your new password.
                          </div>
                        </div>
                      </div>


                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100"
                          type="submit"
                          onClick={(e) => handleResetPassword(e)}
                        >
                          Submit
                        </button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">
                          Don't have account?{" "}
                          <Link href="/auth/login">
                            Login
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <div className="credits">
                 
                  Designed by{" "}
                  <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

  );
}
