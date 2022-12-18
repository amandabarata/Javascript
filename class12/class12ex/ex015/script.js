
function verify() {
    var data = new Date()
    var year = data.getFullYear()
    var fano = document.getElementById('txtyear')
    var res = document.querySelector('div#res')
    
    if(fano.value.length == 0 || fano.value > year )   {
        alert('[ERROR] check the data again!')
    }
    else {
    var fgender = document.getElementsByName('gender')
    var age = year - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id' , 'foto')
    if (fgender[0].checked) {
        genero = 'man'
        if (age >= 0 && age < 10) {
            //Child
            img.setAttribute ('src', 'foto-bebe-m.png')
        } else if (age < 21) {
            //Young
            img.setAttribute ('src', 'foto-adulto-m.png')
        } else if ( age < 50) {
            //Adult
            img.setAttribute ('src', 'foto-adulto-m.png')
        } else {
            //Old
            img.setAttribute ('src', 'foto-idoso-m.png')
        }
    } else if (fgender[1].checked) {
        genero = 'woman'
        if (age >=0 && age < 10) {
            //Child
            img.setAttribute ('src', 'foto-bebe-girl.png')
        } else if (age < 21) {
            //Young
            img.setAttribute ('src', 'foto-adulto-mulher.png')
        } else if ( age < 50) {
            //Adult
            img.setAttribute ('src', 'foto-adulto-mulher.png')
        } else {
            //Old
            img.setAttribute ('src', 'foto-idosa-m.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `We detected a ${genero} with ${age} years old.`
    res.appendChild(img)
}
}
