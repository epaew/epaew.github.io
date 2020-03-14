<template lang="pug">
  v-container
    v-row
      v-col(cols=12 sm=10 offset-sm=1)
        center
          h2.display-2 Welcome
        p This is a personal web page for epaew, a web application developer in Tokyo.
    v-row
      v-col(cols=12 sm=10 offset-sm=1)
        v-row
          v-col
            h2.display-1 About me
        v-row
          v-col(cols=12 sm=9)
            | text
          v-col(cols=6 offset=3 sm=3 offset-sm=0)
            | image
</template>
