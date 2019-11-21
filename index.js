// Code your solution here
function findMatching(drivers,name){
return drivers.filter(drivermach=>
drivermach.toLowerCase()===name.toLowerCase());
}

function fuzzyMatch(drivers, testString) {
  return drivers.filter( drivermach =>
    drivermach.toLowerCase().indexOf(testString.toLowerCase()) === 0
  )
}
function matchName(drivers, string) {
  return drivers.filter( drivers =>
    drivers.name === string
  )
}
