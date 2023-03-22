 const input1 = document.querySelector('.input1')
 const cardName = document.querySelector('#cardName')
 const errorName = document.querySelector('#errorName')

 const input2 = document.querySelector('.input2')
 const frontNumber = document.querySelector('.front-number')
 const errorNum = document.querySelector('#errorNum')

 const mm = document.querySelector('#mm')
 const mes = document.querySelector('#mes')
 const errorMonth = document.querySelector('#errorMonth')

 const yy = document.querySelector('#yy')
 const año = document.querySelector('#año')
 const errorYear = document.querySelector('#errorYear')

 const cvc = document.querySelector('#cvc')
 const numcvc = document.querySelector('.numcvc')
 const errorCvc = document.querySelector('#errorCvc')
 
 input1.addEventListener('input', () => {
     cardName.innerHTML = input1.value;
     if ( input1.value.length === 0){}
 })
    
    input2.addEventListener('input', () => {
        frontNumber.innerHTML = input2.value;
        if ( input2.value.length === 0){
            frontNumber.innerHTML = '0000 0000 0000 0000' 
         }
    })

    mm.addEventListener('input', () => {
        mes.innerHTML = mm.value;
        if ( input1.value.length === 0){
           mm.innerHTML = 'MM' 
        } 
       })

       yy.addEventListener('input', () => {
           año.innerHTML = yy.value;
           if ( yy.value.length === 0){
               frontNumber.innerHTML = 'YY' 
            }
       })

       cvc.addEventListener('input', () => {
        numcvc.innerHTML = cvc.value;
        if ( cvc.value.length === 0){
            numcvc.innerHTML = '000' 
         }
    })
    
    
    input1.addEventListener("blur", () => {
        
        if (input1.value.length === 0){
            input1.style.borderColor = 'red'
        errorName.style.display = 'block'
    }else {
        input1.style.borderColor = '#21092f'
        errorName.style.display = 'none'
    }
});

input2.addEventListener("blur", () => {
    
    if (input2.value.length < 16){
        input2.style.borderColor = 'red'
        errorNum.style.display = 'block'
     
    }else {
        input2.style.borderColor = '#21092f'
        errorNum.style.display = 'none'
    }
});

 mm.addEventListener('blur', () => {
     if (mm.value.length < 2){
        mm.style.borderColor = 'red'
        errorMonth.style.display = 'block'
    }else {
        mm.style.borderColor = '#21092f'
        errorMonth.style.display = 'none'
        
    }
});
yy.addEventListener('blur', () => {
    if (yy.value.length < 2){
        yy.style.borderColor = 'red'
        errorYear.style.display = 'block'
        
    }else {
        yy.style.borderColor = '#21092f'
        errorYear.style.display = 'none'
    }
});
cvc.addEventListener('blur', () => {
    if (cvc.value.length < 3){
        cvc.style.borderColor = 'red'
        errorCvc.style.display = 'block'
    }else {
        cvc.style.borderColor = '#21092f'
        errorCvc.style.display = 'none'
    }
});


    
    
    
//----------------------------------------------------------------//

    let continueBtn = document.querySelector('#continueBtn')
    let button = document.querySelector('#button');
    let form = document.querySelector('.form')
    let thankYou = document.querySelector('.thankYou')
  
    
    button.addEventListener('click', () => {
    form.style.display = 'none';
    thankYou.style.display = 'flex';
})
    continueBtn.addEventListener('click', () => {
    form.style.display = 'flex';
    thankYou.style.display = 'none';
})
