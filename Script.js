// to change the text Dynamically
const complainceNumber=document.getElementById('complainceNumber').textContent=4;
const values = [12, 6   , 10]; // Your input values

const colors = ['#f39c6b', '#e74c3c', '#27ae60']; // Colors for each segment

function createDoughnutChart(values, colors, gap = 2) {
    const total = values.reduce((acc, val) => acc + val, 0);
    const AppicationNumber=document.getElementById('doughnut-chart-text').innerText=`${total} Applications`
    let cumulativePercent = 0;
    const gapPercent = gap / 360; // convert gap to percentage of the circle

    const gradientSegments = values.map((value, index) => {
        const percent = value / total;
        const startPercent = cumulativePercent;
        cumulativePercent += percent;
        const endPercent = cumulativePercent - gapPercent;

        // Return the gradient string for this segment, with a small gap
        return `${colors[index]} ${startPercent * 100}% ${endPercent * 100}%, transparent ${0.20 * 100}%`;
    }).join(', ');

    // Set the conic-gradient dynamically with gaps
    document.getElementById('doughnutChart').style.background = `conic-gradient(${gradientSegments})`;
    
    // Set the center text
    // document.getElementById('chartValue').textContent = total;
}


createDoughnutChart(values, colors, 3); // 2 degrees gap between each segment


// Select Clickable Links

const navLinkItems=document.getElementsByClassName('nav-link-items');


// To Remove and add the background effect when a navLinks is being clicked
for(let navLinkItem of navLinkItems){
    navLinkItem.addEventListener('click',()=>{
         for(let navItems of navLinkItems){
            navItems.classList.remove('highlight-navLinks')
         }
         navLinkItem.classList.add('highlight-navLinks')
    })
}


// To give the color
// application-status-content
const listItems=document.getElementsByClassName('color-indicator');


let item=0;
for(let listItem of listItems){
    item++;
    listItem.style.backgroundColor = colors[item];

}

// Set the count present inside the tabel
document.getElementById('status-count-new').textContent=23;
document.getElementById('status-count-requested').textContent=24;
document.getElementById('status-count-actionsTaken').textContent=25;

// To dynmaically Add Elements to the list
const getTaskBody=()=>{
    const taskbodyTable=document.getElementById('task-body');
    console.log(taskbodyTable);
     taskbodyTable.innerHTML+=`  <tr>
                                        <td  class="  task-title">${taskTitle} </td>
                                        <td >${taskCategory}</td>
                                        <td>${taskDueDate}</td>
                                        <td><button class="status-button pointer" >Request sent</button></td>
                                    </tr>`
    
}

// Functionality to hihlight the selected button
const buttons=document.querySelectorAll('.task-filters>button');
console.log(buttons);
for(let button of buttons){
    button.addEventListener('click',()=>{
        for(let item of buttons){
            item.classList.remove('selectedButton');
        }
        button.classList.add('selectedButton');
    })
}


// Expand More Icon  on Payement History

const expandMoreIconButtons=document.getElementsByClassName('expand-more');


for(let expandMoreIconButton of expandMoreIconButtons){

    expandMoreIconButton.addEventListener('click',()=>{
        console.log(expandMoreIconButton.nextElementSibling);
        const displayProperty= expandMoreIconButton.nextElementSibling.style.display
       if(displayProperty==='none') 
       {
           expandMoreIconButton.nextElementSibling.style.display='flex'
       }
       else{
           expandMoreIconButton.nextElementSibling.style.display='none'
       }
    })
}

