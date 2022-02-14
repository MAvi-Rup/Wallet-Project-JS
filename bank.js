//Function -----
function inputSelection(id1){
    let Input = document.getElementById(id1);
    const newdTotalText = Input.value
    let newdamount = parseFloat(newdTotalText)
    Input.value = ''
    return newdamount;
}
function updateAmont(id,newdepositamount){
    const Total = document.getElementById(id)
    const prevTotalText = Total.innerText
    const prevAmount = parseFloat(prevTotalText)
    if(!newdepositamount){
        alert('Plese input the deposit amount')
    }else{
        Total.innerText=newdepositamount + prevAmount
    }
}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-value')
    const prevBalanceText = balanceTotal.innerHTML
    const prevBalanceAmount = parseFloat(prevBalanceText)
    return prevBalanceAmount;
}

function balanceUpdate(newAmount,isTrue){
    const balanceTotal = document.getElementById('balance-value')
    const prevBalanceAmount = getCurrentBalance()
    if(isTrue){
        balanceTotal.innerText = prevBalanceAmount+newAmount
    }else{
        balanceTotal.innerText= prevBalanceAmount-newAmount
    }
}
//Add-EvemtListener ---- 
document.getElementById('deposit-btn').addEventListener('click',(e)=>{
    e.preventDefault()
    const newdepositamount = inputSelection('deposit-input')
    if(newdepositamount>0){
        updateAmont('deposit-value',newdepositamount)
        balanceUpdate(newdepositamount,true)
    }
})

document.getElementById('withdraw-btn').addEventListener('click',(e)=>{
    e.preventDefault()
    const newWithrawAmount = inputSelection('withdraw-input')
    const currentBAlance = getCurrentBalance()
    if(newWithrawAmount>0 && currentBAlance>newWithrawAmount){
        updateAmont('withdraw-value',newWithrawAmount)
        balanceUpdate(newWithrawAmount,false)
    }
    if(newWithrawAmount>currentBAlance){
        alert("You don't have enoung balance to withdraw")
    }
})