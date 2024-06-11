import React, { Component } from 'react'
import '../App.css';
import { withRouter } from 'react-router-dom';
import logo from "../img/logo.png"
let first_name = sessionStorage.getItem("first_name");
let last_name = sessionStorage.getItem("last_name");

class RecruiterHeader extends Component {

    constructor(props) {
        super(props)
        // this.logout = this.logout.bind(this);
        // this.checkmypost = this.checkmypost.bind(this);
        // this.Interview = this.Interview.bind(this);
    }
    checkmypost=()=> {
        this.props.history.push("/company/job/posts")
    }
    Interview=()=> {
        this.props.history.push("/all/job/interview")
    }
  
    logout = () => {
        sessionStorage.clear();
        this.props.history.push("/Home");
    }
    render() {
        return (
            <header class="header">
                <h1 class="logo"><a href="#">DREAM JOBS</a></h1>
                <ul class="main-nav" style={{ paddingRight: '82px' }}>
                    <li><a href="" className="btn"  onClick={ this.checkmypost} >Posted Jobs</a></li>
                    <li><a href="" className="btn"  onClick={ this.Interview} >Interview List</a></li>
                    <li><a href="" onClick={ this.logout}>Logout</a></li>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{backgroundColor:"white",marginTop:'15px',marginLeft:'23px',marginRight:'8px'}} width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                    </svg>
                    <span style={{ color: "white", paddingTop: '13px', paddingRight: '20px', fontSize: '12px' }}><i>Hi, {first_name + " " + last_name}</i> </span>
                </ul>
            </header>
        )
    }
}

export default withRouter(RecruiterHeader)