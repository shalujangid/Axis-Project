import { Component } from "react";
import "../App.css";
import { withRouter } from "react-router-dom";
import UserService from "../services/UserService";
import { ToastContainer, toast } from 'react-toastify';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap'
import apply from "../img/apply.jpg"

class Applyform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobpost: [],
            experience:'',
            skill:''
        };
        this.changeexp = this.changeexp.bind(this);
        this.changeskills = this.changeskills.bind(this);
    }
    componentDidMount() {
       
    }
    
    savePost=(e)=> {
        e.preventDefault();
        var skill=document.getElementById("skill").value;
        var exp=document.getElementById("exp").value;
        if (skill == "") {
            toast.error("Please enter your skills")
            document.getElementById("skill").focus();
            return false;
        }
        if (exp == "") {
            toast.error("Please share your years of experience")
            document.getElementById("exp").focus();
            return false;
        }
        var jobid=this.props.location.state.jobid
        let seeker_id = sessionStorage.getItem("jseeker_id");
        let save = {
            job_id: jobid,
            seeker_id: seeker_id,
            experience:this.state.experience,
            skills:this.state.skill
        };
        UserService.applyforpost(save).then((res) => {
            if (res.data === "error") {
                console.log(res.data)
                toast.error("Hey! You have already applied to this job, Good luck.")
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

    changeskills = (event) => {
        this.setState({ skill: event.target.value });
    };
    changeexp = (event) => {
        this.setState({ experience: event.target.value });
    };
   
    render() {
        return (
            <div style={{ backgroundImage: `url(${apply})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <ToastContainer />
                <center>
                    <br></br>
                    <div className="card rounded-3 shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "30%",height:"30%" }}>
                        <div className="card-body p-4 p-md-5">
                            <h4 className="">Provide details</h4>
                            <br></br>
                            <form className="">
                                <div className="form-outline mb-4">
                                    <label className="form-label" for="skill">Add Relevant Skills</label>
                                    <input type="text" value={this.state.skill} onChange={this.changeskills} id="skill" name="skill" className="form-control rounded-pill" />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label" for="exp">Experience in years</label>
                                    <input type="number" value={this.state.experience} onChange={this.changeexp} min="0" max="30" id="exp" name="exp" className="form-control rounded-pill" />
                                </div>
                                <button type="submit" className="btn btn-success btn-small mb-1" onClick={this.savePost}>Apply</button>&nbsp;<button type="" className="btn btn-warning btn-small mb-1" onClick={()=>{this.props.history.push('/applied-jobs')}}>Back</button>
                            </form>
                        </div>
                    </div>
                    <div style={{ height: "100px" }}></div>
                </center>
            </div>

        );
    }
}
export default withRouter(Applyform);
