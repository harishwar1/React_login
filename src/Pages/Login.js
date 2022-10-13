import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaUser } from "react-icons/fa";

export default function () {
  const styles = {
    border: "1px solid rgba(240, 240, 240)",
    background: "rgba(255, 255, 255)",
    marginTop: "15%",
    marginRight: '100px',
  };
  const sec = {
    background: "rgba(251, 251, 251)",
  };
  return (
    <>
      <section className="d-flex justify-content-between" style={sec}>
        <div className="right_data " style={{ width: "100%" }}>
          <div className="sign_img ">
            <img src="./img.png" style={{ maxWidth: "100%" }} alt="" />
          </div>
        </div>
        <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
          <Form style={styles}>
            <div class="form-outline mb-4">
              <h6 className="col-lg-2 mt-2 "> Username</h6>
              <input type="email" class=" col-lg-11" />
            </div>

            <div class="form-outline mb-4">
              <h6 className="col-lg-2 mt-6 ">Password</h6>
              <input  type="password" class="col-lg-11" />
            </div>

            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    
                    
                  />
                  <label class="form-check-label" for="form2Example31">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>

              <div class="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <button type="button" class="btn btn-primary btn-block col-lg-11">
              Sign in
            </button>

            <div class="text-center">
              <p>
                Don't have an account? <a href="#!">Sign Up</a>
              </p>
              
            </div>
          </Form>
        </div>
      </section>
    </>
  );
}
