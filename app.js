/*******************************************************************************
*                   Using Constraint Validation DOM Methods                    *
********************************************************************************/
function myFunction() {
  var inpObj = document.getElementById("id1");
  if (inpObj.checkValidity() === false) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("demo").innerHTML = "Input OK";
  }
}
