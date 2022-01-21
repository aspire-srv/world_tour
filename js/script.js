


// ============ generating UI for all counteries ============ //

function generateUI(data){
    //  console.log(data);
     document.querySelector(".all").style.display = "flex";
     document.querySelector(".dropdown").style.display = "flex"
       var card = `<div class="col-lg-3 col-md-4 cards-image">
       <div class="card mb-5" style="width: 16rem; height:20rem;">
           <img src="${data.flags.png}" id="flag" name='${data.name}' class="card-img-top img-fluid" alt="${data.name}">
           <div class="card-body">
             <h5 class="card-title">${data.name}</h5>
             <p class="card-title">Capital : ${data.capital}</p>
             <p class="card-title">Population :  ${data.population}</p>
           </div>
         </div>
   </div>`
   document.querySelector(".all").innerHTML += card;
  //  document.querySelector(".row-2").style.display = "none";
}


// =================== All counteries data from rest API ============== //

const getData = async function(){
    const countryData = await fetch("https://restcountries.com/v2/all");
    const jsonCountryData = await countryData.json();
    // console.log(countryData);
    // console.log(jsonCountryData[1]);
    jsonCountryData.forEach(element => {
        generateUI(element);
    });
    
}



 getData();


// ====== dark Mode ========



 var darkModeBtn = document.querySelector(".dark-mode")
 var darkOn = true;
 var lightMode = document.querySelector(".light-mode")
 lightMode.style.display = "none"

darkModeBtn.addEventListener("click", function(){
  // console.log("clicked");
    document.querySelector("body").classList.add("dark");
    // document.querySelector(".container").classList.add("dark");
    // document.querySelector(".navbar").classList.add("dark");
    document.querySelector(".navbar").style.backgroundColor = "#2b3945";
    document.querySelector(".brand").style.color = "#fff";
    elements = document.getElementsByClassName("card");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="#2b3945";
    }
    // document.querySelector(".card").style.backgroundColor = ;
    darkModeBtn.style.display = "none";
    lightMode.style.display = "flex";
    lightMode.style.color = "yellow";

  })

  lightMode.addEventListener("click", function(){
    
    document.querySelector("body").classList.remove("dark");
    // document.querySelector(".container").classList.remove("dark");
    // document.querySelector(".navbar").classList.remove("dark");
    document.querySelector(".navbar").style.backgroundColor= "#fff"
    document.querySelector(".navbar").style.color = "#000"
    document.querySelector(".brand").style.color = "#000";
    elements = document.getElementsByClassName("card");
    // console.log(elements);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="#fff";
    }
    // document.querySelector(".card").style.backgroundColor = "#fff"
    darkModeBtn.style.display = "flex"
    lightMode.style.display = "none";
})




// ============= Generating UI for clicked country ========== //


function generateCountryUI(data){
    // console.log(data);
    document.querySelector(".inputField").style.display = "none";
    // document.querySelector(".row-2").style.display = "none";
    // card for single country
    var card = `<div class="row pt-5 gx-5">
    <div class="col-lg-6">
      <img src="${data.flags.png}" id="flag" class="card-img-top img-fluid"  alt="${data.name.common} Flag Image">
    </div>
    <div class="col-lg-6">
      <div class="row">
        <div class="col-lg-12 p-3">
          <h1 class="card-title dsiplay-4 mt-2">${data.name.common}</h1>
        </div>
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6">
            <p class="card-title">Capital : ${data.capital}</p>
            <p class="card-title">Population :  ${data.population}</p>
            <p class="">Continent : ${data.continents[0]}</p>
            <p class="card-title">Population :  ${data.population}</p>
            </div>
            <div class="col-lg-6">
              <p class="card-title">Area : ${data.area}</p>
              <p class="card-title">Region :  ${data.region}</p>
              <p class="">Subregion : ${data.subregion}</p>
          <a href="${data.maps.googleMaps}" target="_blank" class="text-center">Map link</a>
            </div>
            
          </div>

        </div>
        <div class="col">

        </div>
      </div>
    </div>
    <div>
        <button id="back-btn" class="btn btn-warning mt-5">Back</button>
        </div>
  </div>`
;

// changing html in dom
document.querySelector(".row-2").innerHTML = card;
}


// ========= click function on card ======================= //

document.body.addEventListener( 'click', async function ( event ) {
    // console.log(event.target);
  

    if( event.target.id == 'flag' ) {
      document.querySelector(".row-2").style.display = "block";
      document.querySelector(".dropdown").style.display = "none";

      // fetching data from api
        const countryData1 = await fetch(`https://restcountries.com/v3.1/name/${event.target.name}`);
        // converting data to json
        const jsonCountryData2 = await countryData1.json();
        // console.log(jsonCountryData2[0]);

        // display none of all counteries
      document.querySelector(".row").style.display = "none";
      document.querySelector(".region").style.display = "none";
      // providing data to generateCountryUI function
        generateCountryUI(jsonCountryData2[0])
      
    };


    

    // back button

    if(event.target.id == 'back-btn'){
      document.querySelector(".inputField").style.display = "flex";
      document.querySelector(".row-2").style.display = "none";
      document.querySelector(".all").style.display = "flex";
      document.querySelector(".region").style.display = "none";
      document.querySelector(".dropdown").style.display = "flex";
    }
  
  } );



  // ================  generate UI by Region =======================


 function generateByRegionUI(data){
  console.log(data);
  document.querySelector(".all").style.display = "none";
  document.querySelector(".region").style.display = "flex"
  var card = `<div class="col-lg-3 col-md-4">
  <div class="card mb-5" style="width: 16rem; height:20rem;">
      <img src="${data.flags.png}" id="flag" name='${data.name.common}' class="card-img-top img-fluid" alt="${data.name.common}">
      <div class="card-body">
        <h5 class="card-title">${data.name.common}</h5>
        <p class="card-title">Capital : ${data.capital ? data.capital[0] : " " }</p>
        <p class="card-title">Population :  ${data.population}</p>
      </div>
    </div>
</div>`;

document.querySelector(".region").innerHTML += card;

 }


  const getDataByRegion = async function(name){
  // console.log(name);
    const countryDataByRegion = await fetch(`https://restcountries.com/v3.1/region/${name}`)
    const JsonCountryDataByRegion  = await countryDataByRegion.json();
    // console.log(JsonCountryDataByRegion);
    JsonCountryDataByRegion.forEach(element => {
      generateByRegionUI(element)
    });
  }

var selectedRegion = document.getElementsByClassName("dropdown-item");


for(var i = 0; i<selectedRegion.length; i++){

    selectedRegion[i].addEventListener("click", function(e){
      if(e.target.name == "All"){
        document.querySelector(".region").innerHTML = "";
        getData();
      } else{
        document.querySelector(".region").innerHTML = "";
        // console.log(e.target.name);
        getDataByRegion(e.target.name);
      }
    
    })
}


//used in search bar and show items according to user demand
document.querySelector("#search").addEventListener("input", filterCards);

function filterCards() {
  const searchInput = document.querySelector("#search");
  const filter = searchInput.value.toLowerCase();
  const titles = document.querySelectorAll(".cards-image");
  titles.forEach((item) => {
    let text = item.textContent;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}






  // https://restcountries.com/v3.1/region/{region}
