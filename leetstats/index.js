const input = document.querySelector("input");
const button = document.querySelector("button");
const table = document.querySelector("table");

const clearTable = () => {
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
};

const fetchStoredData = () => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    
    clearTable();

    for (const data of storedItems) {
        const newRow = table.insertRow();
        const name = newRow.insertCell(0);
        name.innerHTML = data.username;
        const total = newRow.insertCell(1);
        total.innerHTML = data.totalSolved;
        const easy = newRow.insertCell(2);
        easy.innerHTML = data.easySolved;
        const medium = newRow.insertCell(3);
        medium.innerHTML = data.mediumSolved;
        const hard = newRow.insertCell(4);
        hard.innerHTML = data.hardSolved;
        const ranking = newRow.insertCell(5);
        ranking.innerHTML = data.ranking;
    }
};

fetchStoredData();

const fetchProfile = async (username) => {
    try {
        const res = await fetch("https://leetcodestats.cyclic.app/" + username);
        const data = await res.json();
        data.username = username;
        return data;
    } catch (error) {
        console.error("Error fetching profile:", error);
        return null; 
    }
};

button.addEventListener("click", async (event) => {
    event.preventDefault();

    const username = input.value.trim();
    if (!username) {
        alert("Please enter a valid username.");
        return;
    }

    const data = await fetchProfile(username);
    if (data) {
        let prevItems = JSON.parse(localStorage.getItem('items')) || [];
        prevItems.push(data);
        localStorage.setItem('items', JSON.stringify(prevItems));
        clearTable();
        fetchStoredData(); 
    }
});
