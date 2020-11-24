const app = new Vue({
  el: ".app",
  data:{
    cds:[],
    actualGenre: "all"
  },
  created(){
    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
    .then( result => {
      albumList = result.data.response;
      this.cds = albumList;
      console.log( this.cds );
      return albumList;
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
          albumList = result.data.response;
          this.cds = albumList;
          console.log( this.cds );
          return albumList;
        })
        .catch( error => {
          console.log(error)
          this.errored = true
        } )
      }
      else {
        this.cds = result.data.response.filter( (cd) => {
          result.data.response === actualGenre;
        })
      }
    }
  }
});
