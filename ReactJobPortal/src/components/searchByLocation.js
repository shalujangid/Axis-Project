import { Component } from "react";
import "../App.css";
import { withRouter } from "react-router-dom";
import UserService from "../services/UserService";
import { ToastContainer, toast } from 'react-toastify'; 
class Jdashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobpost: []
        }
    }

    componentDidMount(){
        var location=sessionStorage.getItem("location");
        var state=sessionStorage.getItem("state");

        UserService.getallJobpostByLocation(location).then((res) => {
            this.setState({
                jobpost: res.data
            });
            console.log(res.data)
        });
    }

    savePost(jobid) {
        let seeker_id = sessionStorage.getItem("jseeker_id");
        let save = {
            job_id: jobid,
            seeker_id: seeker_id,
        };
        UserService.applyforpost(save).then((res) => {
            if (res.data === "error") {
                console.log(res.data)
                toast.error("Hey! You have already applied to this job, Good luck.")
                // alert("Hey! You have already applied to this job, Good luck.")
            }
            else {
                alert("Congratulations! You have successfully applied for this job!")
                // toast.success("Congratulations! You have successfully applied for this job!");
            }
        }).catch(err => {
            console.log(err);

        });
    };
    renderbutton(id){
        this.props.history.push({
            pathname: '/apply-form',
            state: { jobid: id }
        })
    }
    render() {
        return (
            <div style={{ backgroundColor: "#5F9EA0" }}>
            <ToastContainer />
            <div class='row'>
                <div class='col-sm'>
                </div>
                <div class='col-sm'>
                    <br></br>
                    <h5><span style={{ fontWeight: "bold", color: 'white' }}>Jobs Near Your location</span></h5>
                    <h6 style={{ fontWeight: "bold", color: 'white' }}></h6>
                </div>
                <div class='col-sm'>
                    <center>
                    <button className="btn btn-outline btn-light" onClick={() => { window.location.replace("/Jdashboard")}} style={{ fontWeight: "bold", color: '#0a193d',backgroundColor:"white",marginTop:'25px'}}>Back</button >
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
                            <th>Industry</th>
                            <th>Location</th>
                            <th>Pasted Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{
                        this.state.jobpost.map(
                            jobpost =>
                                <tr key={jobpost.jobId} class="mytr">
                                    <td>{jobpost.jobId}</td>
                                    <td>{jobpost.company.company_name}</td>
                                    <td>{jobpost.title}</td>
                                    <td>{jobpost.description}</td>
                                    <td>{jobpost.industry}</td>
                                    <td>{jobpost.location}</td>
                                    <td>{jobpost.posted_date}</td>
                                    <td style={{width:"150px"}}>
                                                <div className="row">
                                                    <div className="col">
                                                    <button type="button" class="btn btn-success" style={{ fontSize: '12px' }} onClick={() => this.renderbutton(jobpost.jobId)}>Apply</button>
                                                    </div>
                                                    <div className="col">
                                                        <button type="button" class="btn" style={{ fontSize: '12px' }} >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmarks-fill" viewBox="0 0 16 16">
                                                                <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z" />
                                                                <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1H4.268z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
                <div style={{height:"100px"}}></div>
            </center>
        </div>
        );
    }
}
export default withRouter(Jdashboard);
