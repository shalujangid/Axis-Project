import { Component } from "react";
import "../App.css";
import { withRouter } from "react-router-dom";
import UserService from "../services/UserService";
import { ToastContainer, toast } from 'react-toastify';

class BookMarked extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobseeker: [],
        };
    }
    componentDidMount() {
        var seeker_id=sessionStorage.getItem("jseeker_id")
        UserService.getjobseekerobject(seeker_id).then((res) => {
            this.setState({
                jobseeker: res.data
            });
            console.log(this.state.jobseeker)
           console.log( JSON.stringify(this.state.jobseeker));
        });
       
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
                        <h5><span style={{ fontWeight: "bold", color: 'white' }}>All Jobs Bookmarked By You</span></h5>
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
                                        <td>{jobseeker.jobId}</td>
                                        <td>{jobseeker.jobPosting.company.company_name}</td>
                                        <td>{jobseeker.jobPosting.title}</td>
                                        <td>{jobseeker.jobPosting.description}</td>
                                        <td>{jobseeker.jobPosting.company.website_url}</td>
                                        <td>{jobseeker.jobPosting.industry}</td>
                                        <td>{jobseeker.jobPosting.location}</td>
                                        <td>{jobseeker.jobPosting.posted_date}</td>
                                        <td style={{ width: "150px" }}>
                                            <div className="row">
                                                <div className="col">
                                                    <button type="button" class="btn btn-success" style={{ fontSize: '12px' }} onClick={() => this.savePost(jobseeker.jobPosting.jobId)}>Apply</button>
                                                </div>
                                                <div className="col">
                                                    <button type="button" class="btn" style={{ fontSize: '12px' }} onClick={() => this.bookmark(jobseeker.jobPosting.jobId)}>
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
                    <div style={{ height: "100px" }}></div>
                </center>
            </div>
        );
    }
}
export default withRouter(BookMarked);
