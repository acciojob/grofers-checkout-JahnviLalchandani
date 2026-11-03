const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
let prices=document.querySelectorAll('.price')
let total=0;
for(let i=0;i<prices.length;i++){
	total+=Number(prices[i].innerText);
}
	let table=document.querySelector("table");
	let oldRow=document.querySelector("#totalRow");
	if (oldRow) {
		oldRow.remove()
	}
	let newRow=document.createElement("tr");
	newRow.id="totalRow"
	let newCell=document.createElement("td")
	newCell.innerText=total;
	
	newRow.appendChild(newCell);
	table.appendChild(newRow);
  
};
getSum();
getSumBtn.addEventListener("click", getSum);

