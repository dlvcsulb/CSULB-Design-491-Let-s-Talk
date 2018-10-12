<template>
  <v-app>
    <v-toolbar height="80px" app>
      
      <router-link to="/" tag="span" style="cursor: pointer"><img src="@/assets/lets-talk-final-logo.png" alt="" width="100px" length="100px" style="margin-left:10px; margin-top:10px"></router-link>
      <v-toolbar-title>
        {{ appTitle }}
      </v-toolbar-title>
      <v-spacer>
      </v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left color=blue darken-2>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view>
      </router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        appTitle: "LET'S TALK GOOGLE HOME",
        sidebar: false,
        menuItems: [
          {
            title: 'Home',
            path: '/',
            icon: 'home'
          },
          {
            title: 'Guidelines',
            path: '/guidelines',
            icon: 'folder_special'
          },
          {
            title: 'Contact Us',
            path: '/contact',
            icon: 'sentiment_satisfied'
          }
        ]
      }
    }
  }
</script>

<style scoped>
.content {
  background-image: url("./assets/Bubble.jpg");
  background-repeat: no-repeat;
  background-size: 10000px 15000px;
}
</style>
