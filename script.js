window.addEventListener("DOMContentLoaded", function () {
  //counter
  //#region
  let personsInput = document.querySelectorAll(".counter-block-input")[0],
    daysInput = document.querySelectorAll(".counter-block-input")[1],
    placeInput = document.getElementById("select"),
    priceOutput = document.getElementById("total"),
    //values for calculation**
    persons = 0,
    days = 0,
    priceToShow = 0,
    locationPrice = 1,
    // to change according to price 1 day for 1 person.
    //see html -> id="select" -> value="1" to increase costs for other places
    servicePrice = 150;
  //**values for calculation

  // function to check input != 0 or ""
  function checkInput() {
    return (
      daysInput.value == "" ||
      personsInput.value == "" ||
      daysInput.value == "0" ||
      personsInput.value == "0"
    );
  }

  //function to update values for calculation
  function updateValues() {
    days = daysInput.value;
    persons = personsInput.value;
    locationPrice = placeInput[placeInput.selectedIndex].value;
    priceToShow = days * persons * servicePrice * locationPrice;
  }

  // change event on persons field
  personsInput.addEventListener("change", function () {
    updateValues();
    if (checkInput()) {
      priceOutput.innerText = 0;
    } else {
      priceOutput.innerText = `${priceToShow}$`;
    }
    console.log(priceToShow);
    console.log(locationPrice);
  });

  // change event on days field
  daysInput.addEventListener("change", function () {
    updateValues();
    if (checkInput()) {
      priceOutput.innerText = 0;
    } else {
      priceOutput.innerText = `${priceToShow}$`;
    }
    console.log(priceToShow);
    console.log(locationPrice);
  });

  // change event on places field
  placeInput.addEventListener("change", function () {
    updateValues();
    if (checkInput()) {
      priceOutput.innerText = 0;
    } else {
      priceOutput.innerText = `${priceToShow}$`;
    }
    console.log(priceToShow);
    console.log(locationPrice);
  });
  //#endregion
});
