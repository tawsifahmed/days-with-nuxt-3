<template>
    <body
    class="
      antialiased
      bg-gradient-to-r
      from-pink-300
      via-purple-300
      to-indigo-400
    "
  >
  <header>
     <nav
        class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-1
          px-4
          text-lg text-white
          bg-black
        "
      >
       <div>
          <Nuxtlink class="flex items-center cursor-pointer" to="/">
            <img
              class="h-8 w-8 inline-block mr-2"
              src="@/assets/images/logo.png"
              alt="Workflow"
            />
            <span class="font-semibold text-xl tracking-tight">Restaurants</span>
          </Nuxtlink>
        </div>
       
         <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            class="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
       
       <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            class="
              pt-4
              text-base text-white
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <a class="md:p-4 py-2 block hover:text-purple-400 hidden" href="#"
                >Features</a
              >
            </li>
            <li>
              <a class="md:p-4 py-2 block hover:text-purple-400 hidden" href="#"
                >Pricing</a
              >
            </li>
            <li>
              <a class="md:p-4 py-2 block hover:text-purple-400 hidden" href="#"
                >Customers</a
              >
            </li>
            <li>
              <a class="md:p-4 py-2 block hover:text-purple-400" href="#"
                >Home</a
              >
            </li>
            <li>
              <a
                class="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                href="#"
                >Restaurants</a
              >
            </li>
          </ul>
        </div>
    </nav>
  </header>
</body>

</template>

<script setup>

</script>