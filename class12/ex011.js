var age = 15
console.log(`You are ${age} years old.`)
if (age < 16) {
    console.log('Not a voter')
} else if (age < 18 || age > 65) {
        console.log('optional voter')
    } else {
        console.log('Mandatory voter')
    }
    
