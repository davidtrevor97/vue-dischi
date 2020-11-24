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

      if ( actualGenre === "all" ) {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then( result => {
          this.cds =  result.data.response;
          return result.data.response;
        })
        .catch( error => {
          console.log(error)
          this.errored = true
        } )
      }

      else {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then( result => {
          console.log( result.data.response.filter( (item) =>{
            item.genre.toLowerCase() === actualGenre.toLowerCase()
          }) );
        })
        .catch( error => {
          console.log(error)
          this.errored = true
        } )
        }
      }
    }
});


// this.cds =  result.data.response.filter( (cd) =>{
//   cd.genre === actualGenre
// } );
// return this.cds;
