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
    const formInput = document.getElementById('county-name');
     formInput.value = '';
     const mapDiv = document.getElementById('results-map');
    mapDiv.innerHTML = '';
     const resultsDiv = document.getElementById('Migration-Results');
//    console.log(censusData);
    let selectedBorough = dropDown.selectedOptions[0].text;
    let matchingState = censusData.find(item=> item[0] === countyName);
    displayResults(matchingState, selectedBorough);
   
    let stateName = countyName.split(', ')[1]
    console.log(stateName.length);
    console.log(`Logging State Name: ${stateName}`);
    fetch('http://localhost:3000/states').then(resp=>resp.json()).then((data1)=>{
        console.log(data1[0][0]);
        let jsonState = data1.find(item=> item[0]===stateName);
        displayMap(jsonState);
        });
    })
   
function displayResults(state, county){
    const resultTable = document.getElementById('results-table');
    const migrationInHeader = resultTable.rows[0].cells[0];
    migrationInHeader.textContent = `Moved From ${state[0]} to ${county}: `;
    const migrationOutHeader = resultTable.rows[1].cells[0]
    migrationOutHeader.textContent = ` Moved To ${state[0]} from ${county}: `;
    const migrationInValue = resultTable.rows[0].cells[1];
    migrationInValue.textContent = state[1];
    const migrationOutvalue = resultTable.rows[1].cells[1];
    migrationOutvalue.textContent = state[2];
}

function displayMap(state){
    const mapDiv = document.getElementById('results-map');
    let stateMap = document.createElement('img');
    stateMap.id = 'state-map'
    stateMap.src = state[1];
    const mapTitle = document.createElement('h3');
    mapTitle.textContent = `MAP of ALL COUNTIES IN ${state[0]}`;
    mapDiv.append(mapTitle, stateMap);  
}