function verify() {
    var data = new Date()
    var year = data.getFullYear()
    var formyear = document.getElementById('txtyear')
    var res = document.querySelector('div#res')
    if(formyear.value.length == 0 || formyear.value > year) {
        alert('[ERROR] check the data again!')
    }
}

else {
    alert('Everything is ok')
}
