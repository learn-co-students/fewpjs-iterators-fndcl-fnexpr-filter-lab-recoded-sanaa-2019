// Code your solution here
function fuzzyMatch(drivers, string) {
    return drivers.filter(function (driver) {
        return driver[0].toLowerCase() == string[0].toLowerCase();
    })
}


function findMatching(drivers, strong) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase() == string.toLowerCase();
    })
}


function matchName(drivers, string) {
    return drivers.filter(function (driver) {
        return driver.name == string;
    })
} 