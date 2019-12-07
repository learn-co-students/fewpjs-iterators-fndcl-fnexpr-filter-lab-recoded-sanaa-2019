// Code your solution here
function findMatching(words, name) {
    return words.filter(function (word) {
        return word.toLowerCase() == name.toLowerCase();
    })
}


function fuzzyMatch(drivers , chr) {
    return drivers.filter(function (driver){
        return driver[0].toLowerCase() == chr[0].toLowerCase();
    });
}
function matchName(drivers  , name) {
    return drivers.filter(function(driver){
        return driver.name == name;
    });
}
