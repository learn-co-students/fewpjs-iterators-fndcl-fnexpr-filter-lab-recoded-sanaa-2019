// Code your solution here
function findMatching(drivers, qoute) {
    return drivers.filter(data => data.toLowerCase() === qoute.toLowerCase());
};
function fuzzyMatch(drivers, qoute) {
    return drivers.filter(data => data.startsWith(qoute));
};
function matchName(drivers, qoute) {
    return drivers.filter(data => data.name === qoute);
};
