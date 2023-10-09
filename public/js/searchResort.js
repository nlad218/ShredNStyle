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




  
// Adding an event listener that triggers when the whole html is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Retrieve all elements with the class 'dropdown-item'
  const dropdownItems = document.getElementsByClassName("dropdown-item");

  // Create an object to store unique states
  const uniqueStates = {};

  // Loop through each dropdown item
  for (const item of dropdownItems) {
    // Get the state abbreviation from the 'data-resort' attribute
    const stateAbbreviation = item.getAttribute("data-resort");
    // Store the state abbreviation as a key in the uniqueStates object
    uniqueStates[stateAbbreviation] = true;
  }

  // Define the resorts array with state and abbreviation properties
  let resorts = [
    { state: "California", abbreviation: "CA" },
    { state: "Colorado", abbreviation: "CO" },
    { state: "Wyoming", abbreviation: "WY" },
    { state: "Alaska", abbreviation: "AK" },
    { state: "Vermont", abbreviation: "VT" },
    { state: "Washington", abbreviation: "WA" },
    { state: "Oregon", abbreviation: "OR" },
    { state: "Montana", abbreviation: "MT" },
  ];

  // Sort the resorts array alphabetically by the state name
  resorts.sort((a, b) => a.state.localeCompare(b.state));

  // Get the dropdown menu element by its ID
  const dropdownMenu = document.getElementById("resort-search");

  // Filter out duplicate resorts based on the abbreviation property
  const uniqueResorts = resorts.filter((resort, index, self) => {
    return (
      index === self.findIndex((r) => r.abbreviation === resort.abbreviation)
    );
  });

  // Create dropdown menu items for each unique resort
  for (const resort of uniqueResorts) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.classList.add("dropdown-item");
    link.setAttribute("data-resort", resort.abbreviation);
    link.textContent = resort.state;
    listItem.appendChild(link);
    dropdownMenu.appendChild(listItem);
  }

  // Add a click event listener to the dropdown menu
  dropdownMenu.addEventListener("click", (event) => {
    // Get the selected state abbreviation from the clicked item
    const selectedStateAbbreviation = event.target.getAttribute("data-resort");
    if (selectedStateAbbreviation) {
      // Find the selected resort object from the resorts array
      const selectedState = resorts.find(
        (resort) => resort.abbreviation === selectedStateAbbreviation
      );
      if (selectedState) {
        // Redirect to a different page with the selected state abbreviation in the URL
        window.location.href = `/resort/${selectedState.abbreviation}`;
      }
    }
  });
});
