function generatePassword(passwordLength) {
  const passwordString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const passwordSplitted = passwordString.split("");
  let passArray = [];

  for(let i = 0; i < passwordLength; i++) {
    passArray.push(passwordSplitted[Math.floor(Math.random() * passwordSplitted.length)])
  }
  return passArray.join("");
}

let password = generatePassword(20);
console.log(`Generated password: ${password}`);