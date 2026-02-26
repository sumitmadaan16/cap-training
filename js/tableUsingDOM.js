let grid = document.getElementById("grid");
for(let i = 1; i<=9; i++){
    let row = document.createElement("div")
    row.setAttribute("class" , 'row r${i}')
    for(let j=1 ; j<=8 ; j++ ){
        let col = document.createElement("div");
        col.setAttribute("class", "col c${j}");
        row.append(col);
    }
    grid.appendChild(row)
}
