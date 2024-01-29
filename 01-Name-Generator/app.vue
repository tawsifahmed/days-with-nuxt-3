<template>
  <div class="container">
    <h1>Name Generator</h1>
    <p>Choose options and click the "Get Bames" button underneath</p>
    <div class="options-container">
      <div class="option-container">
        <h4> 1. Choose a gender</h4>
        <div class="option-btns">
          <button class="option op-left" :class="options.gender === 'Boy' && 'option-active'">Boy</button>
          <button class="option" :class="options.gender === 'Unisex' && 'option-active'">Unisex</button>
          <button class="option op-right" :class="options.gender === 'Girl' && 'option-active'">Girl</button>
        </div>
      </div>
      <div class="option-container">
        <h4> 2. Choose the name's popularity</h4>
        <div class="option-btns">
          <button class="option op-left" :class="options.popularity === 'Trendy' && 'option-active'">Trendy</button>
          <button class="option op-right" :class="options.popularity === 'Unique' && 'option-active'">Unique
          </button>
        </div>
      </div>
      <div class="option-container">
        <h4> 2. Choose the name's length</h4>
        <div class="option-btns">
          <button class="option op-left" :class="options.length === 'Long' && 'option-active'">Long</button>
          <button class="option" :class="options.length === 'All' && 'option-active'">All</button>
          <button class="option op-right" :class="options.length === 'Short' && 'option-active'">Short</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
const options = reactive({
  gender: "Girl",
  popularity: "Trendy",
  length: "Short",
})
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
</style>
