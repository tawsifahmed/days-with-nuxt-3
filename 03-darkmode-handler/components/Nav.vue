<template>
    <nav :style="isDarkMode ? {backgroundColor: 'rgb(73,72,72)'} : null">
      <div :style="isDarkMode ? {color: 'white'} : null">
        <h1>Article </h1>
        <label class="switch">
           
          <input v-model="isDarkMode" @click="toggleDarkMode" type="checkbox" />
          <span class="slider round"></span>
          <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
          </svg>
          
        </label>
      </div>
    </nav>
</template>

<script setup lang="ts">
const {isDarkMode, toggleDarkMode} = darkModeHandler();

</script>
  
<style scoped>
  nav {
    border-bottom: 1px solid rgba(73, 72, 72, 0.274);
    padding: 20px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.253);
  }
  
  nav div {
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  
  h1 {
    font-size: 30px;
  }
  
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    
  }

  svg{
    position: absolute;
    left: 70px;
    top: -4px;
    right: 21px;
    width: 40px;
  }
  
  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  
  input:checked + .slider {
    background-color: #2196f3;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
  </style>