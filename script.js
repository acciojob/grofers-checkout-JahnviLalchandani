const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
let prices=document.querySelectorAll('.prices')
let total=0;
for(let i=0;i<prices.length;i++){
	total+=Number(prices[i].innerText);
}
	let table=document.createElement("table");
	let oldRow=document.querySelector("#totalRow")
	if(oldRow){
		oldRow.remove();
	}
	let newRow=document.createElement("tr");
	newRow.id=totalRow
	let newCell=document.createElement("td")
	newCell.innerText=total;
	
	newRow.appendChild(newCell);
	table.appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);

