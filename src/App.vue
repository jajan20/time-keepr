<template>
  <div id="app">
    <form>
      
      <div class="input-wrapper">
        <label for="start-time">Hoe laat ben je begonnen?</label>
          <div>
            <input @keyup="nextInput" class="input" id="start-hours" type="tel" placeholder="09" maxlength="2">
            <span>:</span>
            <input @keyup="nextInput" class="input" id="start-minutes" type="tel" placeholder="00" maxlength="2">
          </div>
      </div>
    
      <div class="input-wrapper">
        <label for="end-time">Hoe laat was je dienst voorbij?</label>
          <div>
            <input @keyup="nextInput" class="input" id="end-hours" type="tel" placeholder="18" maxlength="2">
            <span>:</span>
            <input  @keyup="nextInput" class="input" id="end-minutes" type="tel" placeholder="00" maxlength="2">
          </div>
      </div>

      <h2>Welke pauzes heb je gehad?</h2>
        <div class="checkboxes">
          <div class="checkbox-wrapper">
            <input id="first-break" type="checkbox" value="15">
            <label for="first-break">15min</label>
          </div>

          <div class="checkbox-wrapper">
            <input id="second-break" type="checkbox" value="30">
            <label for="second-break">30min</label>
          </div>

          <div class="checkbox-wrapper">
            <input id="third-break" type="checkbox" value="15">
            <label for="third-break">15min</label>
          </div>
        </div>

      <button v-on:click="button" id="submit" type="submit">Next</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  
  methods: {
    button: function(event) {
      event.preventDefault()
      
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

      let totalStartMinutes = roundMinutes(startMinutesInput.value * 1)
      let totalStartHoursInMinutes = startHoursInput.value * 60
      let totalEndMinutes = roundMinutes(endMinutesInput.value * 1)
      let totalEndHoursInMinutes = endHoursInput.value * 60

      object.startTime = totalStartHoursInMinutes + totalStartMinutes
      object.endTime = totalEndHoursInMinutes + totalEndMinutes
      checkBreak([firstBreak, secondBreak, thirdBreak])

      object.workedHours = convertTime(object.endTime - object.startTime - object.firstBreak - object.secondBreak - object.thirdBreak)
      console.log(object)
      return object
    },
    nextInput: function(event) {

      let selectInput = document.querySelectorAll('.input')
      
      var getNextSibling = function (elem, selector) {
	      var sibling = elem.nextElementSibling
        while (sibling) {
		      if (sibling.matches(selector)) return sibling;
		      sibling = sibling.nextElementSibling
        }
      }

      selectInput.forEach((input, index) => {
        console.log(index)
      })
      
      if (event.target.value.length == 2) {
        console.log(getNextSibling(selectInput))
      } else {
        console.log('Broken')
      }
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

$gun-metal: #1F363D;
$glitter: #E8EEF2;

#app {
  padding: 10px;
  color: $gun-metal;
  font-size: 20px;
  
  .input-wrapper {
    label {
      font-weight: bold;
      display: block;
      font-size: 26px;
      margin: 10px 0;
    }

    [for="end-time"] {
      margin-top: 30px;
    }

    input {
      padding: 15px 10px;
      background-color: $glitter;
      border: none;
      border-radius: 4px;
      width: 70px;
      font-size: 16px;
      text-align: center;

      &::placeholder {
        font-size: 16px;
      }
    }

    span {
      margin: 0 5px;
      font-weight: bold;
    }
  }

  h2 {
    margin-top: 30px;
  }
  .checkboxes {
    display: flex;

    .checkbox-wrapper {
      margin-top: 10px;
      padding: 10px;
      transition: all 150ms;
      border-radius: 4px;

      &:hover {
        background-color: $glitter;
      }

      label {
        padding: 10px 10px 10px 10px;
      }
    }
  }

  #submit {
    background-color: deepskyblue;
    margin-top: 10px;
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    outline: none;

    &:hover {
      filter: brightness(80%);
    }
  }
}
</style>
