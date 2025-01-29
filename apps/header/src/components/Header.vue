
<script setup>
import Carousel from './Carousel.vue';
import Datatable from './Datatable.vue';
</script>

<template>
  <div class="md:container md:mx-auto">
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabIndex={0} role="button" class="btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            class="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>World</a></li>
            <li>
              <a>Tech</a>
              <ul class="bg-base-300 w-48 p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Sports</a></li>
          </ul>
        </div>
        <h1 class="logo">News Today!</h1>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal bg-base-200 rounded-box px-1">
          <li><a>World</a></li>
          <li>
            <details class="dropdown">
              <summary>Tech</summary>
              <ul class="menu dropdown-content rounded-box bg-base-300 w-48 p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a>Sports</a></li>
        </ul>
      </div>
      <div class="navbar-end avatar">
        <div class="w-16 rounded-full ring-offset-base-100 ring ring-offset-2">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="Tailwind-CSS-Avatar-component" />
        </div>
      </div>
    </div>

    <Carousel/>
    <Datatable/>
  </div>
</template>


<style scoped>
.logo {
  font-size: 1.5rem;
  font-weight: 700;
}
/* custom styles */
</style>