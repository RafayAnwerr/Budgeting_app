let input_box = document.getElementById("input_box");
let amountcontainer = document.getElementById("amount-container")
let income = document.getElementById("income")
let fullbudget = document.getElementById("fullbudget");
let inp_bal = document.getElementById("inp_bal");
let balance = document.getElementById("balance");
let totalbudget = document.getElementById("totalbudget")
let ttbd = document.getElementById("ttbd");
let pay_overview = document.getElementById("pay-overview");
function handleclick() {
    if (input_box.value === "") {
        alert("You must have to write your monthly budget");
    } else {
        fullbudget.innerHTML = input_box.value;
        income.appendChild(fullbudget);
        inp_bal.innerHTML = input_box.value;
        balance.appendChild(inp_bal)
        ttbd.innerHTML = input_box.value;
        totalbudget.appendChild(ttbd)

    }
    input_box.value = ""
}



let Expbudget = document.getElementById("expbudget");
let expm = document.getElementById("expm");
let rembudget = document.getElementById("rembudget");
let rmbd = document.getElementById("rmbd")
let amount_box = document.getElementById("amount_box");
let exp = document.getElementById("exp")
let date = document.getElementById("date");
let Expence_List = document.getElementById("Expence_List");
let desc = document.getElementById("desc");
let amtval = document.getElementById("foramt")

function handleclick2() {
    let amtval = parseInt(amount_box.value);
    let currentExp1 = parseInt(exp.innerHTML);
    let currentExp = parseInt(expm.innerHTML);
    let currentBudget = parseInt(ttbd.innerHTML);
    let currentrmbd = parseInt(rmbd.innerHTML)
    if (amtval > 0) {
        // Update income and total budget
        let currentIncome = parseInt(fullbudget.innerHTML);
        let newIncome = currentIncome + amtval;
        let newBudget = currentBudget + amtval;

        fullbudget.innerHTML = newIncome.toFixed(2);
        ttbd.innerHTML = newBudget.toFixed(2);
        inp_bal.innerHTML = newBudget.toFixed(2);
        let ulval = document.getElementById("ulval");

        let transactionDiv = document.createElement("div");
        transactionDiv.className = "transaction";
        transactionDiv.style="background: #90EE90";

        let lidate = document.createElement("li");
        lidate.innerHTML = date.value;
        transactionDiv.appendChild(lidate);


        let licategory = document.createElement("li");
        licategory.innerHTML = Expence_List.value;
        transactionDiv.appendChild(licategory);

        let liamount = document.createElement("li");
        liamount.innerHTML = amtval;
        transactionDiv.appendChild(liamount);

        let lidescription = document.createElement("li");
        lidescription.innerHTML = desc.value;
        transactionDiv.appendChild(lidescription);

        ulval.appendChild(transactionDiv);        

        let delbutton = document.createElement("button")
        delbutton.className="delbtn";
        ulval.appendChild(delbutton);        
        
    } else if (amtval < 0) {
        // Update expense and total budget
        let newExpense1 = currentExp1 - amtval;
        let newExpense = currentExp - amtval;
        let newBudget = currentBudget + amtval;
        let newrmbd = newBudget - newExpense;
        // let ulval = document.getElementById("ulval")
        
        
        // let forcat = document.getElementById("forcat")
        // let fordate =document.getElementById("fordate")
        exp.innerHTML = newExpense1.toFixed(2);
        expm.innerHTML = newExpense.toFixed(2);
        // ttbd.innerHTML = newBudget.toFixed(2);
        inp_bal.innerHTML = newBudget.toFixed(2);
        rmbd.innerHTML = newBudget.toFixed(2);
        let ulval = document.getElementById("ulval");

        let transactionDiv = document.createElement("div");
        transactionDiv.className = "transaction";
        transactionDiv.style="background: #ffcccb";

        let lidate = document.createElement("li");
        lidate.innerHTML = date.value;
        transactionDiv.appendChild(lidate);


        let licategory = document.createElement("li");
        licategory.innerHTML = Expence_List.value;
        transactionDiv.appendChild(licategory);

        let liamount = document.createElement("li");
        liamount.innerHTML = amtval;
        transactionDiv.appendChild(liamount);

        let lidescription = document.createElement("li");
        lidescription.innerHTML = desc.value;
        transactionDiv.appendChild(lidescription);
        ulval.appendChild(transactionDiv);        


        // let deleteButton = document.createElement("button")
        // deleteButton.innerText = "Del";
        // deleteButton.className="delbtn";
        // deleteButton.onclick = function() {
        //     ulval.removeChild(transactionDiv);
        // };
        // transactionDiv.appendChild(deleteButton);

        // ulval.appendChild(transactionDiv);
        // // ulval.appendChild(delbutton);        
                 

    }    amount_box.value = "";
}






















