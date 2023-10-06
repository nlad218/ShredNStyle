//based on user value clicking on a state
//create an event listener is going to based on that value the user selects, call a function that will render the resort info for just that state

async function resortDetail(event) {
  //statetext in local variable grabbing value of the user's selection and trimming white space out
  const stateText = event.target.textContent.trim();
  console.log(stateText);
  console.log(window.location.href);
  window.location.href += `/${stateText}`;
}

document
  .querySelector("#resort-search")
  .addEventListener("click", resortDetail);
