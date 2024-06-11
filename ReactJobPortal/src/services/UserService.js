import axios from "axios";
const USER_ADD="http://localhost:8081/profile/saveuser"
const USER_GET_CREDENTIALS="http://localhost:8081/profile/logmein?email="
// const GET_RECRUITER_POST="http://localhost:8081/JobPosting/get/all/post/industry?company_id="
const GET_ALL_POST="http://localhost:8081/JobPosting/get/all/post"
const GET_ALL_POST_BY_LOC="http://localhost:8081/JobPosting/get/all/post/myloc?location="
const GET_ALL_POST_BY_INDUSTRY="http://localhost:8081/JobPosting/get/all/post/industry?industry="
const GET_ALL_POST_BY_KEYWORD="http://localhost:8081/JobPosting/get/all/post/keywords?keywords="
const Apply_JOPOST="http://localhost:8081/application/apply"
const ADD_POST_BY_RECRUITER="http://localhost:8081/JobPosting/savejobpost"
const All_users="http://localhost:8081/jobseeker/getallseekers"
const B00k_mark="http://localhost:8081/bmark/job/add"
const JOBSEEKER_OBJECT="http://localhost:8081/jobseeker/getbyid?jid="
const applied_jobs="http://localhost:8081/jobseeker/getallappliedjobs?jid="
const delete_applied="http://localhost:8081/application/delete?id="
const get_company_job_post="http://localhost:8081/JobPosting/companyJobPost?cid="
const get_applied_job_seeker="http://localhost:8081/JobPosting/getalljobseeker/by/appliedjobs?jid="
const save_interview="http://localhost:8081/interview/schedule"
const get_interview_list="http://localhost:8081/interview/get/all/interview/list?id="
const get_interview_list_jobseeker="http://localhost:8081/interview/get/all/interview?id="
const delete_jobpost_of_companny="http://localhost:8081/JobPosting/delete/job/post?id="
const getjob_post_by_id="http://localhost:8081/JobPosting/get/job/post?jid="
const UPDATE_POST_BY_RECRUITER="http://localhost:8081/JobPosting/update/job/post"

class UserService{
    saveNewUser(users){
        return axios.post(USER_ADD,users);
    }
    getcredentials(email){
        return axios.get(USER_GET_CREDENTIALS+email);
    }
    getallJobpostByLocation(location){
        return axios.get(GET_ALL_POST_BY_LOC+location);
    }
    getallJobpostByIndustry(industry){
        return axios.get(GET_ALL_POST_BY_INDUSTRY+industry);
    }
    getallJobpostByKeyword(keyword){
        return axios.get(GET_ALL_POST_BY_KEYWORD+keyword);
    }
    getallJobpost(){
        return axios.get(GET_ALL_POST);
    }
    applyforpost(apply){
        return axios.post(Apply_JOPOST,apply);
    }
    addpost(post){
        return axios.post(ADD_POST_BY_RECRUITER,post);
    }
    updatepost(post){
        return axios.put(UPDATE_POST_BY_RECRUITER,post);
    }
    getallusers(){
        return axios.get(All_users);
    }
    bookmarkjob(data){
        return axios.post(B00k_mark,data);
    }
    getjobseekerobject(id){
        return axios.get(JOBSEEKER_OBJECT+id);
    }
    getappliedjobs(seeker_id){
        return axios.get(applied_jobs+seeker_id)
    }
    deletefromapplied(jobid){
        return axios.delete(delete_applied+jobid)
    }
    getmyjobpostings(company_id){
        return axios.get(get_company_job_post+company_id)
    }
    getjobseeker(jobid){
        return axios.get(get_applied_job_seeker+jobid)
    }
    saveinterview(interviwobj){
        return axios.post(save_interview,interviwobj)
    }
    getallInterviewListOfRecruiterCompany(rid){
        return axios.get(get_interview_list+rid)
    }
    getallListInterviewOfSeeker(seekerid){
        return axios.get(get_interview_list_jobseeker+seekerid)
    }
    deletejobpost(id){
        return axios.delete(delete_jobpost_of_companny+id)
    }
    getjobpost_byid(id){
        return axios.get(getjob_post_by_id+id)
    }
}
export default new UserService()