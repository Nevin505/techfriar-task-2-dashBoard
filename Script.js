// to change the text Dynamically
const complainceNumber=document.getElementById('complainceNumber').textContent=4;

function createDoughnutChart(values, colors, gap = 2) {
    const total = values.reduce((acc, val) => acc + val, 0);
    let cumulativePercent = 0;
    const gapPercent = gap / 360; // convert gap to percentage of the circle

    const gradientSegments = values.map((value, index) => {
        const percent = value / total;
        const startPercent = cumulativePercent;
        cumulativePercent += percent;
        const endPercent = cumulativePercent - gapPercent;

        // Return the gradient string for this segment, with a small gap
        return `${colors[index]} ${startPercent * 100}% ${endPercent * 100}%, transparent ${0.12 * 100}%`;
    }).join(', ');

    // Set the conic-gradient dynamically with gaps
    document.getElementById('doughnutChart').style.background = `conic-gradient(${gradientSegments})`;
    
    // Set the center text
    // document.getElementById('chartValue').textContent = total;
}

// Example Usage
const values = [20, 6, 10]; // Your input values
const colors = ['#f39c6b', '#e74c3c', '#27ae60']; // Colors for each segment
createDoughnutChart(values, colors, 2); // 2 degrees gap between each segment


// Select Clickable Links

const navLinkItems=document.getElementsByClassName('nav-link-items');

console.log(navLinkItems);


for(let navLinkItem of navLinkItems){
    navLinkItem.addEventListener('click',()=>{
         for(let navItems of navLinkItems){
            navItems.classList.remove('highlight-navLinks')
         }
         navLinkItem.classList.add('highlight-navLinks')
    })
}

