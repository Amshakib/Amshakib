function cubeNumber(number) {
    var sumn = 0;
  
    for (var i = 1; i <= number; i++) {
      sumn = Math.pow(i, 3);
    }
    return sumn;
  }
  



function matchFinder( String1 , String2){
  return String1.includes(String2);
}

const String1 = "Javascript";
const String2 = "code";

const result = matchFinder(String1, String2);




function sortMaker(arr) {
  if (arr[0] < arr[1]) {
      return [arr[1], arr[0]];
  } else if (arr[0] > arr[1]) {
      return [arr[0], arr[1]];
  } else {
      return "equal";
  }
}



function findAddress(addressObj) {
  const street = addressObj.street !== undefined ? addressObj.street : "__";
  const house = addressObj.house !== undefined ? addressObj.house : "__";
  const society = addressObj.society !== undefined ? addressObj.society : "__";
  
  return `${street},${house},${society}`;
}




function canPay(changeArray, totalDue) {
  const sum = changeArray.reduce((acc, currentValue) => acc + currentValue, 0);
  return sum >= totalDue;
}


