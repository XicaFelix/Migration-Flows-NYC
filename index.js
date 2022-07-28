// Adding Event Listener to Hide/Show the Tableau Dashboard
const tableauBtn = document.getElementById('tableau-btn');
tableauBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    let dashboardDiv = document.getElementById('Tableau-Container');
    if (dashboardDiv.style.display==='none') {
        dashboardDiv.style.display = 'block';
    } else {
        dashboardDiv.style.display = 'none';
    }
})

// Adding Event Listener to Drop Down Menu
const dropDown = document.getElementById('county-selection');
dropDown.addEventListener('change', (event)=>{
    event.preventDefault();
    console.log(event.target.value);
    dropDownValue = event.target.value;
    fetch(`https://api.census.gov/data/2019/acs/flows?get=FULL2_NAME,MOVEDIN,MOVEDOUT,MOVEDNET,GEOID1,GEOID2&for=county:${dropDownValue}&in=state:36`)
    .then(resp=>resp.json())
    .then(data=>renderFlows(data));
})

let censusData = [];

function renderFlows(data){
    console.log(data.slice(0,10));
    censusData = data.slice(1);
    // console.log(`Census Data: ${censusData[0]}`);
    return censusData;
}



// Adding Event Listener to the Submit Form
const submitForm = document.getElementById('county-form');
submitForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    // console.log(event.target[0].value);
   let countyName = String(event.target[0].value);
//    console.log(censusData);

    censusData.forEach((item)=>{
        let county = item[0];
        if (item[0]=== countyName) {
            console.log(item);
            let migrationIn = document.createElement('li');
            let migrationOut = document.createElement('li');
            migrationIn.textContent = `${item[1]} people have moved from ${item[0]}`;
            migrationOut = `${item[2]} have moved to ${item[0]}`;
            const resultsList = document.getElementById('results-list');
            resultsList.append(migrationIn, migrationOut);

        }else{
            confirm("No Results for Your Search");
        }
    })
   
})
