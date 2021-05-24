 function getRandomValue (max, min) {
     return Math.floor(Math.random() * (max - min)) + min;
 }
 
 const app = Vue.createApp({
     data() {
         return {
             playerHealth: 100,
             monsterHealth: 100
         };
     },
     methods: {
         attackMonster () {
            const attackValue = getRandomValue(12, 5);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
         },
         attackPlayer() {
            const attackValue = getRandomValue(15, 8);
            this.playerHealth -= attackValue;
         }
     }
 })

 app.mount('#game')