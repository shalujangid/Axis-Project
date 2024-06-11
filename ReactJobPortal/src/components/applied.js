import { Component } from "react";
import "../App.css";
import { withRouter } from "react-router-dom";
import UserService from "../services/UserService";
import { ToastContainer, toast } from 'react-toastify';

class Applied extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobseeker: [],
        };
        this.delete = this.delete.bind(this);
    }
    componentDidMount() {
        var seeker_id = sessionStorage.getItem("jseeker_id")
        UserService.getappliedjobs(seeker_id).then((res) => {
            this.setState({
                jobseeker: res.data
                
            });
        });

    }
    delete = (jobid) => {
        UserService.deletefromapplied(jobid).then((res) => {
            if (res.data == "deleted") {
                toast.success("This application is deleted successfully!")
                setTimeout(() => {
                    window.location.replace("/applied-jobs");
                }, 4000);
            } else {
                toast.error("Something went wrong. Please try again")
            }
        });
    }

    render() {
        var i=1;
        return (
            <div style={{ backgroundColor: "#5F9EA0" }}>
                <ToastContainer />
                <div class='row'>
                    <div class='col-sm'>
                    </div>
                    <div class='col-sm'>
                        <br></br>
                        <h5><span style={{ fontWeight: "bold", color: 'white' }}>All Applied Jobs</span></h5>
                        <h6 style={{ fontWeight: "bold", color: 'white' }}></h6>
                    </div>
                    <div class='col-sm'>
                        <center>
                            <button className="btn btn-outline btn-light" onClick={() => { window.location.replace("/Jdashboard") }} style={{ fontWeight: "bold", color: '#0a193d', backgroundColor: "white", marginTop: '25px' }}>Back</button >
                        </center>
                    </div>
                </div>
                <center>
                    <table className="myt table table-striped table-bordered shadow-lg p-3 mb-5 bg-white rounded" style={{ margin: "10px", paddingRight: '20px', width: '70%', height: '50%', fontSize: '14px' }} >
                        <thead className="thead-bg" style={{ "background-color": "#0a193d", "color": "white" }}>
                            <tr>
                                <th>Sno.</th>
                                <th>Company Name</th>
                                <th>Job Title</th>
                                <th>Job Description</th>
                                <th>Website URL</th>
                                <th>Industry</th>
                                <th>Location</th>
                                <th>Pasted Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>{
                            this.state.jobseeker.map(
                                jobseeker =>
                                    <tr key={jobseeker.id} class="mytr">
                                        <td>{i++}</td>
                                        <td>{jobseeker.jobPosting.company.company_name}</td>
                                        <td>{jobseeker.jobPosting.title}</td>
                                        <td>{jobseeker.jobPosting.description}</td>
                                        <td>{jobseeker.jobPosting.company.website_url}</td>
                                        <td>{jobseeker.jobPosting.industry}</td>
                                        <td>{jobseeker.jobPosting.location}</td>
                                        <td>{jobseeker.jobPosting.posted_date}</td>
                                        <td style={{ width: "150px" }}>
                                            <button type="button" class="btn btn-danger" style={{ fontSize: '12px' }} onClick={() => this.delete(jobseeker.id)}>Delete</button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div style={{ height: "100px" }}></div>
                </center>
            </div>
        );
    }
}
export default withRouter(Applied);
