
<template>
    <div class="option-container">
        <h4> {{option.title}}</h4>
        <div class="option-btns">
          <button
          v-for="(value, index) in option.buttons" :key="value"
           class="option" 
           :class="computeBtnClasses(value, index)"
           @click="options[option.category] = value" >
           {{value}}</button>
         
        </div>
      </div>
</template>

<script setup lang="ts">
import {Gender, Popularity, Length} from '@/data'

interface OptionProps {
    option: {
        title: string,
        category: string,
        buttons: Gender[] | Popularity[] | Length[]
    };
    options: {
        gender: Gender,
        popularity: Popularity,
        length: Length
    }
}

const props = defineProps<OptionProps>();

const computeBtnClasses = (value, index) => {
    const classNames = []
    if(props.options[props.option.category] === value) {
        classNames.push('option-active')
    }
    if(index === 0) classNames.push('op-left')
    if(index === props.option.buttons.length - 1) classNames.push('op-right')
    return classNames.join(" ")
}
  
</script>

<style scoped>
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