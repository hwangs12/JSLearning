//filter out unreasonable phone numbers and return true to reasonable looking phone numbers
function telephoneCheck(str) {
  let strArr = str.split("");
  let phone = true;

  if (strArr.includes(/[a-zA-Z]/)) {
    phone = false
  }

  let strArrFil = strArr.filter(element => (/[0-9]/).test(element))
  if (strArrFil.length < 10 || strArrFil.length > 11) {
    phone = false
  }
  if (strArrFil.length == 11 && strArrFil[0] != 1) {
    phone = false
  }
  if (strArr.includes('\)') && (!strArr.includes('\('))) {
    phone = false
  }

  if (strArr.includes('\(') && !strArr.includes('\)')) {
    phone = false
  }

  if (strArr[strArr.length - 1] == '\)') {
    phone = false
  }

  if (str[0] == "-") {
    phone = false
  }

  if (str.includes("?")) {
    phone = false
  }

  return phone;
}

