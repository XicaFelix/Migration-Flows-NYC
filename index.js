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
    
})