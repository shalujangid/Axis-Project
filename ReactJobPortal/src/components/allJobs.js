import { Component } from "react";
import "../App.css";
import { withRouter } from "react-router-dom";
import UserService from "../services/UserService";
import { ToastContainer, toast } from 'react-toastify';
import { Button, Dropdown, Modal } from 'react-bootstrap'
import Location from "./jobByLocation";

class AllJobs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobpost: [],
            showHide: false,
            showHide1: false,
            showHide2: false,
            location_search: "",
            industry_search: "",
            keyword_search: ""
        };
        this.changeCompanyindustryHandler = this.changeCompanyindustryHandler.bind(this);
        this.changeCompanykeywordHandler = this.changeCompanykeywordHandler.bind(this);
        this.changeCompanylocHandler = this.changeCompanylocHandler.bind(this);
        this.sendlocation = this.sendlocation.bind(this);
        this.sendIndustry = this.sendIndustry.bind(this);
        this.sendKeyword = this.sendKeyword.bind(this);
        this.bookmark=this.bookmark.bind(this);
        this.renderbutton=this.renderbutton.bind(this);
    }
    componentDidMount() {

        UserService.getallJobpost().then((res) => {
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
                toast.success("Congratulations! You have successfully applied for this job!");
                setTimeout(() => {
                    window.location.replace("/all-jobs")
                }, 5000);
            }
        }).catch(err => {
            console.log(err);

        });
    };
    bookmark(jobid) {
        let seeker_id = sessionStorage.getItem("jseeker_id");
        let save = {
            jobId: jobid,
            seekerId: seeker_id,
        };
        console.log(save)
        UserService.bookmarkjob(save).then((res) => {
            if (res.data === "error") {
                console.log(res.data)
                toast.error("Hey! You have already applied to this job, Good luck.")
                // alert("Hey! You have already applied to this job, Good luck.")
            }
            else {
                toast.success("Job saved! Good luck");
                setTimeout(() => {
                    window.location.replace("/all-jobs")
                }, 5000);
               
            }
        }).catch(err => {
            console.log(err);

        });
    };
   
    changeCompanylocHandler = (event) => {
        this.setState({ location_search: event.target.value });
    };
    changeCompanyindustryHandler = (event) => {
        this.setState({ industry_search: event.target.value });
    };
    changeCompanykeywordHandler = (event) => {
        this.setState({ keyword_search: event.target.value });
    };

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }
    handleModalShowHide1() {
        this.setState({ showHide1: !this.state.showHide1 })
    }
    handleModalShowHide2() {
        this.setState({ showHide2: !this.state.showHide2 })
    }

    sendlocation() {
        this.props.history.push({
            pathname: '/jobs-by-location',
            state: { location_search: this.state.location_search }
        })
    }
    sendIndustry() {
        this.props.history.push({
            pathname: '/jobs-by-industry',
            state: { industry_search: this.state.industry_search }
        })
    }
    sendKeyword() {
        this.props.history.push({
            pathname: '/jobs-by-keyword',
            state: { keyword_search: this.state.keyword_search }
        })
    }
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
                <Modal show={this.state.showHide} >
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()} style={{ "background-color": "#89CFF0" }}>
                        <Modal.Title>Provide Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label for="location">Search Jobs By Location</label><br></br>
                        <input value={this.state.location_search} onChange={this.changeCompanylocHandler} id="location" placeholder="Search here" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => this.handleModalShowHide()}>
                            Close
                        </Button>
                        <Button variant="success" onClick={this.sendlocation}>
                            Search
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showHide1} >
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide1()} style={{ "background-color": "#89CFF0" }}>
                        <Modal.Title>Provide Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label for="industry">Search Jobs By Industry</label><br></br>
                        <input value={this.state.industry_search} onChange={this.changeCompanyindustryHandler} id="industry" placeholder="Search here" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => this.handleModalShowHide1()}>
                            Close
                        </Button>
                        <Button variant="success" onClick={this.sendIndustry}>
                            Search
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.showHide2} >
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide2()} style={{ "background-color": "#89CFF0" }}>
                        <Modal.Title>Provide Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label for="keywords">Search Jobs By keywords</label><br></br>
                        <input value={this.state.keyword_search} onChange={this.changeCompanykeywordHandler} id="keywords" placeholder="Search here" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => this.handleModalShowHide2()}>
                            Close
                        </Button>
                        <Button variant="success" onClick={this.sendKeyword}>
                            Search
                        </Button>
                    </Modal.Footer>
                </Modal>
                <center>
                    <br></br>
                    <div class='row'>
                        <div class='col-sm'>
                        </div>
                        <div class='col-sm'>
                            <h2><span style={{ fontWeight: "bold", color: 'white' }}>All Posted Jobs</span></h2>
                            <h6 style={{ fontWeight: "bold", color: 'white' }}></h6>
                        </div>
                        <div class='col-sm'>
                            <center>
                                <Dropdown>
                                    <Dropdown.Toggle variant="info" style={{ "background-color": "white", "color": "black" }} className='' id="dropdown-basic">
                                        Search Jobs
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="">
                                            <Button variant="" onClick={() => this.handleModalShowHide()}>
                                                By location
                                            </Button>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="">
                                            <Button variant="" onClick={() => this.handleModalShowHide1()}>
                                                By Industry
                                            </Button>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="">
                                            <Button variant="" onClick={() => this.handleModalShowHide2()}>
                                                By keyword
                                            </Button>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
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
                                                        <button type="button" class="btn" style={{ fontSize: '12px' }}  onClick={() => this.bookmark(jobpost.jobId)}>
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

                </center>

            </div>

        );
    }
}
export default withRouter(AllJobs);
