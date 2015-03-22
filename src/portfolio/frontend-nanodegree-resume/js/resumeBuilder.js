/*$("#main").append("Nadia");

var awesomeThoughts = "I am Nadia and I am Awesome";
console.log(awesomeThoughts); 

var funThoughts = awesomeThoughts.replace("Awesome","Fun");
$("#main").append(funThoughts);
*/

var skills =
["html", "javascript", "css", "bootsrap"];

var contacts = {
	"mobile" : "0937160335",
	"email" : "nadiadaliavska@gmail.com",
	"github" : "NadiaDal",
	"location" : "Kyiv"
}

var bio = {
	"name": "Nadia Daliavska",
	"role": "Web Developer",
	"contact_info": contacts,
	"welcome_message" : "Hi!",
	"skills" : skills,
	"pic" : "images/fry.jpg"
	}
	
var work = {};
	work.current_position = "cost accountant";
	work.employer = "Ciklum";
	work.years_worked =  2;
	work.city = "Kyev";


var education = {};
	education["school_name"] = "Acadamy of Acconting and Statictic";
	education["school_attended"] = 4;
	education["school_city"]= "Bobrynets";

	
var formattedRole = HTMLheaderName.replace("%data%", bio.role);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact_info.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact_info.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact_info.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact_info.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.pic);

var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedWM = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
var linebreak = document.createElement("br");


$("#header").append(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);
$("#header").append(formattedPic);
$("#header").append(formattedWM);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);

//var formattedScholl_name = HTMLschoolName.replace("%data%", );
$("#header").append(education["school_name"]);
$("#header").append(work.current_position);





