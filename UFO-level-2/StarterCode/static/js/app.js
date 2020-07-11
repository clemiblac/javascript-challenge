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
  var inputDate = d3.select("#datetime");
  var inputCountry = d3.select("#country");

  // Get the value property of the input element
  var inputValueDate = inputDate.property("value");
  var inputValueCountry = inputCountry.property("value");

  
 // Use the form input to filter the data by date
 function selectDate(info){
  return info.datetime == inputValueDate;
  }

  function selectCountry(info){
  return info.country == inputValueCountry;
  }

  //function getValues() {
    //return [selectDate(), selectCountry()];
  //}



  var sightingDate = tableData.filter(selectDate);
  var sightingCountry=tableData.filter(selectCountry);
  var multiplefilters = tableData.filter(info => info. );
  //var multiplefilters=tableData.filter(selectDate && selectCountry);

  console.log("Get values")
  console.log(sightingDate);
  console.log(sightingCountry);
  console.log("-----------Get miltifilters----------")
  console.log(multiplefilters);

  


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
