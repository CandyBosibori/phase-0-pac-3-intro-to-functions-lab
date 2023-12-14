function shout(string){
      return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();

}

function logShout(String) {
 let uppercasedString = String.toUpperCase();
    console.log(uppercasedString);
}

function logWhisper(String) {
    let lowercasedString = String.toLowerCase();
       console.log(lowercasedString);
   }
   
function sayHiToHeadphonedRoommate(string){
    if (string.toLowerCase) {
        return "I can't hear you!" ;
    }
}

function sayHiToHeadphonedRoommate(string) {
   
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }
    else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }
  else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
    else {
        return "Unexpected input";
    }
}
console.log()