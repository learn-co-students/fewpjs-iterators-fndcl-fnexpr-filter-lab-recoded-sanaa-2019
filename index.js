// Code your solution here

let drivers= ['Jack', 'John', 'Sam', 'Tailor', 'Tom', 'Albert'];

function findMatching(x,name){
    let result= x.filter (index=>
        index.toLowerCase()===name.toLowerCase()
    )
    return result;
}
console.log(findMatching(drivers,'sam'));


function fuzzyMatch(x,litter){
    let result= x.filter(index=>
        index.startsWith(litter)
    )
    return result;
}
console.log(fuzzyMatch(drivers,'J'));


function matchName (x,y){
    let result= x.filter (index=>
        index.name ===y
    )
    return result;
}
console.log(matchName(drivers,'Tom'));