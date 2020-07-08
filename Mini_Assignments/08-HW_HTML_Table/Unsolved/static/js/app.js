// Use D3 to select the table
var studenttable=d3.select("#student-table");

// Use D3 to select the table body
var tbody=d3.select("#student-tbody");

// Use D3 to set the table class to `table table-striped`
var tablestyle=d3.select(".grades").attr("class","table table-striped")
// Use a forEach function to loop through the array of objects (from your data)
grades.forEach((studentgrade) => {
  console.log(studentgrade);
  
  // Append one table row per student/grade
  var row = tbody.append("tr");

  // Assign values to the `student` name variable and the `grade` variable
  Object.entries(studentgrade).forEach(function([key, value]) {
    console.log(key, value);



  // append one cell for the student and one cell for the grade
  var cell = row.append("td");
  cell.text(value);

  });
});
