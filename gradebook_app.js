function getAverage(arr) {
  let average = 0;
  for (const num of arr) {
    average += num;
  }
  return average / arr.length;
}

const arrOfNum = [45, 87, 98, 100, 86, 94, 67, 88, 94, 95];

//console.log(getAverage(arrOfNum));

function getGrade(studentScore) {
  let grade = "";
  if (studentScore === 100) {
    grade = "A+";
  } else if (studentScore > 89) {
    grade = "A";
  } else if (studentScore > 79) {
    grade = "B";
  } else if (studentScore > 69) {
    grade = "C";
  } else if (studentScore > 59) {
    grade = "D";
  } else if (studentScore < 60) {
    grade = "F";
  }
  return grade;
}

//console.log(getGrade(88))

function hasPassingGrade(score) {
  if (getGrade(score) !== "F") {
    return true;
  } else {
    return false;
  }
}

//hasPassingGrade(getGrade(40));

function studentMsg(arrayOfScores, studentScore) {
  if (getGrade(studentScore) !== "F") {
    return `Class average: ${getAverage(arrayOfScores)}. Your grade: ${getGrade(studentScore)}. You passed the course.`;
  } else {
    return `Class average: ${getAverage(arrayOfScores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`;
  }
}

studentMsg(arrOfNum, 80);
//console.log(Math.floor(Math.random() * arrOfNum.length))
