//function takeANumber(katzDeli, newCustomer) {
    
  //  if (katzDeli.length > 0);
    //    katzDeli.push(newCustomer);
      //  return ('Welcome, ' + newCustomer + '. You are number ' //+ katzDeli.length + ' in line.')
//}
// katzdeli is empty array
let num = 0;
function takeANumber (katzDeli){
  
  
  num++;
  katzDeli.push(num);
  return 'you are number' + num;

}


// 1. Declare our function - accepts 2 parameters - katzDeli & newCustomer
// 2. Check our conditionals - if katzDeliLength.length > 0
// 3. Push our new customer to the end of the Array 
// 4. Return our string that outputs the position of the new customer
// 5. Test our function - make sure to pass arguments through the function 
// The push() method adds new items to the end of an array, and returns the new length.

function nowServing (katzDeliLine) { 
  
     if(katzDeliLine.length===0) {
        return 'There is nobody waiting to be served!'; 
     }
 
    var customer = katzDeliLine.shift(); 
        return "Currently serving " + customer + "."; 
}

// Declare our function - taking our perameter - current line = katzDeliLine
// //2. Check our conditionals - if equal to 0 - return "There is nobody waiting to be served!"
// //3. Remove first person from the line and return string
// //4. Return string "Currently serving - first person with customer name"
// //5. Test our fuction - make sure it works!
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.


var currentLine = function (katzDeliLine) {
     if (katzDeliLine.length===0) {
        return "The line is currently empty.";
    }
    
    var customerAndNumber = [];
    for (var i=0; i<katzDeliLine.length; i++) {
        customerAndNumber.push(i + 1 + ". " + katzDeliLine[i])
    }
    
    return "The line is currently: " + customerAndNumber.join(", ");
}

 //. Declare our function - currentLine - take in the parameter katzDeliLine
// 2. Check our condistionals - if equal to 0 - return "The line is currenlty empty."
// 3. loop through our array = our current deli line / katzDeliLine
// 4. Push the customer and taking the index / their current position in line - 
// 5. Return string - by joining all the elements of the array using .join method
//The join() method joins the elements of an array into a string, and returns the string.
