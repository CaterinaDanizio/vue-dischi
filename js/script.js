// Descrizione:
// Facciamo una chiamata ajax all’API di boolean.
// L’API ci restituirà una decina di dischi musicali che dovremo stampare a schermo con Vue.

const collection = "https://flynn.boolean.careers/exercises/api/array/music";

var app = new Vue({
  el: '#app',
  data: {
    playlist: [],
    userSelection: ""
  },

  mounted: function () {
      axios.get(collection).then(risposta => {
      let album = risposta.data.response;
      this.playlist = album;
    });
  },

// Bonus:
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo solo i corrispondenti cd.

  methods: {
    genreSelection: function() {
         this.playlist.forEach(album => {
           if (album.genre.toLowerCase().includes(this.userSelection.toLowerCase())) {
             return album.show = true;
           }
           else if (this.userSelection == "All"){
             return album.show = true;
           }
            else {
             return album.show = false;
           }
        });
     }
   }
});
