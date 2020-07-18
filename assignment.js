    //Answer to the question number: 1

function feetToMile(feet){
    
        var mile = feet/5280;
    return mile;
    
    }
        var inquiry = feetToMile(44000);
        var inquiry =inquiry.toFixed(2);
    if(inquiry < 0 ){
        console.log("Sorry according to wikipedia unit can not be any negative value.");
    
    return inquiry;
    }
        console.log( 'Mile:', inquiry);



    //Answer to the question number : 2

function woodCalculator(chair,table,bed){
        var woodForChair = chair * 1;
        var woodForTable = table * 3;
        var woodForBed   = bed   * 5;
        var total= woodForChair + woodForTable + woodForBed;
     return total;
}
        var totalWoodNeed = woodCalculator(3,1,2);
        console.log(totalWoodNeed);



    

    //Answer to the question number : 3

function brickCalculator(floor){
     if( floor == 10 || floor < 10 ){
         var result = (floor*15)*1000;
     }
     else if( floor ==20 || floor <20){
         var result =(floor*12)*1000;
     }
     else if( floor >20 ){
         var  result =(floor*10)*1000;
     }
     return result;
 }       
         var brickNeed = brickCalculator(45);
 
         console.log(brickNeed);
         


     //Answer to the question number : 4
     

 function tinyFriend(friend){
        var smallestName =friend[0];
        var firstName= smallestName.length;

    for (i = 0; i<friend.length;i++){
        var name = friend[i];
        var word =name.length; 
    
    if(word < firstName){
        smallestName = name;
    }
}
    return smallestName;
}

        var classmate =['rupon','lupa','jas'];

        var result =tinyFriend(classmate);
        console.log("Smallest name among my friends:",result);
