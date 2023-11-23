<template>
    <div>
        <p>Product details for {{ product_id}}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officiis vel, eum aliquid consequuntur minus consequatur dolore ullam totam ducimus velit aut laudantium error perspiciatis at, accusamus rem magnam porro!</p>
    </div>
</template>

<script setup>
 const {product_id } = useRoute().params
</script>

<style lang="scss" scoped>

</style>