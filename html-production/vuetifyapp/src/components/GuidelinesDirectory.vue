<template>
  <v-container fluid>
    <v-layout row wrap justify-center>
      <v-flex
        <v-btn center large
          v-for="item in items"
          :key="item.name"
          :to="item.path">
          <v-btn-text>{{ item.name }}</v-btn-text>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          name: 'Developer Guidelines',
          path: 'guidelines/developer'
        },
        {
          name: 'User Manual',
          path: 'guidelines/user'
        }
      ]
    }
  }
}
</script>
