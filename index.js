// Arrays to store daily counts for each supply type
let dailyCounts = {
    fsYellow: [],
    hsYellow: [],
    fsBlue: [],
    hsBlue: [],
    purple: [],
    greenHS: [],
    redHS: [],
    orangeFS: [],
    sodaPallet: [],
    juicePallet: []
};

// Function to save daily counts
function saveDailyCounts() {
    dailyCounts.fsYellow.push(count);
    dailyCounts.hsYellow.push(count2);
    dailyCounts.fsBlue.push(count3);
    dailyCounts.hsBlue.push(count4);
    dailyCounts.purple.push(count5);
    dailyCounts.greenHS.push(count6);
    dailyCounts.redHS.push(count7);
    dailyCounts.orangeFS.push(count8);
    dailyCounts.sodaPallet.push(count9);
    dailyCounts.juicePallet.push(count10);

    // Reset counts for the next day
    count = count2 = count3 = count4 = count5 = count6 = count7 = count8 = count9 = count10 = 0;
    updateCounters();
}

// Function to update counters on the page
function updateCounters() {
    countEl.innerText = count;
    countEl2.innerText = count2;
    countEl3.innerText = count3;
    countEl4.innerText = count4;
    countEl5.innerText = count5;
    countEl6.innerText = count6;
    countEl7.innerText = count7;
    countEl8.innerText = count8;
    countEl9.innerText = count9;
    countEl10.innerText = count10;
}

// Call saveDailyCounts at the end of each day (you can trigger this manually or automatically)
document.getElementById("save-btn").addEventListener("click", saveDailyCounts);
