 $('.datepicker').pickadate({
 /*   selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
 */ });

var data={
	basic:{first_name:"",last_name:"",email:"",website:""}
	,work_ex:{job_title:"",company_name:"",start_date:"",end_date:"",details:""}
	,education:{course_name:"",institution_name:"",start_date:"",end_date:""}
	,positions:{por1:"",por2:""}
	,interests:""
};

 $("#submit_button").click(function () {
 	// body...
 	//Basic Information
 	data.basic.first_name=$("#first_name").val();
 	data.basic.last_name=$("#last_name").val();
 	data.basic.email=$("#email").val();
 	data.basic.website=$("#website").val();
 	
 	//Work Experience
 	data.work_ex.job_title=$("#job_title").val();
 	data.work_ex.company_name=$("#company_name").val();
 	data.work_ex.start_date=$("#start_date").val();
 	data.work_ex.end_date=$("#end_date").val();
 	data.work_ex.details=$("#details").val();

 	//Education
 	data.education.course_name=$("#course_name").val();
 	data.education.institution_name=$("#institution_name").val();
 	data.education.start_date=$("#start_date").val();
 	data.education.end_date=$("#end_date").val();

 	//Positions of Responsibility
 	data.positions.por1=$("#por1").val();
 	data.positions.por2=$("#por2").val();

 	//Interests
 	data.interests=$("#interests").val();


console.log(data);
 });