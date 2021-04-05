//palindrome("eye") should return a boolean.
//palindrome("eye") should return true.
//palindrome("_eye") should return true.
//palindrome("race car") should return true.
//palindrome("not a palindrome") should return false.
//palindrome("A man, a plan, a canal. Panama") should return true.
//palindrome("never odd or even") should return true.
//palindrome("nope") should return false.
//palindrome("almostomla") should return false.
//palindrome("My age is 0, 0 si ega ym.") should return true.
//palindrome("1 eye for of 1 eye.") should return false.
//palindrome("0_0 (: /-\ :) 0-0") should return true.
//palindrome("five|\_/|four") should return false.

function palindrome(str) {
  let strOrg = str.match(/[0-9a-zA-Z]*/gi)
  let strFilter = strOrg.filter(element => element.length > 0)
  let strWord = strFilter.join("").toLowerCase()
  console.log(strWord)

  let wordLength = strWord.length
  console.log(wordLength)

  let stringMatch = true;

  for (let i = 0; i < (wordLength - 1) / 2; i++) {
    if (strWord[i] !== strWord[wordLength - 1 - i]) {
      stringMatch = false
    }
  }

  return stringMatch;
}


palindrome("A man, a plan, a canal. Panama")


















