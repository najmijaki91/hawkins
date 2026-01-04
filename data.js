const STORAGE_KEY = "FUTSAL_LEAGUE_PURWAKARTA";

function loadData() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {
        U15A: { teams: {}, scorers: {} },
        U18A: { teams: {}, scorers: {} },
        U18B: { teams: {}, scorers: {} }
    };
}

function saveData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

let groups = loadData();
