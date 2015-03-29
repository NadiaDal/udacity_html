/*$("#main").append("Nadia");

var awesomeThoughts = "I am Nadia and I am Awesome";
console.log(awesomeThoughts); 

var funThoughts = awesomeThoughts.replace("Awesome","Fun");
$("#main").append(funThoughts);
*/
	
/*var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
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
*/

$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));

$("#header").append(HTMLmobile.replace("%data%", bio.contact_info.mobile));
$("#header").append(HTMLemail.replace("%data%", bio.contact_info.email));
$("#header").append(HTMLgithub.replace("%data%", bio.contact_info.github));
$("#header").append(HTMLlocation.replace("%data%", bio.contact_info.location));
$("#header").append(HTMLbioPic.replace("%data%", bio.pic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcome_message));

if(bio.skills.length !=0){

	var formattedSkillsStart = HTMLskillsStart.replace("%data%", bio.skills);
	$("#header").append(formattedSkillsStart);
	$("#skills").append(formattedSkills);
	
}

/*
 * $("#header").append(formattedSkillsStart);
$("#skills").append(formattedSkills);

/*var formattedScholl_name = HTMLschoolName.replace("%data%", );
$("#header").append(education["school_name"]);
$("#header").append(work.current_position);
*/




