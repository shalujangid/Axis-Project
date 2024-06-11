import { Component } from "react";
import "../App.css";
import { withRouter } from "react-router-dom";
import UserService from "../services/UserService";
import apply2 from "../img/apply2.jpg"
import { ToastContainer, toast } from 'react-toastify';
class Myjobpostings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobpost: [],
        }
        this.applicants=this.applicants.bind(this)
        this.updatepost=this.updatepost.bind(this)
        this.deletepost=this.deletepost.bind(this)
    }
    componentDidMount() {
        var company_id = sessionStorage.getItem('company_id')
        UserService.getmyjobpostings(company_id).then((res) => {
            this.setState({
                jobpost: res.data,
            });

        });
    }

    applicants(id){
        this.props.history.push({
            pathname: '/applied-applicants',
            state: { jobid: id }
        })
    }
    updatepost(id){
        this.props.history.push({
            pathname: '/update/job/post',
            state: { job_id: id }
        })
    }
    deletepost(id){
        UserService.deletejobpost(id).then((res) => {
          if(res.data==="deleted"){
            toast.success("This job post is deleted successfully")
            setTimeout(() => {
                this.props.history.push('/company/job/posts')
            }, 3000);
          }else{
            toast.error("Something went wrong")
          }

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
                        <h5><span style={{ fontWeight: "bold", color: 'white' }}>Current Job Opening Of Your Company</span></h5>
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
                                <th>Company Name</th>
                                <th>Job Title</th>
                                <th>Job Description</th>
                                <th>Industry</th>
                                <th>Location</th>
                                <th>Experience</th>
                                <th>Pasted Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>{
                            this.state.jobpost.map(
                                jobpost =>
                                    <tr key={jobpost.jobId} class="mytr">
                                        <td>{i++}</td>
                                        <td>{jobpost.company.company_name}</td>
                                        <td>{jobpost.title}</td>
                                        <td>{jobpost.description}</td>
                                        <td>{jobpost.industry}</td>
                                        <td>{jobpost.location}</td>
                                        <td>{jobpost.experience}</td>
                                        <td>{jobpost.posted_date}</td>
                                        <td style={{ width: "80%" }}>

                                            <button type="button" class="btn btn-primary" style={{ fontSize: '12px' }} onClick={() => this.applicants(jobpost.jobId)}>Applicants</button>

                                            &nbsp; <button type="button" class="btn btn-warning" style={{ fontSize: '12px' }} onClick={() => this.updatepost(jobpost.jobId)}>Update</button>

                                            &nbsp; <button type="button" class="btn btn-danger" style={{ fontSize: '12px' }} onClick={() => this.deletepost(jobpost.jobId)}>Delete</button>

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
export default withRouter(Myjobpostings);
