let num = document.querySelector('input#fnum')
let flista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n) {
   if(Number(n) >= 1 && Number(n) <= 100) {
    return true
   } else { 
    return false
   }
}

function inList (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }  else {
    return false
}
}

function adicionar() {
   if(isNumber(num.value) && !inList(num.value, valores)) {
    
   }  else {
    alert('Valor invalido ou já encontrado na lista')
}
}