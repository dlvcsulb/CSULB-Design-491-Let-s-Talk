<template>
  <v-container fluid text-xs-center>
    <v-layout column align-center>
      <v-flex>
        <h1 align="center">About Let's Talk Journaling</h1>
          <p>
            <br>Let's Talk Journaling uses the Google Dialogflow programming interface, which allows users to interact with their device through voice or
            text-based conversations powered by the Google AI and neural network.
            <br><br><br>
          </p>

        <h2 align="center"><u>Features</u></h2>
        <ul><br>
        <li>
          Utilizes conversations to alleviate users sad mood.
        </li>
        <li>
          Allows users to have interactive conversations powered by AI.
        </li>
        <li>
          Save user inputs to Google's Firebase
        </li>
        <li>
          Taps into Google's neural network.
        </li>
        <li>
          Leverages the power and accessibility of Google Assistant.
        </li>
        </ul>
        <br><br><br>

        <h1 align="center">Try it out! </h1>
        <iframe
          allow="microphone;"
          width="60%"
          height="430"
          src="https://console.dialogflow.com/api-client/demo/embedded/73f17e31-c617-4113-8006-9aa0cd53432e">
        </iframe>
        <br>
        <br><br>
        <h3><router-link to="/guidelines"><a>Documentation</a></router-link></h3>
        <h3><router-link to="/contact"><a>Contact Us</a></router-link></h3>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  max-width: 800px
}

h1, h2 {
  font-weight: strong;
}

ul {
  list-style-type: disc;
}

li {
  font-weight: 500;
  text-align: center;
}

a {
  color: #3b7299;
}

img {
  margin-left: 10px;
}
</style>
