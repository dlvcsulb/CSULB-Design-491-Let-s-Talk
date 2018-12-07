<template>
  <v-container fluid text-xs-center>
    <v-layout column align-center>
      <v-flex>

        <h1><strong>Let's Talk Journaling Developer Guidelines</strong></h1>
        <p align="center">
        <strong>
          Version: 0.01alpha
          <br>
          Build Date: 2018-04-29
        </strong>
        </p>

        <h2 align="center"><u>Menu</u></h2>
        <br><a href="#Install">I. Installation</a>
        <br><a href="#Components">II. Components and Dependencies</a>
        <br><a href="#Contribute">III. Contribute</a>
        <br><a href="#Support">IV. Support</a>
        <br><a href="#Maintainers">V. Maintainers</a>
        <br><br><br>

        <ol type="I">
        <A NAME="Install"></A>
        <strong><li>Installation</li></strong>
        <p>
            To use Let's Talk Journaling, users do not have to install any dedicated applications. However, they will need to link the Action to their Google Assistant. They may invoke the action by explicitedly calling the action name such as "Ok Google, talk to <strong>Let's Talk Journaling</strong> to <strong>start the conversation</strong>".
        </p>

        <a href="#Top">Back to top</a>
        <br><br><br>

        <a name="Components"></a>
        <strong><li>Components and Dependencies</li></strong>
          <p>
            Let's Talk Journaling is built from the ground up using tools with artificial intelligence in mind. At the core of the program lies <a href="https://dialogflow.com">DialogFlow</a>, which is Google's programming interface for conversational AI. Due to its incorporation of Google's Machine learning algorithms and optimization for the Google Assistant, it is the clear choice for an application of this scale.
                <br><br>

            Additionally, Google's <a href="https://firebase.google.com">Firebase database</a> was another natural selection for Let's Talk Journaling's database. It's instantaenous and reliable nature means that end users have lightning fast access to logged conversations while not having to worry about a service that is spotty or unresponsive.
          </p>
        <a href="#Top">Back to top</a>
        <br><br><br>

        <a name="Contribute"></a>
        <strong><li>Contribute</li></strong>
          <p>
              If you would like to contribute to the project, please visit the project page for the latest documentation and source codes.
          </p>
        <a href="#Top">Back to top</a>
        <br><br><br>

        <a name="Support"></a>
        <strong><li>Support</li></strong>
          <p>
            Let's Talk Journaling strives to be a seamless and intuitive experience for all end users. For any issues regarding Let's Talk Journaling, please contact us at: <br>
              <strong> CSULB: Let's Talk Journaling Design Team</strong><br>
              <strong> csulbletstalk@gmail.com</strong>
          </p>
        <a href="#Top">Back to top</a>
        <br><br><br>

        <a name="Maintainers"></a>
        <strong><li>Maintainers</li></strong>
          <p>
            Visit the <router-link to="/contact"><a>Contact</a></router-link> page!
          </p>
        <a href="#Top">Back to top</a>
        <br><br><br>
        </ol>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  max-width: 800px
}

h1, h2, h3 {
  font-weight: 500;
}

ol {
  text-align: center;
  display: inline-block;
  list-style-position: inside;

}

li {
  font-weight: 500;
  text-align: center;

}

ul {
  list-style-type: disc;
}

a {
  color: #3b7299;
}

img {

}
</style>
