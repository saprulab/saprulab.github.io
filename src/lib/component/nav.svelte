<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import { base } from '$app/paths';
</script>

<style lang="scss">
    :global(.container) {
        margin: 1rem 4rem 0rem 4rem;
        max-width: calc(100vw - 10rem);
    }
    .modnav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 2rem;
        padding-bottom: 1rem;
        align-items: center;
    }
</style>
  
<div class="modnav">
    <NavBrand href={base + "/"}>
      <img src={base + "/images/SVG/scribble-text.svg"} class="me-3 h-[5rem] sm:h-[5rem]" alt="Sapru Lab" />
      <!-- <span class="self-center whitespace-nowrap text-3xl font-semibold dark:text-white text-gray-600">Sapru Lab</span> -->
    </NavBrand>
    <NavHamburger  />
    <NavUl ulClass="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-md md:font-medium mr-0 pr-0">
      <NavLi href={base + "/"}>Home</NavLi>
      <NavLi href={base + "/people"}>People</NavLi>
      <NavLi href={base + "/news"}>News</NavLi>
      <NavLi href={base + "/about"}>About</NavLi>
      <NavLi href={base + "/contact"}>Contact</NavLi>
    </NavUl>
</div>