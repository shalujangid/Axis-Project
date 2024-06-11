import React, { Component } from 'react'
import '../App.css';
import { withRouter } from 'react-router-dom';
import logo from "../img/logo.png"
import Dropdown from 'react-bootstrap/Dropdown';
// let user_id = sessionStorage.getItem("user_id");
class Header extends Component {

    constructor(props) {
        super(props)
        this.Jobseeker = this.Jobseeker.bind(this);
        this.Recruiter = this.Recruiter.bind(this);
        this.Login = this.Login.bind(this);
    }
    Jobseeker = () => {
        this.props.history.push("/Jobseeker");
    }
    Recruiter = () => {
        this.props.history.push("/Recruiter");
    }
    Login = () => {
        this.props.history.push("/Login");
    }
    render() {
        return (
            <header class="header">
                <h1 class="logo"><a href="#">DREAM JOBS</a></h1>
                <ul class="main-nav" style={{paddingRight: '82px'}}>
                    <li><a href="" onClick={this.Login}>Login</a></li>
                    <li> <Dropdown>
                        <Dropdown.Toggle variant=""  style={{color:"white",padding:"8px"}} id="dropdown-basic">
                            Register
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="" > <a href="" onClick={this.Jobseeker} style={{color:"black"}}>Jobseeker</a></Dropdown.Item>
                            <Dropdown.Item href="" ><a href="" onClick={this.Recruiter} style={{color:"black"}}>Recruiter</a>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown></li>
                </ul>
            </header>
        )
    }
}

export default withRouter(Header)