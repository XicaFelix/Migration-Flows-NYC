# Where Are New Yorkers From?

## Project Description
<br></br>
### What is this Project About?

New York City is one of the most diverse and populous cities in the United States, let alone the World. However, NYC is changing. Like many other metropolitan cities in the US, New York has begun to see thousands of people leave for feeder-cities/suburbs as well as less populous states (cite). This is partially due the better cost of living in these places, as opposed to metro-cities (cite). The COVID-19 pandemic, and the mass lockdowns that ensued only served to speed up this effect. 

We can wonder what this effect looks like, or we can find out the answers for ourselves. 

With this project, I sought to investigate where people are leaving when they move to New York City, and where people are going if they chose to leave the Big Apple. 
<br></br>

### What the Application Does

- Users can choose a borough in NYC, which will filter the Census Migration Flows API based on the chosen borough
- A user can then search for any county in the US, and the application will: 
    - Return the number of people who moved to the chosen borough from that county, as well as
    - Return the number of people who left that borough, and moved to the specified county
    - Display a map for the state containing the specified county
<br></br>

## Top 3 Challenges
There were several challenging aspects to this project, here are the top 3:

1. Properly creating the JSON object, so that I could filter through it
2. Sequentially filtering the data, first by borough, then by county
3. Accesing the API data in the global scope
    * Data could get trapped in the 2 dependent fetch requests
<br></br>

## Future Features
- Display Recent Search History
- Update Search Function to:
    - Be Case Insensitive
    - Eliminate the Need to Include the word "county" 
    - Search Accurately From County Name Only (No State Name Needed)
        - Stretch Feature: Allow the Search Function to Auto-complete
    