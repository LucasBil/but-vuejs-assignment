const { createApp } = Vue

createApp({
    data() {
      return {
        memes: [],
        search: ""
      }
    },
    computed: {
      filteredMemes() {
        return this.memes.filter(b => b.name.toLowerCase().includes(this.search.toLowerCase()))
      }
    },
    methods: {
    //   add() {
    //     // AJAX -> POST
    //     if (this.newBeer.name != "") {
    //       this.beers.push(this.newBeer)
    //       this.newBeer =  { name: "", degree: 0 }
    //     }
    //   }
    },
    mounted() {
      // Exécution dès que tout est prêt
      // Chargement initial de données (AJAX)
      fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => {
            this.memes = data.data.memes
        })
    }
}).mount('#app')