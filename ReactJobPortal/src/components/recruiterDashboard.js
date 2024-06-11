import { Component } from "react";
import "../App.css";
import { withRouter } from "react-router-dom";
import UserService from "../services/UserService";
import { ToastContainer, toast } from 'react-toastify';
import apply2 from "../img/apply2.jpg"

class Rdashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.AddJobPost = this.AddJobPost.bind(this);
    }
    componentDidMount() {

        UserService.getallusers().then((res) => {
            this.setState({
                users: res.data
            });
            console.log(res.data);
        });
    }
    AddJobPost() {
        this.props.history.push("/add-job-post");
    }
    // getdata(){
    //     var search=document.getElementById("search").value
    //     if(search!=""){
    //         return <div></div>
    //     }else{
    //         return <div></div>
    //     }
    // }
    render() {
        return (
            <div style={{ backgroundImage: `url(${apply2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <ToastContainer />
                <div class='row'>
                    <div class='col-sm'>
                        <center>
                            <button className="btn btn-outline btn-light" onClick={() => { window.location.replace("/Rdashboard") }} style={{ fontWeight: "bold", color: '#0a193d', backgroundColor: "white", marginTop: '25px' }}>Back</button >
                            <input type="text" class="search" placeholder="Search.."/>
                        </center>
                    </div>
                    <div class='col-sm'>
                        <br></br>
                        <center>
                            <h5><span style={{ fontWeight: "bold", color: 'white' }}>All Active Jobseekers</span></h5>
                            <h6 style={{ fontWeight: "bold", color: 'white' }}></h6>
                        </center>
                    </div>
                    <div class='col-sm'>
                        <button onClick={this.AddJobPost} className="btn btn-primary btn-outline-dark float-end" style={{ margin: "18px" }}>Add New Job Post</button>

                    </div>
                </div>
                <center>
                    <table className="myt table table-striped table-bordered shadow-lg p-3 mb-5 bg-white rounded" style={{ margin: "10px", paddingRight: '20px', width: '70%', height: '50%', fontSize: '14px' }} >
                        <thead className="thead-bg" style={{ "background-color": "#0a193d", "color": "white" }}>
                            <tr>
                                <th>Sno.</th>
                                <th>User Name</th>
                                <th>DOB</th>
                                <th>Gender</th>
                                <th>Industry</th>
                                <th>Location</th>
                                <th>Contact Number</th>
                                <th>Skills</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    users =>
                                        <tr key={users.jseeker_id}>
                                            <td>{users.jseeker_id}</td>
                                            <td>{users.first_name + " "}{users.last_name}</td>
                                            <td>{users.dob}</td>
                                            <td>{users.gender}</td>
                                            <td>{users.industry}</td>
                                            <td>{users.location}</td>
                                            <td>{users.contact_number}</td>
                                            <td>{users.resume}</td>
                                            <td>
                                                <button className="btn btn-info">Connect</button>
                                                {/* <button style={{marginLeft: "10px"}} onClick={ () => this.DeleteCustomer(customers)} className="btn btn-danger">Delete </button> */}
                                                {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button> */}
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>

                    </table>
                </center>

            </div>
        );
    }
}
export default withRouter(Rdashboard);
