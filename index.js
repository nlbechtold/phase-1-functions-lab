function distanceFromHqInBlocks(numBlock) {
    if(numBlock < 42) {
        return 42- numBlock;
    }
    return numBlock - 42; 
    
}
function distanceFromHqInFeet(numBlock2) {
    if(numBlock2 < 42) {
        return (42- numBlock2) * 264;
    }
    return (numBlock2 - 42) *264;
}
function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) * 264;
    }
   
    return (start - destination) * 264;
}


function calculatesFarePrice(start, destination) {
    let price
        if (distanceTravelledInFeet(start, destination) <= 400) {price = 0;} 
        else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000)
         {price = (distanceTravelledInFeet(start, destination) -400)*.02;} 
        else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500)
             {price = 25;}
         else if (distanceTravelledInFeet(start, destination) >2500) {price = "cannot travel that far";}
         return price
      }

