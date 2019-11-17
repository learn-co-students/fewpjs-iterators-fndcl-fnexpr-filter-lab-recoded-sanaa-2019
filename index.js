// // Code your solution here

function findMatching(string,driver){

    let array=string.filter(item =>{
      
        return item.toUpperCase()===driver.toUpperCase()

    })

    return array;
}
 
function fuzzyMatch(string,driver){

    let array=string.filter(item => {

        return item.charAt(0) == driver.charAt(0)
    })

    return array
}
 
function matchName(string,driver){
    let array=string.filter(item =>{

        return item.name===driver
    })
    return array
}
   
