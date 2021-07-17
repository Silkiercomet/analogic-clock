const hour = document.querySelector('#clock_hour'),
      minutes = document.querySelector('#clock_minutes'),
      seconds = document.querySelector('#clock_seconds');


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

// reloj y fecha

const textHour = document.querySelector('#text_hour'),
      textMinutes = document.querySelector('#text_minute'),
      textAMPM = document.querySelector('#text-time'),
      dateDay = document.querySelector('#date-day'),
      dateMonth = document.querySelector('#date-month'),
      dateYear = document.querySelector('#date-year');

const clockText = () => {
    let date = new Date();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    let hh = date.getHours() ,ampm,
        mm = date.getMinutes(),
        dat = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear();

        //cambiamos el formato de la hora de 24 a 12/12, para establecer si es am o pm
        if(hh >= 12){
            hh = hh - 12;
            ampm = 'PM'
        }else{
            ampm = 'AM'
        }
        //reiniciamos el reloj a medianoche
        if(hh == 0){hh = 12}

        //monstramos el 0 antes de la hora
        if(hh < 10){hh = `0${hh}:`}

        //los 0 antes de los minutos
        if(mm < 10){mm = `0${mm}`}

        //mostrar los minutos
        textMinutes.textContent = mm;

        //mostrar la hora
        textHour.textContent = `${hh}:`;

        //mostrar am o pm
        textAMPM.innerHTML = ampm
           
        
        //mostramos los meses, dias y año
        dateDay.textContent = dat;
        dateMonth.textContent = `${months[month]},`;
        dateYear.textContent = year;
}

setInterval(clockText, 1000)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-icon')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
