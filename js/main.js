const app = new Vue({
  el: ".app",
  data:{
    cds:[],
    actualGenre: "all"
  },
  created(){
    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
    .then( result => {
      this.cds =  result.data.response;
      return result.data.response;
    })
    .catch( error => {
      console.log(error)
      this.errored = true
    } );
  },
  methods:{
    filterByGenre(actualGenre){
      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then( result => {
        if ( actualGenre === "all" ) {
            this.cds =  result.data.response;
            return result.data.response;
        }
        else {
            this.cds = result.data.response.filter( (cd) => {
              return cd.genre.toLowerCase() === actualGenre.toLowerCase();
            })
          }
      })
      .catch( error => {
        console.log(error)
        this.errored = true
      } )
    }
  }
});


// this.cds =  result.data.response.filter( (cd) =>{
//   cd.genre === actualGenre
// } );
// return this.cds;
