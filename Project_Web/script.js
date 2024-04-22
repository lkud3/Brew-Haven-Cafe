function calculateTotal(){
    var totalprice=0;
    let coffeeSelect=document.querySelector("input[name='coffeeSelect']:checked").value
    if (coffeeSelect=="Espesso")
        totalprice+=2.99
    else if (coffeeSelect=="Cappuccino")
        totalprice+=3.50
    else if (coffeeSelect=="Latte")
        totalprice+=4.00
    else if (coffeeSelect=="Cold Brew")
        totalprice+=5.80
    else{
        totalprice+=0;
    }
    
    let comboSelect=document.querySelector("input[name='comboSelect']:checked").value
    if (comboSelect=="combo_1")
        totalprice+=0.5
    else if (comboSelect=="combo_2")
        totalprice+=1.5
    else if (comboSelect=="no_combo")
        totalprice+=0
    else{
        totalprice+=0;
    }

    if(document.getElementById("ckb1").checked)
        totalprice+=1;
    if(document.getElementById("ckb2").checked)
        totalprice+=0.5;
    if(document.getElementById("ckb3").checked)
        totalprice+=2;

    document.querySelector("input[name='total']").value=totalprice
}