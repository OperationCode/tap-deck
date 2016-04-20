/*!
 * This grabs the current machine date and displays it in this format: April 22, 2016
 */

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var month = "";
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

switch (mm) {
  case 1:
    month = "January";
    break;
  case 2:
    month = "February";
    break;
  case 3:
    month = "March";
    break;
  case 4:
    month = "April";
    break;
  case 5:
    month = "May";
    break;
  case 6:
    month = "June";
    break;
  case 7:
    month = "July";
    break;
  case 8:
    month = "August";
    break;
  case 9:
    month = "September";
    break;
  case 10:
    month = "October";
    break;
  case 11:
    month = "November";
    break;
  case 12:
    month = "December";
    break;
}

today = month+' '+dd+', '+yyyy;
document.write(today);