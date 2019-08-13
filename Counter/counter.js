function countup() {
    let counted =  parseInt(document.querySelector('#coin').innerText) + 1;
    document.querySelector('#coin').innerText  = `${counted}`;
}
function countdw(){
    if(document.querySelector('#coin').innerText == 0){
        return
    }
    let counted =  parseInt(document.querySelector('#coin').innerText) - 1;
    document.querySelector('#coin').innerText  = `${counted}`;
}