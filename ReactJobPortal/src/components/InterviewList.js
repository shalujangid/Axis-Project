import { Component } from "react";
import "../App.css";
import { withRouter } from "react-router-dom";
import UserService from "../services/UserService";
import apply2 from "../img/apply2.jpg"
import { ToastContainer, toast } from 'react-toastify';
class InterviewList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            interview: []
           
        }
      
    }
    componentDidMount() {
        let recruiter_id=sessionStorage.getItem('recruiter_id')
        UserService.getallInterviewListOfRecruiterCompany(recruiter_id).then((res) => {
            this.setState({
                interview: res.data
            });
            console.log(JSON.stringify(this.state.interview))
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
                        <h5><span style={{ fontWeight: "bold", color: 'white' }}>All Scheduled Interview</span></h5>
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
                                <th>Interviewer Name</th>
                                <th>Contact Number</th>
                                <th>Job Title</th>
                                <th>Interview Date</th>
                                <th>Interview Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>{
                            this.state.interview.map(
                                interview =>
                                    <tr key={interview.id} class="mytr">
                                        <td>{i++}</td>
                                        <td>{interview.createdFor.first_name + " "}{interview.createdFor.last_name}</td>
                                        <td>{interview.createdBy.first_name + " "}{interview.createdBy.last_name}</td>
                                        <td>{interview.createdFor.contact_number}</td>
                                        <td>{interview.job.title}</td>
                                        <td>{interview.interview_date}</td>
                                        <td>{interview.interview_type}</td>
                                        <td style={{ width: "150px" }}>
                                            <button type="button" class="btn btn-success" style={{ fontSize: '12px' }} >FeedBack</button>
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
export default withRouter(InterviewList);
