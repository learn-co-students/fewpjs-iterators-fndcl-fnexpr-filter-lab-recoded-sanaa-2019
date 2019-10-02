// Code your solution here

function findMatching(words, name) {
    return words.filter(function (word) {
        return word.toLowerCase() == name.toLowerCase();
    })
}


function fuzzyMatch(driversList , chr) {
    return driversList.filter(function (driverName){
        return driverName[0].toLowerCase() == chr[0].toLowerCase();
    });
}
function matchName(driversList  , name) {
    return driversList.filter(function(driverName){
        return driverName.name == name;
    });
}