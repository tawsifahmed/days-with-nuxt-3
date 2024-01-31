<template>
    <div class="name-card">
        <h4>{{name}}</h4>
        
        <div @click="closeNameCard" style="cursor: pointer;">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
</template>

<script setup lang="ts">
interface NameProps {
  name: string,
  index: number
}
const props = defineProps<NameProps>();

const emit = defineEmits(["remove"]);

const closeNameCard = () => {
  emit("remove", props.index);
}

</script>

<style lang="scss" scoped>

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