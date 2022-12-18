function load() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Now it's ${hora} o' clock`

    if (hora >= 0 && hora < 12) {
    img.src = './images/sunrise.png'
    document.body.style.background = '#e2cd9f'
}   
    else if (hora >=12 && hora <=18) {
    img.src = './images/sunset.png'
    document.body.style.background = '#b9846f'
}  
    else {
    img.src = './images/night.png'
    document.body.style.background = '#515154'
}
}
