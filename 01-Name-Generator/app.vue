<template>
  <div class="container">
    <h1>Name Generator</h1>
    <p>Choose options and click the <span><i>"Get Names"</i></span> button underneath</p>
    <div class="options-container">
      <div class="option-container">
        <h4> 1. Choose a gender</h4>
        <div class="option-btns">
          <button @click="options.gender = Gender.BOY" class="option op-left" :class="options.gender === Gender.BOY && 'option-active'">Boy</button>
          <button @click="options.gender = Gender.UNISEX" class="option" :class="options.gender === Gender.UNISEX && 'option-active'">Unisex</button>
          <button @click="options.gender = Gender.GIRL" class="option op-right" :class="options.gender === Gender.GIRL && 'option-active'">Girl</button>
        </div>
      </div>
      <div class="option-container">
        <h4> 2. Choose the name's popularity</h4>
        <div class="option-btns">
          <button  @click="options.popularity = Popularity.TRENDY" class="option op-left" :class="options.popularity === Popularity.TRENDY && 'option-active'">Trendy</button>
          <button @click="options.popularity = Popularity.UNIQUE" class="option op-right" :class="options.popularity === Popularity.UNIQUE && 'option-active'">Unique
          </button>
        </div>
      </div>
      <div class="option-container">
        <h4> 3. Choose the name's length</h4>
        <div class="option-btns">
          <button @click="options.length = Length.LONG" class="option op-left" :class="options.length === Length.LONG && 'option-active'">Long</button>
          <button @click="options.length = Length.ALL" class="option" :class="options.length === Length.ALL && 'option-active'">All</button>
          <button @click="options.length = Length.SHORT" class="option op-right" :class="options.length === Length.SHORT && 'option-active'">Short</button>
        </div>
      </div>
      <button @click="computeSelectedNames" class="primary"> Get Names</button>
    </div>
    <div class="name-cards-container">
      <div v-for="name, index in selectedNames" :key="name" class="name-card">
        <h4>{{name}}</h4>
        
        <div @click="closeNameCard( index)" style="cursor: pointer;">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
        
        
          
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import {Gender, Popularity, Length, names} from '@/data'

interface OptionsState {
  gender: Gender;
  popularity: Popularity;
  length: Length;
}

// testing purpose --------------------------/ 
// const obj: OptionsState = {
//   gender: Gender.GIRL,
//   popularity: Popularity.TRENDY,
//   length: Length.SHORT,
// }

// const options: OptionsState = reactive({
//   gender: Gender.GIRL,
//   popularity: Popularity.TRENDY,
//   length: Length.SHORT,
// })

const options = reactive<OptionsState>({
  gender: Gender.GIRL,
  popularity: Popularity.TRENDY,
  length: Length.SHORT,
})

const computeSelectedNames = () => {
 const filteredNames = names
 .filter((name) => name.gender === options.gender)
 .filter((name) => name.popularity === options.popularity)
 .filter((name) => {
   if(options.length === Length.ALL) return true
   else return name.length === options.length
 })
 selectedNames.value = filteredNames.map((name) => name.name)
}

const selectedNames = ref<string[]>([])

const closeNameCard = (index: number) => {
  selectedNames.value.splice(index, 1)
}
</script>


<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  color: #004170;
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
}

.container h1 {
  font-size: 3rem;
}

.options-container {
  background-color: rgb(220, 228, 238);
  border-radius: 1rem;
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
  position: relative;
}

.option-container {
  margin-bottom: 2rem;
}

.option-container .option {
  background: white;
  outline: 0.15rem solid #015591;
  border: none;
  padding: .75rem 2rem;
  font-size: 1rem;
  color: #004170;
  cursor: pointer;
}

.option-container .option-active {
  background: #0a5e99;

  color: white;
}

.option-container .op-left {
  border-radius: 1rem 0 0 1rem;
}

.option-container .op-right {
  border-radius: 0 1rem 1rem 0;
}

.primary{
  background-color: #015591;
  color: white;
  cursor: pointer;
  border-radius: 5rem;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  margin-top: 3px;
  margin-bottom: 5px;
}


.name-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
  gap: 10px;
}

.name-cards-container .name-card{
  background-color: crimson;
  color: white;
  width: 10rem;
  border-radius: 0.7rem 0 0.7rem 0;
  position: relative;
}

.name-cards-container .name-card svg {
  position: absolute;
    top: 0%;
    background: black;
    right: -21px;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin: 0;
    width: 24px;
    border-radius: 50%;
}
</style>
