import { Component } from "react";
import '../App.css';
import UserService from '../services/UserService'
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from "react";
import login from "../img/login.avif"
var isPasswordSecure = (Password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(Password);
};
//regular exp for email
var isEmailValid = (Email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(Email);
};
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.login = this.login.bind(this);
    }
    login = (e) => {

        e.preventDefault();
        var email = document.getElementById("email").value;
        var pass = document.getElementById("pass").value;
        if (email == "") {
            toast.error("Please enter your email")
            document.getElementById("email").focus();
            return false;
        }
        if (!isEmailValid(email)) {
            toast.error("Email is not valid. Please enter valid email.")
            document.getElementById("pass").focus();
            return false;
        }
        if (pass == "") {
            toast.error("Please enter your password");
            document.getElementById("pass").focus();
            return false;
        }
        UserService.getcredentials(email).then((res) => {
            if (res.data.email == email) {
                if (atob(res.data.password) == pass) {
                    toast.success("login successful");
                    sessionStorage.setItem("user_id", res.data.user_id);
                    sessionStorage.setItem("email", res.data.email);
                    sessionStorage.setItem("role", res.data.role);

                    if (res.data.role == "JOBSEEKER") {
                        sessionStorage.setItem("first_name", res.data.jobSeeker.first_name);
                        sessionStorage.setItem("last_name", res.data.jobSeeker.last_name);
                        sessionStorage.setItem("jseeker_id", JSON.parse(res.data.jobSeeker.jseeker_id));
                        sessionStorage.setItem("location", res.data.jobSeeker.location);
                        sessionStorage.setItem("state", res.data.jobSeeker.state);
                        sessionStorage.setItem("contact", res.data.jobSeeker.contact_number);
                        sessionStorage.setItem("industry", res.data.jobSeeker.industry);
                        // window.location.reload()
                        // setTimeout(function(){ window.location.replace("/Jdashboard")}, 1500);
                        setTimeout(() => {
                            window.location.replace("/Jdashboard")
                        }, 4000);
                    } else {
                        sessionStorage.setItem("first_name", res.data.recruiter.first_name);
                        sessionStorage.setItem("last_name", res.data.recruiter.last_name);
                        sessionStorage.setItem("recruiter_id", JSON.parse(res.data.recruiter.recruiter_id));
                        sessionStorage.setItem("company_id", JSON.parse(res.data.recruiter.company.company_id));
                        sessionStorage.setItem("company_name", res.data.recruiter.company_name);
                        window.location.reload()
                        window.location.replace("/Rdashboard")
                    }
                } else {
                    toast.error("Invalid credentials! Please check email and password")
                }
            } else {
                toast.error("You are not registered with us.Pleaase register yourself")
            }
        });
    };
    render() {
        return (
            <div style={{ backgroundImage: `url(${login})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <ToastContainer />
                <center>
                <section className="h-100 h-custom" >
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-8 col-xl-6">
                                <div className="card rounded-3 " style={{width:"85%"}}>
                                    {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                                        className="w-100"
                                        alt="Sample photo" /> */}
                                    <div className="card-body p-4 p-md-5">
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">SIGN IN</h3>
                                        <form className="">
                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="email">Email ID</label>
                                                <input type="email" id="email" name="email" className="form-control rounded-pill" />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="pass">Password</label>
                                                <input type="password" id="pass" name="pass" className="form-control rounded-pill" />
                                            </div>
                                            <button type="submit" className="btn btn-success btn-lg mb-1" onClick={this.login}>Login</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section><br></br><br></br><br></br>
                </center>
               
            </div>
        );

    }
}
export default withRouter(Login);