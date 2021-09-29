send.addEventListener("click",fnc);
function fnc(){
    let val_n1 = n1.value;
    let val_n2 = n2.value;
    let val_n3 = n3.value;
    let val_n4 = n4.value;
    let val_n5 = n5.value;
    let val_n6 = n6.value;
    let val_n7 = n7.value;
    let val_res = parseInt(val_n1) - parseInt(val_n2) - parseInt(val_n3) - parseInt(val_n4) + parseInt(val_n5) - parseInt(val_n6) - parseInt(val_n7);
        res.innerHTML = val_res;
}
