//Shared storage function
const STORAGE_KEY = "teamsData";

//loads the team data from local storage 
function getTeams() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}

//saves the updated teams data to local storage
function saveTeams(teams) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(teams));
}