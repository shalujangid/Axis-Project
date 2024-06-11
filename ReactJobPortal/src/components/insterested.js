import { Component } from "react";
import "../App.css";
import { withRouter } from "react-router-dom";
import UserService from "../services/UserService";
import apply2 from "../img/apply2.jpg"
import { ToastContainer, toast } from 'react-toastify';
class Interested extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobseeker: [],
            jobid: '',
            seekerid: '',
            idate: '',
            type: ''
        }
        this.openmodal=this.openmodal.bind(this)
        this.changedate=this.changedate.bind(this)
        this.changetype=this.changetype.bind(this)
        this.scheduleInterview=this.scheduleInterview.bind(this)

    }
    componentDidMount() {
        var jobid = this.props.location.state.jobid
        UserService.getjobseeker(jobid).then((res) => {
            this.setState({
                jobseeker: res.data
            });
            console.log(JSON.stringify(this.state.jobseeker))
        });
    }
    openmodal=(joid, seekid)=> {
        document.getElementById('id01').style.display = 'block';
        this.setState({ jobid: joid})
        this.setState({ seekerid: seekid })
    };
    close() {
        document.getElementById('id01').style.display = 'none';
    }
    changedate = (event) => {
        this.setState({ idate: event.target.value });
    };
    changetype = (event) => {
        this.setState({ type: event.target.value });
    };
    scheduleInterview(e) {
        e.preventDefault();
        var date=document.getElementById("idate").value;
        var type=document.getElementById("type").value;
        if (date == "") {
            toast.error("Please select date to schedule interview")
            document.getElementById("idate").focus();
            return false;
        }
        if (type == "") {
            toast.error("Please select interview type")
            document.getElementById("type").focus();
            return false;
        }
        var jobid = this.state.jobid
        var seekerid = this.state.seekerid
        var recruiter_id = sessionStorage.getItem('recruiter_id')
        let save = {
            recruiter_id: recruiter_id,
            jseeker_id: seekerid,
            job_id: jobid,
            interview_date: this.state.idate,
            interview_type: this.state.type
        };
        UserService.saveinterview(save).then((res) => {
            if (res.data === "error") {
                toast.error("Something went wrong")
            }
            else {
                toast.success("Interview scheduled successfully");
                setTimeout(() => {
                    window.location.replace("/company/job/posts")
                }, 5000);
            }
        }).catch(err => {
            console.log(err);
        });
    }
    render() {
        var i = 1;
        return (
            <div style={{ backgroundImage: `url(${apply2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <ToastContainer />
                <div class='row'>
                    <div class='col-sm'>
                    </div>
                    <div class='col-sm'>
                        <br></br>
                        <h5><span style={{ fontWeight: "bold", color: 'white' }}>Applicants list</span></h5>
                        <h6 style={{ fontWeight: "bold", color: 'white' }}></h6>
                    </div>
                    <div class='col-sm'>
                        <center>
                            <button className="btn btn-outline btn-light" onClick={() => { window.location.replace("/Rdashboard") }} style={{ fontWeight: "bold", color: '#0a193d', backgroundColor: "white", marginTop: '25px' }}>Back</button >
                        </center>
                    </div>
                </div>
                <center>
                    <table className="myt table table-striped table-bordered shadow-lg p-3 mb-5 bg-white rounded" style={{ margin: "10px", paddingRight: '20px', width: '75%', height: '50%', fontSize: '14px' }} >
                        <thead className="thead-bg" style={{ "background-color": "#0a193d", "color": "white" }}>
                            <tr>
                                <th>Sno.</th>
                                <th>Applicant Name</th>
                                <th>Gender</th>
                                <th>Contact Number</th>
                                <th>Skills</th>
                                <th>Experience</th>
                                <th>Qualification</th>
                                <th>Location</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>{
                            this.state.jobseeker.map(
                                jobseeker =>
                                    <tr key={jobseeker.id} class="mytr">
                                        <td>{i++}</td>
                                        <td>{jobseeker.jobSeeker.first_name + " "}{jobseeker.jobSeeker.last_name}</td>
                                        <td>{jobseeker.jobSeeker.gender}</td>
                                        <td>{jobseeker.jobSeeker.contact_number}</td>
                                        <td>{jobseeker.skills}</td>
                                        <td>{jobseeker.experience}</td>
                                        <td>{jobseeker.jobSeeker.qualifications}</td>
                                        <td>{jobseeker.jobSeeker.location}</td>
                                        <td style={{ width: "150px" }}>
                                            <button type="button" class="btn btn-success" style={{ fontSize: '12px' }} onClick={() => this.openmodal(jobseeker.jobPosting.jobId, jobseeker.jobSeeker.jseeker_id)}>Schedule Interview</button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div style={{ height: "100px" }}></div>
                </center>
                <div id="id01" class="mmodal" style={{border:'3px solid black'}} >
                    <br></br>
                    <center> <div className="card rounded-3 shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "28%", height: "28%" }}>
                        <div className="card-body p-4 p-md-5">
                            <h5 className=""><b style={{color:'#0a193d'}}>Schedule Interview</b></h5>
                            <br></br>
                            <form className="">
                                <button type="button" onClick={this.close} class="btn  btn-outline-danger close" style={{ marginRight: "-23px", color: "red", fontSize: "16px" }}
                                    data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><b>×</b></span>
                                </button>
                                <div className="form-outline mb-4">
                                    <label className="form-label" for="idate">Interview Date</label>
                                    <input type="date" value={this.state.idate} onChange={this.changedate} id="idate" name="idate" className="form-control rounded-pill" />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label" for="type">Interview Type&nbsp;</label>
                                    <select className="select dropdown btn btn-outline-dark" id="type" value={this.state.type} onChange={this.changetype} >
                                        <option value="" selected>Choose Type</option>
                                        <option value="IN PERSON">In Person</option>
                                        <option value="PHONE">Phone</option>
                                        <option value="VIDEO">Video</option>
                                    </select>
                                    {/* <input type="text" value={this.state.type} onChange={this.changetype} min="0" max="30" id="type" name="type" className="form-control rounded-pill" /> */}
                                </div>
                                <button type="submit" className="btn btn-success btn-small mb-1" onClick={this.scheduleInterview}>Schedule</button>
                            </form>
                        </div>
                    </div></center>
                </div>
            </div>
        );
    }
}
export default withRouter(Interested);
