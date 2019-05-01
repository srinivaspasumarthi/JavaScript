function buildJson() {
    console.log("In buildJson");

    var days_ar = localStorage.getItem("days_ar");
    var subject_ar = localStorage.getItem("subject_ar");
    var cgpa_level = localStorage.getItem("cgpa_level");
    var StudentName = localStorage.getItem("StudentName");
    var birthDate = document.getElementById("dtime").value;
    console.log(birthDate);
    birthDate = new Date(birthDate);
    console.log(birthDate);
    var birthMonth = birthDate.getMonth() + 1;
    if(birthMonth.toString().length==1)
       birthMonth ="0"+birthMonth;
    var birthDay = birthDate.getDate();
    if(birthDay.toString().length==1)
       birthDay = "0"+birthDay;
    //Writing Date in a proper format
    birthDate = birthDay + "-" + birthMonth + "-" + birthDate.getFullYear();
    
   var genderVal=document.getElementsByName("gender");
   var genderIs;
   console.log(genderVal);
   for(i=0;i<genderVal.length ;i++)
   {
      if(genderVal[i].checked)
        genderIs=genderVal[i].value;
   }
   
    var stud_details = {
        days_ar: days_ar,
        subject_ar: subject_ar,
        cgpa_level: cgpa_level,
        StudentName: StudentName,
        birthDate: birthDate,
        gender : genderIs
    };

    localStorage.setItem("stud_details", JSON.stringify(stud_details));
    console.log(stud_details);
}