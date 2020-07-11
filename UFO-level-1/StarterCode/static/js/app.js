// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the button
// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {


  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Use the form input to filter the data by date
  function selectDate(dt){
    return dt.datetime == inputValue;
  }
  var sightingDate = tableData.filter(selectDate);

  console.log(sightingDate);

  console.log("----------- Hello-----------------")
  // Use D3 to select the table
  var ufotable=d3.select("#ufo-table");

  // Use D3 to select the table body
  var tbody=d3.select("#table-body");
  tbody.html("")
  
  // Use a forEach function to loop through the array of objects (from your data)
  sightingDate.forEach((ufo) => {
    console.log(ufo);
    
    // Append one table row per ufo sighting
    var row = tbody.append("tr");
  
    // Assign values to the variables
    Object.entries(ufo).forEach(function([key, value]) {
      console.log(key, value);
  
      // append one cell for the variables
      var cell = row.append("td");
      cell.text(value);
      
    });
    
})
}
