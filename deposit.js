// step 1 ( add event lisstener / event handler  )

document.getElementById('deposit-btn').addEventListener('click' , function(){

    // get the input value 

    const depositInput = document.getElementById('deposit-input')
    const newDepositAmountString = depositInput.value
    const newDepositAmount = parseFloat(newDepositAmountString)
    


    // set the amount in deposit $$ 

    const depositTotalElement = document.getElementById('deposit-$$')
    const oldDepositTotalString = depositTotalElement.innerText
    const oldDepositTotal = parseFloat(oldDepositTotalString)

    const currentDepositTotal = oldDepositTotal + newDepositAmount

    depositTotalElement.innerText = currentDepositTotal




    // balance er khela 

    const balanceTotalElemnet = document.getElementById('balance-$$')
    const balanceTotalString = balanceTotalElemnet.innerText
    const oldBalanceTotal = parseFloat(balanceTotalString)


    // calculartion 

    const currentBalanceTotal = oldBalanceTotal + newDepositAmount

    balanceTotalElemnet.innerText = currentBalanceTotal


    // clear the deposit feild 

    depositInput.value = ''

})