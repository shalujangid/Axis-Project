import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Recruiter from './components/Recruiter';
import Home from './components/Home';
import Jobseeker from './components/Jobseeker';
import Header from './components/header';
import Login from './components/login';
import Footer from './components/footer';
import Logout from './components/logout';
import Rdashboard from './components/recruiterDashboard';
import Jdashboard from './components/jobseekerDashboard';
import RecruiterHeader from './components/recruiterHeader';
import SeekerHeader from './components/seekerHeader';
import searchByLocation from './components/searchByLocation';
import AllJobs from './components/allJobs';
import AddJobPost from './components/addJobPost';
import Dropdown from 'react-bootstrap/Dropdown';
import Location from "./components/jobByLocation";
import Industry from './components/jobByIndustry';
import Keyword from './components/jobByKeyword';
import BookMarked from './components/bookmarkedJobs';
import Applied from './components/applied';
import ApplyForm from './components/applyForm';
import Myjobpostings from './components/myjobpostings';
import Insterested from './components/insterested';
import InterviewList from './components/InterviewList';
import InterviewJobseeker from './components/interviewJobseeker';
import UpdateJobPost from './components/updateJobPost';
function App() {

  let user_id = sessionStorage.getItem("user_id");
  let role = sessionStorage.getItem("role");
  const renderHeader=()=>{
    if (role != "" && user_id != null && role == "JOBSEEKER") {
      return <SeekerHeader/>
    } else if (role != "" && user_id != null && role == "RECRUITER") {
      return  <RecruiterHeader/>
    }else{
      return <Header/>
    }
  };
  return (
    <div >
      <Router>
        {
          renderHeader()
        }
        <div >
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/Home" exact component={Home}></Route>
            <Route path="/Recruiter" component={Recruiter}></Route>
            <Route path="/Jobseeker" component={Jobseeker}></Route>
            <Route path="/Login" component={Login}></Route>
            <Route path="/Logout" component={Logout}></Route>
            <Route path="/Rdashboard" component={Rdashboard} ></Route>
            <Route path="/Jdashboard" component={Jdashboard} ></Route>
            <Route path="/jobs/nearme" component={searchByLocation} ></Route>
            <Route path="/all-jobs" component={AllJobs} ></Route>
            <Route path="/add-job-post" component={AddJobPost} ></Route>
            <Route path="/jobs-by-location" component={Location} ></Route>
            <Route path="/jobs-by-industry" component={Industry} ></Route>
            <Route path="/jobs-by-keyword" component={Keyword} ></Route>
            <Route path="/book-marked-jobs" component={BookMarked} ></Route>
            <Route path="/applied-jobs" component={Applied} ></Route>
            <Route path="/apply-form" component={ApplyForm} ></Route>
            <Route path="/company/job/posts" component={Myjobpostings} ></Route>
            <Route path="/applied-applicants" component={Insterested} ></Route>
            <Route path="/all/job/interview" component={InterviewList} ></Route>
            <Route path="/my/scheduled/interviews" component={InterviewJobseeker} ></Route>
            <Route path="/update/job/post" component={UpdateJobPost} ></Route>
            <Home></Home>
          </Switch>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default App;
