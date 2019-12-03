// Code your solution here
function findMatching(drivers, string) {
return drivers.filter(available  => 
available .toLowerCase() === string.toLowerCase());
}
function fuzzyMatch(drivers, string) {
return drivers.filter(available  => 
available .startsWith(string));
}
function matchName(drivers, string) {
return drivers.filter(available  => 
available .name === string);
}
