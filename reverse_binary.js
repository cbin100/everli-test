function reverseNumberInBinary(theNumber) {
    let binaryRepresentation = theNumber.toString(2).split('').join(''); // Get the binary representation
    let reversedNumber = binaryRepresentation.toString().split('').reverse().join('') // reversing the variable binaryRepresentation
    let correspondingNumber = parseInt(reversedNumber, 2); // get the corresponding number
    return 'The binary representation of ' + theNumber + ' is ' + binaryRepresentation + ' and reversing it gives ' + reversedNumber + ' which corresponds to number ' + correspondingNumber;
}

//Example
// The function can be called like this:
// reverseNumberInBinary(13)

/*
Or in HTML file, the function can be called like this:
<div id="root">
    <script>
        document.getElementById("root").innerHTML = reverseNumberInBinary(13);
    </script>

</div>
*/
