function timeConversion(s) {
    // Write your code here
    var removeLastChar;

    if(s.includes("PM")){
        var firstChar = s.slice(2);
        firstChar = firstChar.slice(0, firstChar.length - 2)
        var time = parseInt(s.slice(0,2)) + 12;
        removeLastChar = time + firstChar;
    }else if(s.includes("AM")){
        var firstChar = s.slice(0,2);

        if(firstChar == 12){
            var firstChar = s.slice(2);
            removeLastChar = "00" + firstChar;
            removeLastChar = s.slice(0, s.length - 2); 
        }else{  
            removeLastChar = s.slice(0, s.length - 2); 
        }
    }
    return removeLastChar;
}