import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
import { nanoid } from "nanoid";

import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Privacy() {
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
        <title>Privacy | ESICApps</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta content="Privacy | ESICApps" name="description" />
        <meta content="ESICApps" name="author" />
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
          <div className="auth-page-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="text-center mt-sm-5 mb-4 text-white-50">
                    {/* <div>
                      <a href="index.html" className="d-inline-block auth-logo">
                        <img
                          src="assets/images/logo-light.png"
                          alt=""
                          height="20"
                        />
                      </a>
                    </div> */}
                    <p className="mt-3 fs-15 fw-medium">ESICApps</p>
                  </div>
                </div>
              </div>
              <div>
                <h1>Personal and Sensitive User Data Policy</h1>

                <p>
                  Our app, ESICApps, values the privacy and security of our
                  users. This Personal and Sensitive User Data Policy explains how we collect, use, and protect the
                  personal and sensitive data of our users.
                </p>

                <h2>Data Collection</h2>
                <p>
                  We collect personal and sensitive data in the following ways:
                </p>
                <ul>
                  <li>
                    Information provided by the user during registration and
                    account setup, such as name, email address, and telephone
                    number.
                  </li>
                  <li>
                    Information collected through the use of the app, such as
                    location data, device information, and IP address.
                  </li>
                  <li>
                    Information collected through cookies and similar
                    technologies, such as browsing history and app usage data.
                  </li>
                </ul>

                <h2>Data Use</h2>
                <p>
                  We use the personal and sensitive data collected for the
                  following purposes:
                </p>
                <ul>
                  <li>
                    To provide and improve the app`s functionality and user
                    experience.
                  </li>
                  <li>
                    To personalize the content and features of the app for the
                    user.
                  </li>
                  <li>
                    To send push notifications and updates about the app and our
                    services.
                  </li>
                  <li>
                    To contact the user for customer support or technical
                    assistance.
                  </li>
                  <li>To comply with legal and regulatory requirements.</li>
                </ul>

                <h2>Data Sharing and Disclosure</h2>
                <p>
                  We do not share or sell any personal or sensitive data to
                  third parties without the user`s explicit consent, except in
                  the following cases:
                </p>
                <ul>
                  <li>
                    With third party service providers who perform services on
                    our behalf, such as hosting, data analysis, and marketing.
                  </li>
                  <li>
                    With law enforcement, government agencies, or other third
                    parties as required by law or to protect the rights and
                    safety of our users and the public.
                  </li>
                  <li>
                    In the event of a merger, acquisition, or other corporate
                    transaction, personal and sensitive data may be transferred
                    as part of the transaction.
                  </li>
                </ul>

                <h2>Data Protection</h2>
                <p>
                  We take the protection of personal and sensitive data
                  seriously and have implemented industry-standard security
                  measures to protect the data collected by the app. This
                  includes, but not limited to:
                </p>
                <ul>
                  <li>
                    Encryption of personal and sensitive data in transit and at
                    rest
                  </li>
                  <li>Firewall and intrusion detection/prevention systems </li>
                  <li>
                    Restricting access to personal and sensitive data to
                    authorized employees and contractors who need the data to
                    perform their job functions.
                  </li>
                </ul>

                <h2>Data Retention</h2>
                <p>
                  We retain user`s personal and sensitive data for as long as
                  needed for the purpose for which it was collected and in
                  accordance with legal requirements. Users can request for
                  deletion of their data by contacting us
                </p>

                <h2>User Rights</h2>
                <ul>
                  <li>
                    Users have the right to access, correct, or delete their
                    personal and sensitive data collected by the app at any
                    time.
                  </li>
                  <li>
                    Users can contact us to exercise their rights or to file a
                    complaint or report any suspected misuse of their data.
                  </li>
                </ul>

                <h2>Changes to the Policy</h2>
                <ul>
                  <li>
                    We may update this policy from time to time to reflect
                    changes in our data collection, use, and protection
                    practices.
                  </li>
                  <li>
                    Users will be notified of any changes to the policy through
                    an in-app notification or an email.
                  </li>
                  <li>
                    Users who do not agree to the updated policy will have the
                    option to terminate their account and delete their personal
                    and sensitive data.
                  </li>
                </ul>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions or concerns about our Personal and
                  Sensitive User Data Policy, please contact us at [esicapp2022@gmail.com].
                </p>
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
