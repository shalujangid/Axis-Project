import { Component } from "react";
import '../App.css';
import UserService from '../services/UserService'
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import back from "../img/registerb.avif";
function datevalidate() {   //validation for datepicker
   
}
var isPasswordSecure = (Password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(Password);
};
//regular exp for email
var isEmailValid = (Email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(Email);
};
class Jobseeker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            contact_number: "",
            email: "",
            role: "",
            password: "",
            dob: "",
            gender: "",
            location: "",
            industry: "",
            resume: "",
            cpassword: "",
            qualifications:""
        };
        this.changeFnameHandler = this.changeFnameHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changeLnameHandler = this.changeLnameHandler.bind(this);
        this.changePassHandler = this.changePassHandler.bind(this);
        this.changeDobHandler = this.changeDobHandler.bind(this);
        this.changeemailHandler = this.changeemailHandler.bind(this);
        this.changeResumeHandler = this.changeResumeHandler.bind(this);
        this.changeIndustryHandler = this.changeIndustryHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changecpassword = this.changecpassword.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.checkdate = this.checkdate.bind(this);
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
    changeDobHandler = (event) => {
        this.setState({ dob: event.target.value });
        datevalidate()
    };
    changeIndustryHandler = (event) => {
        this.setState({ industry: event.target.value });
    };
    changeLocationHandler = (event) => {
        this.setState({ location: event.target.value });
    };
    changeGenderHandler = (event) => {
        this.setState({ gender: event.target.value });
    };
    changeResumeHandler = (event) => {
        this.setState({ resume: event.target.value });
    };
    changequaHandler = (event) => {
        this.setState({ qualifications: event.target.value });
    };
    checkdate(){
        var todayDate = new Date();
        var month = todayDate.getMonth() + 1;
        var year = todayDate.getFullYear();
        var tdate = todayDate.getDate();
        if (month < 10) {
            month = "0" + month.toString();
        }
        if (tdate < 10) {
            tdate = "0" + tdate.toString();
        }
        var todayDate = year + "-" + month + "-" + tdate;
        document.getElementById("dob").setAttribute('max', todayDate);
    }
    saveUser = (e) => {
        e.preventDefault();
        var FirstName = document.getElementById("fname").value
        var LastName=document.getElementById("lname").value
        var Email=document.getElementById("email").value
        var Password=document.getElementById("pass").value
        var ConfirmPassword=document.getElementById("cpass").value
        var Mobile=document.getElementById("phone").value
        var dob=document.getElementById("dob").value
        var gender=document.getElementById("gender").value
        var industry=document.getElementById("industry").value
        var location=document.getElementById("location").value
        if (FirstName =="") {
            toast.error("Please enter your first name.");
            document.getElementById("fname").focus();
            return false;
        }
        //lastname validation
        if (LastName =="") {
            toast.error("Please enter your last name.");
            document.getElementById("lname").focus();
            return false;
        }
        if (Email== "") {
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
        if (Password =="") {
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
        if (dob == "") {
            toast.error("Please enter your dob.");
            document.getElementById("dob").focus();
            return false;
        }
        if (gender == "") {
            toast.error("Please select your gender.");
            document.getElementById("gender").focus();
            return false;
        }
        if (location == "") {
            toast.error("Please enter your location.");
            document.getElementById("location").focus();
            return false;
        }
         if (industry == "") {
            toast.error("Please enter your industry of choice.");
            document.getElementById("industry").focus();
            return false;
        }

        //validation for email
        let users = {
            email: this.state.email,
            password: btoa(this.state.password),
            role: "JOBSEEKER"
            ,
            jobSeeker: {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                gender: this.state.gender,
                contact_number: this.state.contact_number,
                location: this.state.location,
                industry: this.state.industry,
                resume: this.state.resume+" "+this.state.qualifications,
                dob: this.state.dob
            }
        };
        console.log("user => " + JSON.stringify(users));
        UserService.getcredentials(Email).then((res) => {
            if (res.data.email == Email) {
                toast.error("You are already registered with us, Please try with different email.")
            } else {
                UserService.saveNewUser(users).then((res) => {
                    toast.success("You are registered successfully")
                    setTimeout(window.location.replace("/Login"),5000) 
                });
            }});
      
    };
    render() {
        return (
            <div style={{backgroundImage:`url(${back})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
                <ToastContainer />
                <section className="h-100 h-custom" >
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-8 col-xl-6">
                                <div className="card rounded-3" >
                                    {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                                        className="w-100"
                                        alt="Sample photo" /> */}
                                    <div className="card-body p-4 p-md-5">
                                        <center> <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Register as Jobseeker</h3></center>
                                        <form>
                                            <div class="row">
                                                <div class="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="form-label" for="fname">First Name</label>
                                                        <input type="text" value={this.state.first_name} onChange={this.changeFnameHandler} id="fname" name="fname" className="form-control" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="form-label" for="lname">Last Name</label>
                                                        <input type="text" value={this.state.last_name} onChange={this.changeLnameHandler} id="lname" name="lname" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="form-label" for="email">Email</label>
                                                        <input type="text" value={this.state.email} onChange={this.changeemailHandler} id="email" name="email" className="form-control" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="form-label" for="pass">password</label>
                                                        <input type="password" value={this.state.password} onChange={this.changePassHandler} id="pass" name="pass" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6 mb-4">
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" for="pass">Confirm Password</label>
                                                        <input type="password" value={this.state.cpassword} onChange={this.changecpassword} id="cpass" name="cpass" className="form-control" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-4">
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" for="phone">Contact Number</label>
                                                        <input type="text" id="phone" value={this.state.contact_number} onChange={this.changeContactHandler} name="phone" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div class="col-md-6 mb-4">
                                                        <div className="form-outline datepicker">
                                                            <label for="exampleDatepicker1" className="form-label">DOB</label>
                                                            <input type="date" onclick={()=>this.checkdate} value={this.state.dob} onChange={this.changeDobHandler} className="form-control" id="dob" name="dob" />
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline datepicker">
                                                    <label for="exampleDatepicker1" className="form-label">Gender&nbsp;</label>
                                                        <select className="select dropdown btn btn-outline-dark" id="gender" value={this.state.gender} onChange={this.changeGenderHandler}>
                                                            <option value=""  selected>-select-</option>
                                                            <option   value="FEMALE">Female</option>
                                                            <option   value="MALE">Male</option>
                                                            <option   value="OTHER">Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="form-label" for="location">Location</label>
                                                        <input type="text" value={this.state.location} onChange={this.changeLocationHandler} id="location" name="location" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="form-label" for="industry">Industry</label>
                                                        <input type="text" id="industry" value={this.state.industry} onChange={this.changeIndustryHandler} name="industry" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <center><h6>Short Resume</h6></center>
                                            <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                                                <label className="form-label" for="resume">Skills</label>
                                                <input type="text" value={this.state.resume} onChange={this.changeResumeHandler} className="form-control" id="resume" placeholder="skills" />
                                            </div>
                                            <div className="col-sm">
                                                <div className="form-outline ">
                                                    <label class="form-label" for="qua">Qualifications&nbsp; &nbsp;</label>
                                                    <select className="select dropdown btn btn-outline-dark" id="qua" value={this.state.qualifications} onChange={this.changequaHandler} >
                                                        <option value="" selected>Select</option>
                                                        <option value="ANY STREAM">ANY STREAM</option>
                                                        <option value="BTECH CSE">BTECH CSE</option>
                                                        <option value="BTECH IT">BTECH IT</option>
                                                        <option value="BTECH EEE">BTECH EEE</option>
                                                        <option value="BSC">BSC</option>
                                                        <option value="MSC">MSC</option>
                                                        <option value="BA">BA</option>
                                                        <option value="BCOM">BCOM</option>
                                                        <option value="MCOM">MCOM</option>
                                                        <option value="MBA">MBA</option>
                                                        <option value="PHD">PHD</option>
                                                    </select>
                                                </div>
                                            </div>
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
export default withRouter(Jobseeker);