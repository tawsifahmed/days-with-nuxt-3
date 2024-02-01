<template>
    <div class="table w-full">
      <h1>TOP 50: THE RANKING</h1>
      <div class="grid grid-cols-12 gap-4 w-full">
        <div class="table-col col-span-12 md:col-span-6">
            <RestaurantRow v-for="restaurant in restaurantOrganized.first" :key="restaurant.id" />
        </div>
        <div class="table-col col-span-12 md:col-span-6">
            <RestaurantRow v-for="restaurant in restaurantOrganized.second" :key="restaurant.id" />
        </div>
      </div>
    </div>
  </template>

<script setup lang="ts">
import restaurants from "@/data.json"


const restaurantOrganized = {
    first: [...restaurants].splice(0,25),
    second: [...restaurants].splice(25,50),
}

</script>
  
  <style scoped>
  .table {
    margin: 3rem 0;
  }
  .table h1 {
    margin-bottom: 2rem;
  }
  .table-container {
    display: flex;
    justify-content: space-between;
  }
  .table-col {
    
  }
  </style>