/**
 * Created by Brandi on 12/5/15.
 */
var express = require("express");

var firstName = require("./first_name");
var lastName = require("./last_name");
var desiredJob = require("./desired_job");
var desiredLocation = require("./desired_location");
var employmentHistory1 = require("./employment_history1")
var employmentHistory2 = require("./employment_history2")
var employmentHistory3 = require("./employment_history3")
var skills = require("./skills")




//this is the object constructor that creates user
function Applicant(first, last, job, location, oldEmployer1, oldEmployer2, oldEmployer3, skills){
    this.first = first;
    this.last = last;
    this.job = job;
    this.location = location;
    this.oldEmployer1 = oldEmployer1;
    this.oldEmployer2 = oldEmployer2;
    this.oldEmployer3 = oldEmployer3;
    this.skills = skills;

}
//here we will instantiate the object. we will pass in the variables that are exported from other modules
var newApplicant = new Applicant(first, last, job, location, oldEmployer1, oldEmployer3, oldEmployer3, skills);

//user is what make_user is creating and what we will later on in users.js
module.exports = newApplicant;