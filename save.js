function save() {

    var StudentName = $("#StudentName").val();
    //conditional operator. If it is defined then take it. Else null.
    var sname = StudentName ? StudentName : null;
    console.log("Save function entered");
    console.log(sname);
    localStorage.setItem("StudentName", StudentName);

    var SurName = $("#SurName").val();
    console.log($("#SurName"));
    console.log($("#SurName").val());
    var subject = $(".subject");
    var subject_ar = [];
    var l_subs_cnt = 0, l_days_cnt = 0;
    subject.each(function (key, value) {
        // console.log($(this));
        if ($(this).is(":checked")) {
            subject_ar.push($(this).val());
            l_subs_cnt = l_subs_cnt + 1;
        }
    });
    console.log(subject_ar);

    var cgpal = $("#myList").val();
    localStorage.setItem("cgpa_level", cgpal);

    var days = $(".days");
    var days_ar = [];

    days.each(function (key, value) {
        console.log(this);
        if ($(this).is(":checked")) {
            days_ar.push($(this).val());
            l_days_cnt = l_days_cnt + 1;
        }
    });

    console.log(StudentName);
    if (!StudentName) {
        alert("Please enter student name");
        return false;
    }
    if (subject_ar.length == 2 || days_ar.length == 3) {
        console.log("success");
        location.href = 'subj_studs_info.html';
        return true;
    }
    return false;
}

function mergeData() {
    console.log("In mergeData()");

    buildJson(); // create JSON struture and build Array of JSON objects
    crateTableHeader(); //creates results table header after clicking on submit button.

    createTableData(); //creates results table data after clicking on submit button.

    //enable back(Next student) button
    $("#back").css({ display: "block" });
}