
import type { RestaurantRow } from '#build/components';

import type { RestaurantRow } from '#build/components';
<template>
    <div class="table w-full">
      <h1>TOP 50: THE RANKING</h1>
      <div class="grid grid-cols-12 gap-4 w-full">
        <div class="table-col col-span-12 md:col-span-6">
            <div>
              <div class="row">
                <h4 class="hed">Serial</h4>
                <p class="ms-4 font-bold text-xl">Name</p>
              </div>
            </div>
            <RestaurantRow v-for="(restaurant, index) in restaurantOrganized.first" :key="restaurant.id" :name="restaurant.name" :rank="restaurant.rank" :index="index"/>
        </div>
        <div class="table-col col-span-12 md:col-span-6">
          <div>
            <div class="row">
              <h4 class="hed">Serial</h4>
              <p class="ms-4 font-bold text-xl">Name</p>
            </div>
          </div>
            <RestaurantRow v-for="(restaurant, index) in restaurantOrganized.second" :key="restaurant.id" :name="restaurant.name" :rank="restaurant.rank" :index="index"/>
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

  .row {
    
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .hed{
    font-size: 1.25rem;
    color: rgb(10, 31, 148);
    margin: 0;
    margin-right: 2rem;
    padding: 0.5rem 1rem;
    font-weight: 700;
    width: 4rem;
  }
  </style>