window.onload = () => {
    let object = {
        startTime: 0,
        endTime: 0,  
        firstBreak: 0,
        secondBreak: 0,
        thirdBreak: 0
    }

    let submitBtn = document.querySelector('#submit')
    let startHoursInput = document.querySelector('#start-hours')
    let startMinutesInput = document.querySelector('#start-minutes')
    let endHoursInput = document.querySelector('#end-hours')
    let endMinutesInput = document.querySelector('#end-minutes')
    let firstBreak = document.querySelector('#first-break')
    let secondBreak = document.querySelector('#second-break')
    let thirdBreak = document.querySelector('#third-break')

    let checkBreak = (elements) => {
        elements.forEach(element => {
            if (element.checked) {
                switch(element.id) {
                    case firstBreak.id: object.firstBreak = parseInt(firstBreak.value, 10); break
                    case secondBreak.id: object.secondBreak = parseInt(secondBreak.value, 10); break
                    case thirdBreak.id: object.thirdBreak = parseInt(thirdBreak.value, 10); break
                }
            }
        })
    }

    let roundMinutes = (m) => {
      let minutes = 0
      if (m < 15 && m > 0) { minutes = 0 } 
      if (m < 30 && m > 15) { minutes = 15 } 
      if (m < 45 && m > 30) { minutes = 30 }
      if (m < 60 && m > 46) { minutes = 45 }
      return minutes
    }

    let convertTime = (time) => {
      var number = time
      var hours = (number / 60)
      var rhours = Math.floor(hours)
      var minutes = (hours - rhours) * 60
      var rminutes = Math.round(minutes)
      return rhours + " hour(s) and " + rminutes + " minute(s)."
    }

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault()
   
        let totalStartMinutes = roundMinutes(startMinutesInput.value * 1)
        let totalStartHoursInMinutes = startHoursInput.value * 60
        let totalEndMinutes = roundMinutes(endMinutesInput.value * 1)
        let totalEndHoursInMinutes = endHoursInput.value * 60

        object.startTime = totalStartHoursInMinutes + totalStartMinutes
        object.endTime = totalEndHoursInMinutes + totalEndMinutes
    
        checkBreak([firstBreak, secondBreak, thirdBreak])
        
        object.workedHours = convertTime(object.endTime - object.startTime - object.firstBreak - object.secondBreak - object.thirdBreak)
        console.log(object)
    })
}


inputs.forEach(function(singleInput, index) {
    singleInput.addEventListener('keyup', () => {
        
    })
})