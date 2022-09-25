// Set Up Array of Triangles
const triangles = Array(19).fill(1).map((_,i) => i*(i+1)/2);

// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.length == 0 || num<1 || num>1786 || (num.length>1 && num[0] == "0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 1 and 1786.  Do not include leading zeros.`;
    } else {
        txt += `You have entered the number ${num}.<p>`;
        txt += `Number of Triangle Words - ${codedTriangleNumbers(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}