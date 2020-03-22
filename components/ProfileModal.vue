<template lang="pug">
  v-dialog
    template(v-slot:activator="{ on }")
      v-card(raised)
        v-img.btn.align-end(:src="imageUrl" v-on="on")
          v-card-title.display-1 About me

    v-card
      v-container.pa-0.mx-0
        v-row(no-gutters)
          v-col(align-self="center" cols=12 md=6)
            v-img.align-end(:src="imageUrl")
              v-card-title.display-2 epaew
              v-card-subtitle Ryo&nbsp;Maeda / Web&nbsp;application&nbsp;developer
          v-col(cols=12 md=6)
              v-list
                v-list-item
                  v-list-item-content
                    v-list-item-title Age
                    v-list-item-subtitle(v-text="age")
                v-list-item
                  v-list-item-content
                    v-list-item-title Location
                    v-list-item-subtitle Tokyo, Japan
                v-list-item
                  v-list-item-content
                    v-list-item-title Certifications
                    v-list-item-subtitle
                      ul
                        li(v-for="cert in certifications")
                          .d-sm-inline-block {{ cert[0] }}
                          .d-sm-inline-block.ml-2 {{ cert[1] }}
                v-list-item
                  v-list-item-content
                    v-list-item-title Experiences
                    v-list-item-subtitle
                      ul: li(v-for="(values, key) in experiences")
                        span {{ key }}
                        ul: li(v-for="value in values") {{ value }}

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    imageUrl: { type: String, required: true }
  },
  data() {
    return {
      certifications: [
        ['2017 春', 'データベーススペシャリスト'],
        ['2016 秋', 'ネットワークスペシャリスト'],
        ['2015 秋', '応用情報技術者'],
        ['2015 春', '基本情報技術者']
      ],
      experiences: {
        Languages: ['Ruby 2.1+', 'JavaScript/TypeScript'],
        Frameworks: ['Ruby on Rails 5+', 'Vue.js (Nuxt.js)', 'React.js'],
        Others: [
          'AWS Lambda',
          'Docker',
          'Git',
          'Sass (SCSS)',
          'Serverless Framework',
          'Webpack 4',
          'etc.'
        ]
      }
    }
  },
  computed: {
    age() {
      const diff = Date.now() - Date.parse('1990/12/27') // millisec
      return new Date(diff).getFullYear() - 1970
    }
  }
})
</script>

<style scoped lang="scss">
@import '~vuetify/src/styles/settings/variables';

.v-dialog__content {
  & ::v-deep .v-dialog {
    max-width: 460px;

    @media #{map-get($display-breakpoints, 'md-and-up')} {
      max-width: 920px;
    }
  }
}

.v-image {
  & ::v-deep &__image {
    opacity: 0.4;
  }

  &.btn {
    max-height: 250px;
  }

  &.btn:hover ::v-deep &__image {
    opacity: 0.8;
  }
}
</style>
