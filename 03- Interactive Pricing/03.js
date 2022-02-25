const pageviewValues = ["10K", "50K", "100K", "500k", "1M"];
const billValues = ["$8.00", "$12.00", "$16.00", "$24.00", "$36.00"];
const dicsountValues = ["$6.00", "$8.00", "$12.00", "$18.00", "$27.00"];

const pageviews = document.querySelector("#pageviews");
const bill = document.querySelector("#bill");
const rangeSlider = document.querySelector("#range-slider");
const billCheckbox = document.querySelector("#bill-checkbox");

function priceHandler() {
  pageviews.innerHTML = pageviewValues[rangeSlider.value - 1];
  if (billCheckbox.checked) {
    bill.textContent = dicsountValues[rangeSlider.value - 1];
  } else {
    bill.textContent = billValues[rangeSlider.value - 1];
  }
}

rangeSlider.addEventListener("change", priceHandler);
