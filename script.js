window.addEventListener("DOMContentLoaded", function () {
  //counter
  //#region
  let personsInput = document.querySelectorAll(".counter-block-input")[0],
    daysInput = document.querySelectorAll(".counter-block-input")[1],
    placeInput = document.getElementById("select"),
    priceOutput = document.getElementById("total");

  //values for calculation**
  const data = {
    persons: 0,
    days: 0,
    priceToShow: 0,
    locationPrice: 1,
    // to change according to price 1 day for 1 person.
    //see html -> id="select" -> value="1" to increase costs for other places
    servicePrice: 150,
  };
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
  const updateState = (input, value) => {
    data[value] = input.value;
    data.priceToShow =
      data.persons * data.days * data.locationPrice * data.servicePrice;
  };

  // change event on persons field
  personsInput.addEventListener("change", () => {
    updateState(personsInput, "persons");
    checkInput()
      ? (priceOutput.innerText = 0)
      : (priceOutput.innerText = `${data.priceToShow}$`);
  });

  // change event on days field
  daysInput.addEventListener("change", () => {
    updateState(daysInput, "days");
    checkInput()
      ? (priceOutput.innerText = 0)
      : (priceOutput.innerText = `${data.priceToShow}$`);
  });

  // change event on places field
  placeInput.addEventListener("change", () => {
    updateState(placeInput, "locationPrice");
    checkInput()
      ? (priceOutput.innerText = 0)
      : (priceOutput.innerText = `${data.priceToShow}$`);
  });
  //#endregion
});
