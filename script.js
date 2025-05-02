// Shared storage functions
const STORAGE_KEY = "teamsData";

// Load team data
function getTeams() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}

// Save team data
function saveTeams(teams) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(teams));
}