window.addEventListener("DOMContentLoaded", function () {
  //counter
  //#region
  let personsInput = document.querySelectorAll(".counter-block-input")[0],
    daysInput = document.querySelectorAll(".counter-block-input")[1],
    placeInput = document.getElementById("select"),
    priceOutput = document.getElementById("total"),
    persons = 0,
    days = 0,
    priceToShow = 0,
    locationPrice = 1,
    // to change according to price 1 day for 1 person.
    //see html -> id="select" -> value="1" to increase costs for other places
    servicePrice = 2000;
  // function to check input != 0 or ""
  function checkInput() {
    return (
      daysInput.value == "" ||
      personsInput.value == "" ||
      daysInput.value == "0" ||
      personsInput.value == "0"
    );
  }
  // change event on persons field
  personsInput.addEventListener("change", function () {
    persons = +this.value;
    days = +daysInput.value;
    locationPrice = placeInput[placeInput.selectedIndex].value;
    priceToShow = days * persons * servicePrice * locationPrice; //customise price formula
    if (checkInput()) {
      priceOutput.innerText = 0;
    } else {
      priceOutput.innerText = priceToShow;
    }
    console.log(locationPrice);

  });
  // change event on days field
  daysInput.addEventListener("change", function () {
    days = +this.value;
    persons = +personsInput.value;
    locationPrice = placeInput[placeInput.selectedIndex].value;
    priceToShow = days * persons * servicePrice * locationPrice; //customise price formula
    if (checkInput()) {
      priceOutput.innerText = 0;
    } else {
      priceOutput.innerText = priceToShow;
    }
    console.log(locationPrice);

  });
  // change event on places field
  placeInput.addEventListener("change", function () {
    locationPrice = this[this.selectedIndex].value;
    if (checkInput(placeInput)) {
      priceOutput.innerText = 0;
    } else {
      let a = priceToShow;
      priceOutput.innerText = a * locationPrice;
    }
    console.log(locationPrice);
  });
  //#endregion
});
