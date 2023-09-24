let theInput = document.getElementById("input");
let theSubmit = document.querySelector(".submit");
let inpOut = document.querySelector(".inp-out");
let theCopy = document.querySelector(".copy");

const handleInput = () => {
  let theValue = Number(theInput.value);
  inpOut.value = "";
  let allChar = "abcdefghijklmnopqrstuvwxyz123456789~!@#$%^&*()";
  let theStr = "";
  if (Number.isInteger(theValue)) {
    for (let i = 0; i < theValue; i++) {
      let theRandom = Math.floor(Math.random() * allChar.length);
      theStr += allChar[theRandom];
    }
  } else {
    alert("Please Write Number Data !!");
  }
  if (theInput.value != "") {
    theSubmit.innerHTML = "Loading...";
    document.querySelector(".sucess").classList.add("show");
    setTimeout(() => {
      inpOut.value = theStr;
      theSubmit.innerHTML = "Submit";
      document.querySelector(".sucess").classList.remove("show");
    }, 1600);
  } else {
    alert("Field The Input First !!");
  }
};

const handleCopy = () => {
  let theValue = inpOut.value;
  if (theValue != "") {
    navigator.clipboard.writeText(theValue).then(() => {
      theCopy.innerHTML = "It's Copied";
      setTimeout(() => (theCopy.innerHTML = "Copy Password"), 1500);
    });
  } else {
    alert("No Data To Copy It !!!");
  }
};

theSubmit.addEventListener("click", handleInput);
theCopy.addEventListener("click", handleCopy);
