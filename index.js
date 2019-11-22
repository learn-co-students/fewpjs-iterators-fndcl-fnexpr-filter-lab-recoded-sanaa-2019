// Code your solution here

function findMatching(drivers, str){
 const newDriver = drivers.filter(e=>{
   return e.toUpperCase() == str.toUpperCase(); });
   return newDriver;
}

function fuzzyMatch (drivers, str){
  const newDriver = drivers.filter(e=>{
   return e[0].toUpperCase() == str[0].toUpperCase(); });
   return newDriver;
}

function matchName  (drivers, str){
  const newDriver = drivers.filter(e=>{
   return e.name.toUpperCase() == str.toUpperCase(); });
   return newDriver;
}