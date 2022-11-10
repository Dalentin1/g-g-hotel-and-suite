// SWITCH CASE CONTROL STATEMENT
// Both ifelse and switch case works with conditions, we have to choose when to use each statement.
// It is generally perfered over the ifelse when there's a number of text case's persent, or when working with lots of conditions.

var month = 1;
switch (month) {
  case 1:
    document.write("January");
    break; // used to pull out from a switch case
  case 2:
    document.write("February");
    break;
  case 3:
    document.write("March");
    break;
  case 4:
    document.write("April");
    break;
  case 5:
    document.write("May");
    break;
  case 6:
    document.write("June");
    break;
  case 7:
    document.write("July");
    break;
  case 8:
    document.write("August");
    break;
  case 9:
    document.write("September");
    break;
  case 10:
    document.write("October");
    break;
  case 11:
    document.write("November");
    break;
  case 12:
    document.write("December");
        break;
    default: 
        document.write("Wrong input");
}

// In javascript switch case can accept number, string, boolean vaules.

// string vaule
var calander = "June"
switch (calander) {
  case "June":
    document.write("Sixth month");
    break
  case "July":
    document.write("Seventh month");
    break
  default:
    document.write("Wrong input ");
}
// boolean vaule
var boolean = true
switch (calander) {
  case true:
    document.write("Sixth month");
    break
  case false:
    document.write("Seventh month");
    break
  default:
    document.write("Wrong input ");
}