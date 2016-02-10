//parsing function to create datasets

var parser = function(input) {
    console.log(new Date().getFullYear())
    var result = [];
    console.log(input.length)
    
    for(var i = 0; i < input.length; i++) {
        var parsedArray = [];
        
        parsedArray.push(input[i].FIELD1);
        if(input[i].FIELD2 > 0) {
            parsedArray.push(input[i].FIELD2);
        } else {
            parsedArray.push(new Date().getFullYear());
        }

        parsedArray.push(input[i].FIELD3);
        if(input[i].FIELD6.length > 0) {
            parsedArray[2] = parsedArray[2].concat(" " + input[i].FIELD4 + " " + input[i].FIELD5 + " " + input[i].FIELD6)
        } else if(input[i].FIELD5.length > 0) {
            parsedArray[2] = parsedArray[2].concat(" " + input[i].FIELD4 + " " + input[i].FIELD5 )
        } else {
            parsedArray[2] = parsedArray[2].concat(" " + input[i].FIELD4)
        }
        
        result.push(parsedArray)
    }
    
    return result;
}