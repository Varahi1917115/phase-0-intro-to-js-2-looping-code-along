



function countDown() {
    let countDown = 10;
        while (countDown > -1) {
            console.log(countDown--);

        }
        return countDown;
}

const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, event) {
   return  names.map(name=> `Thank you, ${name}, for the wonderful ${event} gift!`)
}

console.log(writeCards(names, "surprise"))