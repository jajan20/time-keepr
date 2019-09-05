<template>
  <div id="app">
    <form>

      <div class="input-wrapper">
      <label for="start-time">Hoe laat ben je begonnen?</label>
        <div>
          <input id="start-hours" type="tel" placeholder="09" maxlength="2">
          <span>:</span>
          <input id="start-minutes" type="tel" placeholder="00" maxlength="2">
        </div>
      </div>

      <div class="input-wrapper">
      <label for="end-time">Hoe laat was je dienst voorbij?</label>
        <div>
          <input id="end-hours" type="tel" placeholder="18" maxlength="2">
          <span>:</span>
          <input id="end-minutes" type="tel" placeholder="00" maxlength="2">
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

      <button id="submit" type="submit">Next</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Jamie'
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
