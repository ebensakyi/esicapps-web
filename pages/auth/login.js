import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
import { nanoid } from "nanoid";

import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const router = useRouter();

  const login = async (e) => {
    try {
      e.preventDefault();
      let data = {
        email,
        password,
      };
      const response = await axios.post(`/api/v1/auth/login`, data);

      if (response.status != 200) {
        return toast.error(response.data.message);
      }
      if (response.status == 200) {
        Cookies.set("lvut1", nanoid(50) + "??" + response.data.level, {
          expires: 3 * 60 * 60,
        });
        Cookies.set("lvut2", response.data.userType + "??" + nanoid(50), {
          expires: 3 * 60 * 60,
        });

        Cookies.set("fullName", response.data.user.surname + " " + response.data.user.otherNames, {
          expires: 3 * 60 * 60,
        });
        Cookies.set("userType",  response.data.user.UserType.name, {
          expires: 3 * 60 * 60,
        });
        Cookies.set("designation",  response.data.user.designation, {
          expires: 3 * 60 * 60,
        });
        return router.replace("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }

    // router.replace(router.asPath)
    // router.push("/");
  };

  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <html
      lang="en"
      data-layout="vertical"
      data-topbar="light"
      data-sidebar="dark"
      data-sidebar-size="lg"
      data-sidebar-image="none"
    >
      <head>
        <meta charset="utf-8" />
        <title>Sign In | ESICApps</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta content="Sign In | ESICApps" name="description" />
        <meta content="Themesbrand" name="author" />
        <link rel="shortcut icon" href="assets/images/favicon.ico" />

        <script src="assets/js/layout.js"></script>
        <link
          href="assets/css/bootstrap.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="assets/css/icons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="assets/css/app.min.css" rel="stylesheet" type="text/css" />
        <link
          href="assets/css/custom.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>

      <body>
        <div className="auth-page-wrapper pt-5">
          <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
            <div className="bg-overlay"></div>

            <div className="shape">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1440 120"
              >
                <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
              </svg> */}
            </div>
          </div>

          <div className="auth-page-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="text-center mt-sm-5 mb-4 text-white-50">
                    <div>
                      <a href="index.html" className="d-inline-block auth-logo">
                        <img
                          src="assets/images/logo-light.png"
                          alt=""
                          height="20"
                        />
                      </a>
                    </div>
                    <p className="mt-3 fs-15 fw-medium">ESICApps</p>
                  </div>
                </div>
              </div>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6 col-xl-5">
                  <div className="card mt-4">
                    <div className="card-body p-4">
                      <div className="text-center mt-2">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p className="text-muted">
                          Sign in to continue to ESICApps.
                        </p>
                      </div>
                      <div className="p-2 mt-4">
                        <form action="/">
                          <div className="mb-3">
                            <label htmlFor="phone" className="form-label">
                              Email
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="phone"
                              placeholder="Enter email"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>

                          <div className="mb-3">
                            <div className="float-end">
                              <a
                                href="auth-pass-reset-basic.html"
                                className="text-muted"
                              >
                                Forgot password?
                              </a>
                            </div>
                            <label
                              className="form-label"
                              htmlFor="password-input"
                            >
                              Password
                            </label>
                            <div className="position-relative auth-pass-inputgroup mb-3">
                              <input
                                type="password"
                                className="form-control pe-5"
                                placeholder="Enter password"
                                id="password-input"
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <button
                                className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                                type="button"
                                id="password-addon"
                              >
                                <i className="ri-eye-fill align-middle"></i>
                              </button>
                            </div>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="auth-remember-check"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="auth-remember-check"
                            >
                              Remember me
                            </label>
                          </div>

                          <div className="mt-4">
                            <button
                              className="btn btn-success w-100"
                              onClick={(e) => {
                                login(e);
                              }}
                            >
                              Sign In
                            </button>
                          </div>

                          {/* <div className="mt-4 text-center">
                            <div className="signin-other-title">
                              <h5 className="fs-13 mb-4 title">Sign In with</h5>
                            </div>
                            <div>
                              <button
                                type="button"
                                className="btn btn-primary btn-icon waves-effect waves-light"
                              >
                                <i className="ri-facebook-fill fs-16"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger btn-icon waves-effect waves-light"
                              >
                                <i className="ri-google-fill fs-16"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-dark btn-icon waves-effect waves-light"
                              >
                                <i className="ri-github-fill fs-16"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-info btn-icon waves-effect waves-light"
                              >
                                <i className="ri-twitter-fill fs-16"></i>
                              </button>
                            </div>
                          </div> */}
                        </form>
                      </div>
                    </div>
                  </div>

                  {/* <div className="mt-4 text-center">
                    <p className="mb-0">
                      Don't have an account ?{" "}
                      <a
                        href="auth-signup-basic.html"
                        className="fw-semibold text-primary text-decoration-underline"
                      >
                        {" "}
                        Signup{" "}
                      </a>{" "}
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <footer className="footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="text-center">
                    <p className="mb-0 text-muted">
                      &copy;
                      {`${getYear()} `}
                      ESICApps
                      {/* . Crafted with{" "}
                      <i className="mdi mdi-heart text-danger"></i> by Expedient
                      Systems */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

        <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/libs/simplebar/simplebar.min.js"></script>
        <script src="assets/libs/node-waves/waves.min.js"></script>
        <script src="assets/libs/feather-icons/feather.min.js"></script>
        <script src="assets/js/pages/plugins/lord-icon-2.1.0.js"></script>
        <script src="assets/js/plugins.js"></script>

        <script src="assets/libs/particles.js/particles.js"></script>
        <script src="assets/js/pages/particles.app.js"></script>
        <script src="assets/js/pages/password-addon.init.js"></script>
      </body>
    </html>
  );
}
