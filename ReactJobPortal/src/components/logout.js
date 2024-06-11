import { Component } from "react";
import '../App.css';
import { withRouter } from 'react-router-dom';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.logout = this.logout.bind(this);
    }
    logout = () => {
        alert("coming");
        sessionStorage.clear()
        this.props.history.push('/Home');
    }
    render(){
        this.logout()
        return(this.logout);
    }
}
export default withRouter(Logout);