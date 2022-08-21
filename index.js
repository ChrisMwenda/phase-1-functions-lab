function distanceFromHqInBlocks (street){
  let result;
  result=street<=42?42-street:street-42
  return result;
}
distanceFromHqInBlocks(50);

function distanceFromHqInFeet (street){
   let result;
   result= distanceFromHqInBlocks(street)*264
   return result;
}
function distanceTravelledInFeet (HQ,street){
    let result1;
    result1=street<=HQ?HQ-street:street-HQ;
    let result2;
    result2=result1*264
    return result2;
}
distanceTravelledInFeet(42,50);

function calculatesFarePrice(HQ,street){
   if(distanceTravelledInFeet(HQ,street)<=400) {
    return 0
   }
   else if(distanceTravelledInFeet(HQ,street)>400&&distanceTravelledInFeet(HQ,street)<=2000){
return (distanceTravelledInFeet(HQ,street)-400)*0.02
   }
   else if(distanceTravelledInFeet(HQ,street)>2000&&distanceTravelledInFeet(HQ,street)<=2500){
    return 25
       }
    else return ('cannot travel that far')
}
calculatesFarePrice(34,32);
