import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PasswordResetRequest = ({ data }) => {
  
 

 
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Password Reset</h5>
          </div>
          <div className="card-body">
            <table
              id="fixed-header"
              className="table table-bordered dt-responsive nowrap table-striped align-middle"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>Surname</th>

                  <th>Other Names</th>
                  <th>Phone</th>
                  <th>Password</th>

                
                </tr>
              </thead>
              <tbody>
                {data.map((d) => {
                  return (
                    <tr key={d.id}>
                    <td>{d.User.surname}</td>
                      <td>{d.User.otherNames}</td>
                      <td>{d.User.phoneNumber}</td>

                      <td>{d.tempPassword}</td>
                     

                   
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetRequest;
