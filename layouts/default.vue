<template lang="pug">
.main
  header
    center
      h1.padding-top-10 epaew's website
    .pure-menu.pure-menu-horizontal
      center
        ul.pure-menu-list
          li.pure-menu-item
            nuxt-link.pure-menu-link(to="/") Top
          li.pure-menu-item
            nuxt-link.pure-menu-link(to="profile") Profile
          li.pure-menu-item
            nuxt-link.pure-menu-link(to="works") Works
          li.pure-menu-item
            nuxt-link.pure-menu-link(to="links") Links
  .container
    nuxt
  footer
    center
      p Copyright &copy; epaew, 2018 All Rights Reserved.
</template>
