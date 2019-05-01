//This gets called from second page
function validate()
{
  console.log("Validate entered");
  var birthDate = document.getElementById("dtime").value;
  birthDate = new Date(birthDate);
  var todayDate=new Date() ;
  console.log(birthDate);
  console.log(todayDate);
  if(birthDate >todayDate)
  {
      alert("Birth date is future date");
      return false;
  }
  mergeData();
 return true;
}