//console.log("is our script file working");
//load the airtable library, call it airtable;
let airtable = require("airtable")
console.log(airtable);

// use the airtable library to connect to our base
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyYYTnth0cc4iU3Z'}).base('apps0SfuzuzykUNph');

//get our collection base select all the records
//specify functions
base("bags")
  .select({})
  .eachPage(gotPageOfBags, gotAllBags);

// an empty array to hold our data
var bags = [];

// callback function that receives our data
function gotPageOfBags(records, fetchNextPage) {
  console.log("gotPageOfBags()");
  // add the records from this page to our bags array
  bags.push(...records);
  // request more pages
  fetchNextPage();
}
// call back function that is called when all pages are loaded
function gotAllBags(err) {
  console.log("gotAllbags()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the bags
  consoleLogbags();
   try {
    showbags();
  } catch (e) {
    console.log(e);
  }
}

// just loop through the bags and console.log them
function consoleLogbags() {
  console.log("consoleLogbags()");
  bags.forEach(bag => {
    console.log("bag:", bag);
  });
}

// loop through the bags, create an h2 for each one, and add it to the page
function showbags() {
  console.log("showbags()");
  bags.forEach(bag => {

    
  
   var bagContainer = document.createElement("div");
   bagContainer.classList.add("bag-container");
   document.querySelector(".container").append(bagContainer);

   var bagTitle = document.createElement("h1");
    bagTitle.classList.add("bag-title");
    bagTitle.innerText = bag.fields.bag;
    bagContainer.append(bagTitle);
    
  var bagSize = document.createElement("h1");
    bagSize.classList.add("bag-size");
    bagSize.innerText = bag.fields.size;
    bagContainer.append(bagSize);

    var bagDescription = document.createElement("p");
    bagDescription.classList.add("bag-description");
    bagDescription.innerText = bag.fields.description;
    bagContainer.append(bagDescription);

    var bagImage = document.createElement("img");
    bagImage.classList.add("bag-image");
    bagImage.src = bag.fields.image[0].url;
    bagContainer.append(bagImage); 
    
              
    var bagSize = bag.fields.size;
    bagContainer.classList.add(bagSize);

    bagContainer.addEventListener("click", function(event){
      bagDescription.classList.toggle("active");
      bagTitle.classList.toggle("active");
      bagContainer.classList.toggle("active");
      bagImage.classList.toggle("active");
    
    });
    
   
      // get genre field from airtable
    // loop through the array and add each genre as
    // a class to the bag container
    
    // var bagSize = bag.fields.size;
    //  bagSize.forEach(function(size){
    //   bagContainer.classList.add(size);  
    // });

  // var bagSize = bag.fields.size;
  //   bagContainer.forEach(function(size){
  //       bagContainer.classList.add(size);
  //   })
  
     
    // clicking on filter by x-small
    // change display
    var filterXSmall = document.querySelector(".js-x-small");
    filterXSmall.addEventListener("click", function() {
      if (bagContainer.classList.contains("x-small")) {
        bagContainer.style.display = "block";
      } else {
        bagContainer.style.display = "none";
      }
    });

    // filter by small
    var filterSmall = document.querySelector(".js-small");
    filterSmall.addEventListener("click", function() {
      if (bagContainer.classList.contains("small")) {
        bagContainer.style.display = "block";
      } else {
        bagContainer.style.display = "none";
      }
    });

    // filter by medium
    var filterMedium = document.querySelector(".js-medium");
    filterMedium.addEventListener("click", function() {
      if (bagContainer.classList.contains("medium")) {
        bagContainer.style.display = "block";
      } else {
        bagContainer.style.display = "none";
      }
    });

    // filter by large
    var filterLarge = document.querySelector(".js-large");

    filterLarge.addEventListener("click", function() {
      if (bagContainer.classList.contains("large")) {
             bagContainer.style.display = "block";
      } else {
        bagContainer.style.display = "none";
      }
    });

    // filter by x-large
    var filterXLarge = document.querySelector(".js-x-large");

    filterXLarge.addEventListener("click", function() {
      if (bagContainer.classList.contains("x-large")) {
             bagContainer.style.display = "block";
      } else {
        bagContainer.style.display = "none";
      }
    });

    // filter reset
    var filterReset = document.querySelector(".js-reset");
    filterReset.addEventListener("click", function() {
      bagContainer.style.display = "block";
    });
  });
  
}


