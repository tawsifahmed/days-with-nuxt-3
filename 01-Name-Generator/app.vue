<template>
  <div class="container">
    <h1>Name Generator</h1>
    <p>Choose options and click the <span><i>"Get Names"</i></span> button underneath</p>
    <div class="options-container">
      <Option 
      v-for="option in optionsArray" 
      :key="option.title" 
      :option="option" 
      :options="options"
      />
      <button @click="computeSelectedNames" class="primary"> Get Names</button>
    </div>
    <div class="name-cards-container">
      <!-- <div v-for="name, index in selectedNames" :key="name" class="name-card">
        <h4>{{name}}</h4>
        
        <div @click="closeNameCard( index)" style="cursor: pointer;">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
      </div> -->
      <CardName v-for="name, index in selectedNames" :key="name" :name="name" :index="index" @remove="() => closeNameCard(index)"/>
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


const optionsArray = [
  {
    title: "1. Choose a gender",
    category: "gender",
    buttons: [Gender.GIRL, Gender.UNISEX, Gender.BOY]
  },
  {
    title: "2. Choose popularity",
    category: "popularity",
    buttons: [Popularity.TRENDY, Popularity.UNIQUE]
  },
  {
    title: "3. Choose length",
    category: "length",
    buttons: [Length.SHORT, Length.ALL, Length.LONG]
  },
]

const closeNameCard = (index: number) => {
  const filteredNames = [...selectedNames.value]
  filteredNames.splice(index, 1)
  selectedNames.value = filteredNames
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

</style>
