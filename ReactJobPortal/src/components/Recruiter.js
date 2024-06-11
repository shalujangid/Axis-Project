import { Component } from "react";
import '../App.css';
import UserService from '../services/UserService'
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import back from "../img/registerb.avif";
var isPasswordSecure = (Password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(Password);
};
//regular exp for email
var isEmailValid = (Email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(Email);
};
class Recruiter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            contact_number: "",
            email: "",
            role: "",
            password: "",
            company_name: "",
            company_desc: "",
            website_url: "",
            cpassword: ""
        };
        this.changeFnameHandler = this.changeFnameHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changeLnameHandler = this.changeLnameHandler.bind(this);
        this.changePassHandler = this.changePassHandler.bind(this);
        this.changeemailHandler = this.changeemailHandler.bind(this);
        this.changeCompanyNameHandler = this.changeCompanyNameHandler.bind(this);
        this.changeCompanydescHandler = this.changeCompanydescHandler.bind(this);
        this.changeCompanyurlHandler = this.changeCompanyurlHandler.bind(this);
        this.changecpassword = this.changecpassword.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }
    componentDidMount() {

    }
    changeFnameHandler = (event) => {
        this.setState({ first_name: event.target.value });
    };

    changeLnameHandler = (event) => {
        this.setState({ last_name: event.target.value });
    };

    changeemailHandler = (event) => {
        this.setState({ email: event.target.value });
    };
    changePassHandler = (event) => {
        this.setState({ password: event.target.value });
    };
    changecpassword = (event) => {
        this.setState({ cpassword: event.target.value });
    };
    changeContactHandler = (event) => {
        this.setState({ contact_number: event.target.value });
    };
    changeCompanyNameHandler = (event) => {
        this.setState({ company_name: event.target.value });
    };
    changeCompanydescHandler = (event) => {
        this.setState({ company_desc: event.target.value });
    };
    changeCompanyurlHandler = (event) => {
        this.setState({ website_url: event.target.value });
    };
    saveUser = (e) => {
        e.preventDefault();
        var FirstName = document.getElementById("fname").value
        var LastName = document.getElementById("lname").value
        var Email = document.getElementById("email").value
        var Password = document.getElementById("pass").value
        var ConfirmPassword = document.getElementById("cpass").value
        var Mobile = document.getElementById("phone").value
        var cname = document.getElementById("company_name").value
        var cdesc = document.getElementById("company_desc").value
        var url = document.getElementById("url").value
        if (FirstName == "") {
            toast.error("Please enter your first name.");
            document.getElementById("fname").focus();
            return false;
        }
        //lastname validation
        if (LastName == "") {
            toast.error("Please enter your last name.");
            document.getElementById("lname").focus();
            return false;
        }
        if (Email == "") {
            toast.error(" Please enter your email.");
            document.getElementById("email").focus();
            return false;
        }
        if (!isEmailValid(Email)) {
            toast.error("Email is not valid. Please enter valid email.")
            document.getElementById("email").focus();
            return false;
        }
        //password validation
        if (Password == "") {
            toast.error("Please enter password.")
            document.getElementById("pass").focus();
            return false;
        }
        if (!isPasswordSecure(Password)) {
            toast.error("Password must has ATLEAST\n 8 characters,\n 1 lowercase character,\n 1 uppercase characters,\n 1 number,\n 1 special character in (!@#$%^&*)")
            document.getElementById("pass").focus();
            return false;
        }
        //validation for confirm password
        if (ConfirmPassword == "") {
            toast.error("Please confirm password.");
            document.getElementById("cpass").focus();
            return false;
        }
        if (Password != ConfirmPassword) {
            toast.error("Password did not match. Please enter correct password.")
            document.getElementById("cpass").focus();
            return false;
        }
        if (isNaN(Mobile)) {
            toast.error("Please enter digits only.");
            document.getElementById("phone").focus();
            return false;
        }
        else if (Mobile == "") {
            toast.error("Please enter mobile number.")
            document.getElementById("phone").focus();
            return false;
        }
        else if ((Mobile).length != 10) {
            toast.error("Please enter correct mobile number.")
            document.getElementById("phone").focus();
            return false;
        }
        if (cname == "") {
            toast.error("Please enter company name.");
            document.getElementById("company_name").focus();
            return false;
        }
        if (cdesc == "") {
            toast.error("Please enter company description.");
            document.getElementById("company_desc").focus();
            return false;
        }
        if (url == "") {
            toast.error("Please enter your website url.");
            document.getElementById("url").focus();
            return false;
        }
        let users = {
            email: this.state.email,
            password: btoa(this.state.password),
            role: "RECRUITER",
            recruiter: {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                contact_number: this.state.contact_number,
                company: {
                    company_name: this.state.company_name,
                    company_desc: this.state.company_desc,
                    website_url: this.state.website_url,
                }

            }
        };
        console.log("user => " + JSON.stringify(users));
        UserService.getcredentials(Email).then((res) => {
            if (res.data.email == Email) {
                toast.error("You are already registered with us, Please try with different email.")
            } else {
                UserService.saveNewUser(users).then((res) => {
                    // alert("You are registered successfully");
                    toast.success("You are registered successfully")
                    setTimeout(window.location.replace("/Login"), 5000)
                });
            }});
     
    };
    render() {
        return (
            <div style={{ backgroundImage: `url(${back})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <ToastContainer />
                <section className="h-100 h-custom" >
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-8 col-xl-6">
                                <div className="card rounded-3">
                                    <div className="card-body p-4 p-md-5">
                                        <center><h3 className="mb-4 pb-2 pb-md-0 ">Register as jobseeker</h3> </center>
                                        <form className="px-md-2">
                                            <div className="row">
                                                <div className="col-sm">
                                                    <div className="form-outline">
                                                        <label className="form-label" for="fname">First Name</label>
                                                        <input type="text" value={this.state.first_name} onChange={this.changeFnameHandler} id="fname" name="fname" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-sm">
                                                    <div className="form-outline ">
                                                        <label className="form-label" for="lname">Last Name</label>
                                                        <input type="text" value={this.state.last_name} onChange={this.changeLnameHandler} id="lname" name="lname" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-sm">
                                                    <div className="form-outline ">
                                                        <label className="form-label" for="email">Email</label>
                                                        <input type="text" value={this.state.email} onChange={this.changeemailHandler} id="email" name="email" className="form-control" />
                                                    </div>
                                                </div>
                                            </div><br></br>
                                            <div className="row">
                                                <div className="col-sm">
                                                    <div className="form-outline ">
                                                        <label className="form-label" for="pass">Password</label>
                                                        <input type="password" value={this.state.password} onChange={this.changePassHandler} id="pass" name="pass" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-sm">
                                                    <div className="form-outline">
                                                        <label className="form-label" for="pass">Confirm Password</label>
                                                        <input type="password" value={this.state.cpassword} onChange={this.changecpassword} id="cpass" name="cpass" className="form-control" />
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <br></br>
                                            <div className="row">
                                                <div className="col-sm">

                                                    <div className="form-outline form-group">
                                                        <label className="form-label" for="company_name">Company Name</label>
                                                        <input type="text" value={this.state.company_name} onChange={this.changeCompanyNameHandler} id="company_name" name="company_name" className="form-control" />
                                                    </div>
                                                </div>
                                              
                                                <div className="col-sm">
                                                    <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                                                        <label className="form-label" for="url">Website url</label>
                                                        <input type="text" value={this.state.website_url} onChange={this.changeCompanyurlHandler} id="url" name="url" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                                    <div className="form-outline ">
                                                        <label className="form-label" for="phone">Contact Number</label>
                                                        <input type="text" id="phone" value={this.state.contact_number} onChange={this.changeContactHandler} name="phone" className="form-control" />
                                                    </div>
                                                </div>
                                                <br></br>
                                                    <div className="form-outline ">
                                                        <div class="form-group">
                                                            <label for="company_desc">Company Description</label>
                                                            <textarea class="form-control" id="company_desc" name="company_desc" rows="3" value={this.state.company_desc} onChange={this.changeCompanydescHandler}></textarea>
                                                        </div>
                                                    </div>
                                                    <br></br>
                                            <button type="submit" className="btn btn-success btn-lg mb-1" onClick={this.saveUser}>Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default withRouter(Recruiter);