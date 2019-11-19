// Code your solution here

function findMatching(arrDrivers, string){

    return arrDrivers.filter(element => element.toLowerCase() == string.toLowerCase())

}

function fuzzyMatch(arrDrivers , letter) {
    return arrDrivers.filter( element =>
         element[0].toLowerCase() == letter[0].toLowerCase()
    );
}

function matchName(arrDrivers, string){

    return arrDrivers.filter(element => element.name.toLowerCase() == string.toLowerCase())
  }