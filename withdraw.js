document.getElementById('withdraw-btn').addEventListener('click' , function(){
    const withdrawInput = document.getElementById('withdraw-input')
    const newWithdrawAmountString = withdrawInput.value 
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)
    

    

    // set the withdraw amount to the withdraw bar

    const withdrawTotalElement = document.getElementById('withdraw-$$')
    const oldWithdrawAmountString = withdrawTotalElement.innerText
    const oldWithdrawAmount = parseFloat(oldWithdrawAmountString)
    console.log(oldWithdrawAmount)

    

    const balanceTotalElement = document.getElementById('balance-$$')
    const oldBalanceTotalString = balanceTotalElement.innerText
    const oldBalanceTotal = parseFloat(oldBalanceTotalString)

    
    withdrawInput.value = ''
    


    
    if(newWithdrawAmount > oldBalanceTotal){
        alert('sabihar baper ato taka nai')
        return
    }
  

    const currentWithdrawAmount = oldWithdrawAmount + newWithdrawAmount
    withdrawTotalElement.innerText = currentWithdrawAmount


   



    const newBalance = oldBalanceTotal - newWithdrawAmount
    balanceTotalElement.innerText = newBalance

    // clear the withdraw input feild 


})