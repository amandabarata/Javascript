var exactTime = new Date()
var hour = exactTime.getHours()

console.log(`Now its exactly ${hour} hours.`)
if(hour < 12) {
    console.log('Good morning!')
}
else if(hour < 18) {
    console.log('Good afternoon!')   
} 
else if (hour < 22) {
    console.log('Good Night!')
}
else {
    console.log('Good Dawn!')
}