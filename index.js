// Code your solution here
let drivers=[
    "Mohammed","Ali","Amro"
]
let driverss=[
    {
        name:"Mohammed",
        age:"25"
    }
    ,{
        name:"amro",
        age:"256",

    }
    ,{
        name:"Sweet",
        age:Infinity
    }
]

function findMatching(arr,string){
return arr.filter(ele=>ele.toLowerCase()===string.toLowerCase());
}
console.log(findMatching(drivers,"mohammed"));

function fuzzyMatch(arr,string){
    return arr.filter(ele=>ele.charAt(0).toLowerCase()===string.charAt(0).toLowerCase(0))
}
console.log(fuzzyMatch(drivers,"hkram"));

function matchName(arr,string){
    return arr.filter(function(ele){
        return  ele.name.toLowerCase()===string.toLowerCase();
    })
}
console.log(matchName(driverss,"Amro"));