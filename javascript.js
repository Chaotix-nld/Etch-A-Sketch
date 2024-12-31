const mainBody = document.getElementById("mainBody");
const submit = document.getElementById("submit");

function makeCells(){
    //if grid is filled, remove it
    while (mainBody.firstChild){
        mainBody.removeChild(mainBody.firstChild)
    };

    //get number of cells/rows
    
    const input = document.getElementById("input").value;
    if(input < 2 || input > 100){
        document.getElementById('warning').textContent = 'Please pick a number between 2 an 100';
    }
    else{
    //determine total number of cells
    let cellNum = input;
    
    //creating rows
    for (c = 0; c < cellNum; c++){
        let row = document.createElement ("div");
        row.classList.add('row');
        mainBody.appendChild(row);
            for (r = 0; r < cellNum; r++){
                let column = document.createElement ("div");
                column.classList.add('column')
                row.appendChild(column);
        };        
    };
    const gridCell = document.getElementsByClassName('column');
    gridArray = Array.from(gridCell);

    gridArray.forEach(function(myBox){
        const color = window.getComputedStyle(myBox).getPropertyValue('background-color')
        myBox.addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = 'blue';
    });
    });
};  
};


