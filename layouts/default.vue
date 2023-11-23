<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
                    <li><nuxt-link to="/products">Products</nuxt-link></li>
                </ul>
            </nav>
        </header>

        <div>
            <slot />
        </div>
    </div>
</template>

<script>


</script>

<style lang="scss" scoped>

.router-link-active {
    color: red;
}
</style>