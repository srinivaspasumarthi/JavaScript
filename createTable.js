function crateTableHeader() {
    console.log("Create Table entered");

    var tab = document.getElementById("tableInfo");
  console.log(tab);
    var par = document.createElement("p");
    par.innerHTML = "<b> Entered students Details are: </b>";

    console.log(par);
    tab.appendChild(par);

    var tableH = document.createElement("table");
    tableH.className = "table";
    tableH.id = "StudentTab";
    tableH.style="width:100%";

    var tr = document.createElement("tr");

    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");
    var th5 = document.createElement("th");
    var th6 = document.createElement("th");

    //Column Names
    th1.innerHTML = "First Name";
    th2.innerHTML = "Subjects";
    th3.innerHTML = "Days";
    th4.innerHTML = "CGPA";
    th5.innerHTML = "Gender";
    th6.innerHTML = "Date of Birth";

    //Column names as record
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    tr.appendChild(th6);

    tableH.appendChild(tr);
    console.log(tableH);

    tab.appendChild(tableH);
    console.log(tab);
    console.log("Create Table Exiting");

}

function createTableData() {
    console.log("createTableData entered");
    var tab = document.getElementById("StudentTab");

    //Get Student details and add it to array
    var stud_details = localStorage.getItem("stud_details");
     stud_details = JSON.parse(stud_details);
    console.log(stud_details);

    var stud_arr = localStorage.getItem("stud_arr");
    stud_arr = JSON.parse(stud_arr);
    console.log(stud_arr);
    
    //student array has values(true) or not(false)
    if (stud_arr) {
        stud_arr[stud_arr.length] = stud_details;
        console.log("Added Element to array");
    } else {
        console.log("Creaing array. Only first time gets executed");
        var stud_arr = [];
        stud_arr[0] = stud_details;
    }
    console.log(stud_arr);
    console.log(JSON.stringify(stud_arr));
    localStorage.setItem("stud_arr", JSON.stringify(stud_arr));

    //Add array data to HTML table data
    for (i = 0; i < stud_arr.length; i++) {
        console.log("loop i is+ "+i);
        var tabr = document.createElement("tr");

        var tabd1 = document.createElement("td");
        tabd1.innerHTML =stud_arr[i].StudentName;

        var tabd2 = document.createElement("td");
        tabd2.innerHTML =stud_arr[i].subject_ar;
        console.log("Subjects: "+ stud_arr[i].subject_ar);

        var tabd3 = document.createElement("td");
        tabd3.innerHTML =stud_arr[i].days_ar;
        console.log("Subjects: "+ stud_arr[i].days_ar);

        var tabd4 = document.createElement("td");
        tabd4.innerHTML =stud_arr[i].cgpa_level;

        var tabd5 = document.createElement("td");
        tabd5.innerHTML = stud_arr[i].gender;

        var tabd6 = document.createElement("td");
        tabd6.innerHTML =stud_arr[i].birthDate;

        tabr.appendChild(tabd1);
        tabr.appendChild(tabd2);
        tabr.appendChild(tabd3);
        tabr.appendChild(tabd4);
        tabr.appendChild(tabd5);
        tabr.appendChild(tabd6);

        tab.appendChild(tabr);
    }

    console.log(tab);
    console.log("createTableData exiting");
}