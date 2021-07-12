const hour = document.querySelector('#clock_hour');
const minutes = document.querySelector('#clock_minutes');
const seconds = document.querySelector('#clock_seconds');


const clock = () => {
    let date = new Date()

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() *6;

        //agregamos la rotacion de los elementos
    hour.style.transform = `rotateZ(${hh + mm /12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}

setInterval(clock, 1000)


