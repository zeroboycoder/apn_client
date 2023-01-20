<template>
  <v-card class="mx-auto my-7" elevation="4">
    <v-row>
      <v-col cols="4">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
          cover
        ></v-img>
      </v-col>
      <v-col class="d-flex flex-column justify-center">
        <v-card-title class="mt-2">
          <h2>What is Brand Equity?</h2>
        </v-card-title>
        <v-card-text>
          <p>
            Brand equity is a marketing term that describes a brand's value. That value is
            determined by consumer perception of and experiences with the brand. If people
            think highly of a brand, it has positive brand equity.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn variant="text" @click="$router.push('/contents/182938827a982')">
            See More
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>
