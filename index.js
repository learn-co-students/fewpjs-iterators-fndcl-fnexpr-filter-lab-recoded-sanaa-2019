// Code your solution here


function findMatching(drivers, str) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase() == str.toLowerCase();
    })
}


function fuzzyMatch(drivers, str) {
    return drivers.filter(function (driver) {
        return driver[0].toLowerCase() == str[0].toLowerCase();
    });
}
function matchName(drivers, str) {
    return drivers.filter(function (driver) {
        return driver.name == str;
    });
}