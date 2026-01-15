<template>
  <div class="team-section">
    <div class="team-member">
      <fieldset>
        <legend>Quel est le <strong>premier</strong> jeu vidéo commercial créé ? (1pt)</legend>
        <input
          type="radio"
          id="radio1"
          name="groupeRadio"
          value="Space Invaders"
          v-model="userAnswers.q1"
        />
        <label for="radio1">Space Invaders</label><br />

        <input type="radio" id="radio2" name="groupeRadio" value="Pong" v-model="userAnswers.q1" />
        <label for="radio2">Pong</label><br />

        <input
          type="radio"
          id="radio3"
          name="groupeRadio"
          value="Pac-Man"
          v-model="userAnswers.q1"
        />
        <label for="radio3">Pac-Man</label>
      </fieldset>

      <fieldset>
        <legend>
          Où se déroule <strong>l'histoire</strong> de <strong>Super Mario Bros. Wonder</strong> ?
          (1pt)
        </legend>
        <input
          type="radio"
          id="radio4"
          name="groupeRadio2"
          value="Sarasaland"
          v-model="userAnswers.q2"
        />
        <label for="radio1">Sarasaland</label><br />

        <input
          type="radio"
          id="radio5"
          name="groupeRadio2"
          value="Le Royaume des Champignons"
          v-model="userAnswers.q2"
        />
        <label for="radio2">Le Royaume des Champignons</label><br />

        <input
          type="radio"
          id="radio6"
          name="groupeRadio2"
          value="Le Royaume des Fleurs"
          v-model="userAnswers.q2"
        />
        <label for="radio3">Le Royaume des Fleurs</label>
      </fieldset>

      <fieldset>
        <legend>Quel est <strong>l'abillité</strong> de <strong>Kirby</strong> ? (1pt)</legend>
        <input
          type="radio"
          id="radio7"
          name="groupeRadio3"
          value="Court Vite"
          v-model="userAnswers.q3"
        />
        <label for="radio1">Court Vite</label><br />

        <input
          type="radio"
          id="radio8"
          name="groupeRadio3"
          value="Copie les capacités d'autrui"
          v-model="userAnswers.q3"
        />
        <label for="radio2">Copie les capacités d'autrui</label><br />

        <input
          type="radio"
          id="radio9"
          name="groupeRadio3"
          value="Saute haut"
          v-model="userAnswers.q3"
        />
        <label for="radio3">Saute haut</label>
      </fieldset>

      <fieldset>
        <legend>
          Sur <strong>Brawlstars</strong> Quel <strong>Brawler</strong> est
          <strong>légendaire</strong> ? (2pt)
        </legend>
        <input
          type="radio"
          id="radio10"
          name="groupeRadio4"
          value="Corbac"
          v-model="userAnswers.q4"
        />
        <label for="radio1">Corbac</label><br />

        <input
          type="radio"
          id="radio11"
          name="groupeRadio4"
          value="Mico"
          v-model="userAnswers.q4"
        />
        <label for="radio2">Mico</label><br />

        <input
          type="radio"
          id="radio12"
          name="groupeRadio4"
          value="Shelly"
          v-model="userAnswers.q4"
        />
        <label for="radio3">Shelly</label>
      </fieldset>

      <fieldset>
        <legend>Quel <strong>personnage</strong> Appartient à <strong>Sega</strong> ? (2pt)</legend>
        <input
          type="radio"
          id="radio13"
          name="groupeRadio5"
          value="Link"
          v-model="userAnswers.q5"
        />
        <label for="radio1">Link</label><br />

        <input
          type="radio"
          id="radio14"
          name="groupeRadio5"
          value="Spyro"
          v-model="userAnswers.q5"
        />
        <label for="radio2">Spyro</label><br />

        <input
          type="radio"
          id="radio15"
          name="groupeRadio5"
          value="Alex Kidd"
          v-model="userAnswers.q5"
        />
        <label for="radio3">Alex Kidd</label>
      </fieldset>

      <fieldset>
        <legend>
          Comment s'appele le <strong>personnage</strong> principal du jeu
          <strong>Kid Icarus</strong> ? (3pt)
        </legend>
        <input type="radio" id="radio16" name="groupeRadio6" value="Pit" v-model="userAnswers.q6" />
        <label for="radio1">Pit</label><br />

        <input
          type="radio"
          id="radio17"
          name="groupeRadio6"
          value="Samus"
          v-model="userAnswers.q6"
        />
        <label for="radio2">Samus</label><br />

        <input
          type="radio"
          id="radio18"
          name="groupeRadio6"
          value="Palutena"
          v-model="userAnswers.q6"
        />
        <label for="radio3">Palutena</label>
      </fieldset>

      <button @click="showResults">Confirmer</button>

      <div v-if="showPopup" class="popup">
        <h3>Résultats</h3>
        <p>Score : {{ score }}/{{ totalPoints }}</p>
        <div>
          <h4>Mauvaises réponses :</h4>
          <ul>
            <li v-for="(correction, index) in incorrectAnswers" :key="index">
              <p>Question: {{ correction.questionText }}</p>
              <p>Votre choix: {{ correction.userAnswer }}</p>
              <p>Bonne réponse: {{ correction.correctAnswer }}</p>
            </li>
          </ul>
        </div>

        <button @click="closePopup">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionComponent',
  data() {
    return {
      correctAnswers: {
        q1: {
          answer: 'Pong',
          text: 'Quel est le premier jeu vidéo commercial créé ?',
        },
        q2: {
          answer: 'Le Royaume des Fleurs',
          text: "Où se déroule l'histoire de Super Mario Bros. Wonder ?",
        },
        q3: {
          answer: "Copie les capacités d'autrui",
          text: "Quel est l'abillité de Kirby ?",
        },
        q4: {
          answer: 'Corbac',
          text: 'Sur Brawlstars, quel Brawler est légendaire ?',
        },
        q5: {
          answer: 'Alex Kidd',
          text: 'Quel personnage appartient à Sega ?',
        },
        q6: {
          answer: 'Pit',
          text: "Comment s'appelle le personnage principal du jeu Kid Icarus ?",
        },
      },
      userAnswers: {
        q1: null,
        q2: null,
        q3: null,
        q4: null,
        q5: null,
        q6: null,
      },
      score: 0,
      totalPoints: 10,
      incorrectAnswers: [],
      showPopup: false,
    };
  },
  methods: {
    showResults() {
      this.score = 0;
      this.incorrectAnswers = [];

      Object.keys(this.correctAnswers).forEach((key) => {
        const correctAnswer = this.correctAnswers[key].answer;
        const questionText = this.correctAnswers[key].text;
        if (this.userAnswers[key] === correctAnswer) {
          this.score += key === 'q4' || key === 'q5' ? 2 : key === 'q6' ? 3 : 1;
        } else {
          this.incorrectAnswers.push({
            questionText: questionText,
            userAnswer: this.userAnswers[key] || 'Aucun',
            correctAnswer: correctAnswer,
          });
        }
      });
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
  },
};
</script>
