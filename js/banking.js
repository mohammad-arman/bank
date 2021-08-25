//handle input value
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const newAmount = parseFloat(inputField.value);
    inputField.value = '';
    return newAmount;
}
//handle deposit and withdraw amount
function updateTotalField(totalFieldId, amount){
    const amountValue = document.getElementById(totalFieldId);
    const previousAmount = parseFloat(amountValue.innerText);
    const newTotalAmount = previousAmount + amount;
    amountValue.innerText = newTotalAmount;
}
// current total balance
function getCurrentBalance(){
    const previousBalance = document.getElementById('total-balance');
    const previousTotalAmount = parseFloat(previousBalance.innerText);
    return previousTotalAmount;
}
//handle total balance
function updateBalance(amount, isAdd){
    const previousBalance = document.getElementById('total-balance');
    const previousTotalAmount = parseFloat(previousBalance.innerText);

    if(isAdd == true){
        const totalBalance = previousTotalAmount + amount;
        previousBalance.innerText = totalBalance;
    }
    else{
        const totalBalance = previousTotalAmount - amount;
        previousBalance.innerText = totalBalance;
    }
}
//handle deposit
document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDeposit = getInputValue('deposit-field');
    if(newDeposit > 0){
        updateTotalField('previous-deposit', newDeposit);
        updateBalance(newDeposit, true);
    }
});
//handle withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdraw = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(newWithdraw > 0 && newWithdraw <= currentBalance){
        updateTotalField('previous-withdraw', newWithdraw);
        updateBalance(newWithdraw, false);
    };
    if(newWithdraw > currentBalance){
        const hiddenBalanceText = document.getElementById("balance-warning");
        hiddenBalanceText.style.display = 'block';
    }
    else{
        const hiddenBalanceText = document.getElementById("balance-warning");
        hiddenBalanceText.style.display = 'none';
    }
});
