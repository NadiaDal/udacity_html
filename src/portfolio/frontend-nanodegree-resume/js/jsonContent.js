/*work contains an array of jobs. Each job object in jobs should contain an employer, title, 
 * location, dates worked and description.
 * var work = {};
	work.current_position = "cost accountant";
	work.employer = "Ciklum";
	work.years_worked =  2;
	work.city = "Kyev";
*/

var work = { 
	"jobs" : [
		{
		 "employer" : "Ciklum",
		 "title" : "web developer",
		 "location" : "Kyiv",
		 "datesWorked" : "November 2012 - now",
		 "description" : "description"	
			},
		{
		 "employer" : "Yuna Company",
		 "title" : "web developer",
		 "location" : "Kyiv",
		 "datesWorked" : "April 2011 - November 2012",
		 "description" : "description"	
			}
	]
}
/*
projects con tains an array of projects. Each project object in projects should contain a title, 
* dates worked, description, and an images array with URL strings for project images.

bio contains a name, role, welcomeMessage, contacts object and skills array. 
* The contacts object should contain (but doesn't have to) a mobile number,
*  email address, github username, twitter handle and location.

education contains an array of schools. Each school object in schools contains a name, 
* location, degree, majors array, dates attended and a url for the school's website. 
* education also contains an onlineCourses array. Each onlineCourse object in onlineCourses 
* should contain a title, school, dates attended and a url for the course.

*/

var bio = {
	"name": "Nadia Daliavska",
	"role": "Web Developer",
	"contact_info": {
	"mobile" : "0937160335",
	"email" : "nadiadaliavska@gmail.com",
	"github" : "NadiaDal",
	"location" : "Kyiv"
},
	"welcome_message" : "Hi!",
	"skills" : ["html", "javascript", "css", "bootsrap"],
	"pic" : "images/fry.jpg"
	}
	

var education = {};
	education["school_name"] = "Acadamy of Acconting and Statictic";
	education["school_attended"] = 4;
	education["school_city"]= "Bobrynets";

var edu = {
    "schools": [
        {
            "name": "Academy of Statistics and Accounting",
            "location": "Kyev",
            "degree": "master",
            "majors": [
                "",
                ""
            ],
            "dates": "",
            "url": ""
        },
        {
            "name": "",
            "location": "",
            "degree": "",
            "majors": [
                "",
                ""
            ],
            "dates": "",
            "url": ""
        },
        {
            "online_courses": [
                "udacity",
                "coursera",
                "codefire"
            ]
        }
    ]
}
