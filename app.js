var dob = document.querySelector("#inp1");
var btnCheck = document.querySelector("#btn1");
var out = document.querySelector("#output");

btnCheck.addEventListener("click", function checkDate() {
  var bdayStr = dob.value;
  var listOfDate = bdayStr.split("-");

  if (bdayStr !== "") {
    var date = {
      day: Number(listOfDate[2]),
      month: Number(listOfDate[1]),
      year: Number(listOfDate[0])
    };
    console.log(checkPalindromeForALl(date));
    if (checkPalindromeForALl(date) === true) {
      out.innerHTML = "Yes, Your Bday is Palindrome";
    } else {
      out.innerHTML = "Sorry, Your Bday is not a Palindrome";
    }
  }
});

function reverseStr(str) {
  var rev = str.split("").reverse().join("");
  return rev;
}
//console.log(reverseStr("String"));

function isPalindrome(str) {
  var reverse = reverseStr(str);
  return str === reverse;
}

//console.log(isPalindrome(""));

function ConvertDatetoString(date) {
  var Strdate = { day: "", month: "", year: "" };
  if (date.day < 10) {
    Strdate.day = "0" + date.day;
  } else {
    Strdate.day = date.day.toString();
  }
  if (date.month < 10) {
    Strdate.month = "0" + date.month;
  } else {
    Strdate.month = date.month.toString();
  }
  Strdate.year = date.year.toString();
  return Strdate;
}

function getAllDatesFormat(date) {
  var dateStr = ConvertDatetoString(date);

  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPalindromeForALl(date) {
  var allProbableFormats = getAllDatesFormat(date);

  var isaPalindrome = false;

  for (var i = 0; i < allProbableFormats.length; i++) {
    if (isPalindrome(allProbableFormats[i])) {
      isaPalindrome = true;
      break;
    }
  }
  return isaPalindrome;
}

//var date = {
// day: 12,
// month: 11,
// year: 2021
//};

//console.log(checkPalindromeForALl(date));
