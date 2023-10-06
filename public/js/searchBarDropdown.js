/*the autocomplete function takes two arguments,
the text field element and an array of possible autocompleted values:*/
function autocomplete(inp, arr) {
  let currentFocus;

  //execute a function when someone writes in the text field
  inp.addEventListener("input", function () {
    var a,
      b,
      i,
      val = this.value;
    //closing any currently opened lists
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;

    // Creating a div element that will contain the list of items//
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");

    //appending the div element as a child of the autocompete container
    this.parentNode.appenchChild(a);

    //for each item in the array =

    for (let i = 0; i < array.length; i++) {
      //if array at the i index after being uppercased, starts with the same value as the user gave (uppercased) then
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        //if truthy create a div element for each matching element
        b = document.createElement("DIV");

        //Can i use something instead of innerhtml?
        //make the matching letters bold
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          //closing the list
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
}


//event listener for the keys when there pressed
//close all list function 
//w3 talks about add and remove active? ask about this later