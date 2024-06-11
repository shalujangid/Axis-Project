import { Component } from "react";
import "../App.css";
import { withRouter } from "react-router-dom";
import UserService from "../services/UserService";
import { ToastContainer, toast } from 'react-toastify';
import apply2 from "../img/apply2.jpg"
class UpdateJobPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobpostprefilled: [],
            jobpost: [],
            jid:'',
            state_name: "",
            title: "",
            description: "",
            responsibilties: "",
            qualifications: "",
            location: "",
            experience: "",
            industry: "",
            salary: "",
            company_id: ""
        };
        this.changestateHandler = this.changestateHandler.bind(this);
        this.changetitleHandler = this.changetitleHandler.bind(this);
        this.changedescHandler = this.changedescHandler.bind(this);
        this.changeresHandler = this.changeresHandler.bind(this);
        this.changequaHandler = this.changequaHandler.bind(this);
        this.changelocHandler = this.changelocHandler.bind(this);
        this.changeexpHandler = this.changeexpHandler.bind(this);
        this.changeindusHandler = this.changeindusHandler.bind(this);
        this.changesalaryHandler = this.changesalaryHandler.bind(this);
        this.update = this.update.bind(this);
    }
    componentDidMount() {
        var jid = this.props.location.state.job_id
        UserService.getjobpost_byid(jid).then((res) => {
            this.setState({
                jobpostprefilled: res.data,
            });
            this.setState({ state_name: jid });
            this.setState({ state_name: this.state.jobpostprefilled.state });
            this.setState({ title: this.state.jobpostprefilled.title });
            this.setState({ description: this.state.jobpostprefilled.description });
            this.setState({ responsibilties: this.state.jobpostprefilled.responsibilties });
            this.setState({ qualifications: this.state.jobpostprefilled.qualifications });
            this.setState({ location: this.state.jobpostprefilled.location });
            this.setState({ experience: this.state.jobpostprefilled.experience });
            this.setState({ industry: this.state.jobpostprefilled.industry });
            this.setState({ salary: this.state.jobpostprefilled.salary });
        });
        console.log(this.state.state_name)
    }

    changestateHandler = (event) => {
        this.setState({ state_name: event.target.value });
    };

    changetitleHandler = (event) => {
        this.setState({ title: event.target.value });
    };

    changedescHandler = (event) => {
        this.setState({ description: event.target.value });
    };
    changeresHandler = (event) => {
        this.setState({ responsibilties: event.target.value });
    };
    changequaHandler = (event) => {
        this.setState({ qualifications: event.target.value });
    };
    changelocHandler = (event) => {
        this.setState({ location: event.target.value });
    };
    changeexpHandler = (event) => {
        this.setState({ experience: event.target.value });
    };
    changeindusHandler = (event) => {
        this.setState({ industry: event.target.value });
    };
    changesalaryHandler = (event) => {
        this.setState({ salary: event.target.value });
    };

    update = (e) => {
        e.preventDefault()
        var title = document.getElementById("title").value
        var response = document.getElementById("response").value
        var state = document.getElementById("state").value
        var industry = document.getElementById("industry").value
        var location = document.getElementById("location").value
        var salary = document.getElementById("salary").value
        var exp = document.getElementById("exp").value
        var qua = document.getElementById("qua").value
        var desc = document.getElementById("desc").value
        if (title == "") {
            toast.error("Please enter job title.");
            document.getElementById("title").focus();
            return false;
        }
        if (response == "") {
            toast.error("Please enter responsibilites.");
            document.getElementById("response").focus();
            return false;
        }
        if (state == "") {
            toast.error(" Please enter state for this job opening.");
            document.getElementById("state").focus();
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
        if (qua == "") {
            toast.error("Please enter qualification needed for this job opening.");
            document.getElementById("qua").focus();
            return false;
        }

        if (isNaN(salary)) {
            toast.error("Please enter salary in digits only.");
            document.getElementById("salary").focus();
            return false;
        }
        else if (salary == "") {
            toast.error("Please enter salary.")
            document.getElementById("salary").focus();
            return false;
        }
        if (exp == "") {
            toast.error("Please share your experience.");
            document.getElementById("exp").focus();
            return false;
        }
        if (desc == "") {
            toast.error("Please enter job description.");
            document.getElementById("desc").focus();
            return false;
        }
        var companyid = sessionStorage.getItem("company_id");
        var recruiter_id = sessionStorage.getItem("recruiter_id");

        e.preventDefault();
        let post = {
            jobId:this.state.jid,
            state: this.state.state_name,
            title: this.state.title,
            description: this.state.description,
            responsibilties: this.state.responsibilties,
            qualifications: this.state.qualifications,
            location: this.state.location,
            experience: this.state.experience,
            industry: this.state.industry,
            salary: this.state.salary,
            company_id: companyid
        };
        console.log("post => " + JSON.stringify(post));
        UserService.updatepost(post).then((res) => {
            toast.success("Your Job Post is Updated Successfully")
            setTimeout(() => {
                this.props.history.push('/company/job/posts')
            }, 5000);
            ;
        });
    };

    render() {
        return (
            <div style={{ backgroundImage: `url(${apply2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <ToastContainer />
                <center>
                    <div class="px-4 py-5 px-md-2 text-center" style={{ width: '60%' }}>
                        <center>
                            <div class="card">
                                <center><h1>Add New Job Post For Your Comapny</h1></center>
                                <div class="card-body ">
                                    <form>
                                        <div className="row">
                                            <div className="col-sm">
                                                <div className="form-outline">
                                                    <label class="form-label" for="title">Job Title</label>
                                                    <input type="text" value={this.state.title} onChange={this.changetitleHandler} id="title" class="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                                <div className="form-outline ">
                                                    <label class="form-label" for="response">Responsibilties</label>
                                                    <input type="text" value={this.state.responsibilties} onChange={this.changeresHandler} id="response" class="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                                <div className="form-outline ">
                                                    <label class="form-label" for="state">State</label>
                                                    <input type="text" value={this.state.state_name} onChange={this.changestateHandler} id="state" class="form-control" />
                                                </div>
                                            </div>
                                        </div><br></br>
                                        <div className="row">
                                            <div className="col-sm">
                                                <div className="form-outline">
                                                    <label class="form-label" for="location">Location</label>
                                                    <input type="text" value={this.state.location} onChange={this.changelocHandler} id="location" class="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                                <div className="form-outline ">
                                                    <label class="form-label" for="industry">Industry</label>
                                                    <input type="text" value={this.state.industry} onChange={this.changeindusHandler} id="industry" class="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                                <div className="form-outline ">
                                                    <label class="form-label" for="salary">Salary</label>
                                                    <input type="text" value={this.state.salary} onChange={this.changesalaryHandler} id="salary" class="form-control" />
                                                </div>
                                            </div>
                                        </div><br></br>
                                        <div className="row">
                                            <div className="col-sm">
                                                <div className="form-outline">
                                                    <label class="form-label" for="exp">Experience in years<span className="caret"> &nbsp;in years</span></label>
                                                    <input type="number" min="0" max="30" value={this.state.experience} onChange={this.changeexpHandler} id="exp" class="form-control" />
                                                </div>
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
                                            <div className="col-sm">
                                                <div className="form-outline ">
                                                    <label class="form-label" for="desc">Job Description</label>
                                                    <textarea class="form-control" value={this.state.description} onChange={this.changedescHandler} id="desc" name="desc" rows="3" ></textarea>
                                                </div>
                                            </div>
                                        </div><br></br>
                                        <button type="submit" onClick={this.update} class="btn btn-primary btn-block mb-4">
                                           Update Post
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </center>
                        <div style={{ height: "100px" }}></div>
                    </div>
                </center>
            </div>
        );
    };
}

export default withRouter(UpdateJobPost);
