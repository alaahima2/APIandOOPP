

//==============================================================///
//   Games Assignement  //1- get all games

async function getgames(){
  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'c17ea87c29mshfded1bbaaaa91cfp155610jsn41bbf7b696b5',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  const api = await fetch(url, options);
  const response = await api.json();


  console.log(response);
  console.log(response.length);

  // cartona 
  var htmlAllGames = '';
  for( let i=0 ; i<response.length; i++){

    htmlAllGames+= `
  
  <div class="col-md-6 col-lg-3 smallfont" onclick="displaydetails(${response[i].id})">
    
  <div class="border border-black rounded-3 zoom">
     <div>
      <div class=" p-2">
        <div class="container-fluid text-center">
          <img src= ${response[i].thumbnail} class="w-100 rounded-top-2" alt="game img">
        </div>
        
      </div>
      <div class="container d-flex justify-content-between align-content-center heigh7">

        <div class="container smallfont">
          <h6> ${response[i].title}</h6>
        </div>

        <div>
          
          <button type="button" class="btn btn-primary smallfont">Free</button>
        </div>

      </div>
     </div>

     <div class="p-2 text-center opacity-50 heigh20">
      <p>${response[i].short_description}</p>
     </div>

     <div class="container border  border-black border-bottom-0 border-start-0 border-end-0 py-2">

     <div class="d-flex justify-content-between text-center" >
     <div class="rounded-2 bg-secondary text-center">
      <p class="text-center px-2">${response[i].genre}</p>
     </div>
     <div class="rounded-2 bg-secondary text-center">
       <p class="text-center px-2">${response[i].platform}</p>
      </div>
      </div>

    </div>
   </div>

  </div>
  
  
  `;

  }



  document.getElementById("games").innerHTML = htmlAllGames;





}

getgames();

//get games by category

let category;

async function getgamesbycat(category){
  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category='+category;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'c17ea87c29mshfded1bbaaaa91cfp155610jsn41bbf7b696b5',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  const api = await fetch(url, options);
  const response = await api.json();

  console.log(response);

  var htmlAllGames = '';
  for( let i=0 ; i<response.length; i++){

    htmlAllGames+= `
  
  <div class="col-md-6 col-lg-3 smallfont" onclick="displaydetails(${response[i].id})">
    
  <div class="border border-black rounded-3 zoom ">
     <div>
      <div class=" p-2">
        <div class="container-fluid text-center">
          <img src= ${response[i].thumbnail} class="w-100 rounded-top-2" alt="game img">
        </div>
        
      </div>
      <div class="container d-flex justify-content-between align-content-center heigh7">

        <div class="container smallfont">
          <h6> ${response[i].title}</h6>
        </div>

        <div>
          
          <button type="button" class="btn btn-primary smallfont">Free</button>
        </div>

      </div>
     </div>

     <div class="p-2 text-center opacity-50 heigh20">
      <p>${response[i].short_description}</p>
     </div>

     <div class="container border  border-black border-bottom-0 border-start-0 border-end-0 py-2">

     <div class="d-flex justify-content-between text-center" >
     <div class="rounded-2 bg-secondary text-center">
      <p class="text-center px-2">${response[i].genre}</p>
     </div>
     <div class="rounded-2 bg-secondary text-center">
       <p class="text-center px-2">${response[i].platform}</p>
      </div>
      </div>

    </div>
   </div>

  </div>
  
  
  `;

  }
  document.getElementById("games").innerHTML = htmlAllGames;

}


let game ;
async function displaydetails(game){

  htmlcomp=`<div class="loader m-auto"></div>`;
  document.getElementById("all").innerHTML = htmlcomp;


  console.log(game);

     

  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id='+game;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'c17ea87c29mshfded1bbaaaa91cfp155610jsn41bbf7b696b5',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  const api = await fetch(url, options);
  const response = await api.json();


  console.log(response);

  htmlcomp=`
  <div id="games">

  <div class="container p-4">
    <div class="d-flex justify-content-between">
      <div class="text-white"> <h3> Details Game </h3></div>
      <div class="" onclick="location.reload();" > <i class="fa fa-close" style="font-size:25px;color:white"></i> </div>
    </div>
  </div>

  <div class="container p-4">

    <div class="row">
       <div class="col-md-4">
        <img src= ${response.thumbnail}  class="w-100" alt="game img">
       </div>

       <div class="col-md-8 text-white">
        <h2>Title : ${response.title}</h2>
        <div class="d-flex my-2">
         <div><h4>Category :</h4></div>
         <div class="bg-primary text-black rounded-2"><h4>${response.genre}</h4></div>
        </div>
        <div class="d-flex my-2">
          <div><h4>Platform :</h4></div>
          <div class="bg-primary text-black rounded-2"><h4> ${response.platform}</h4></div>
        </div>
        <div class="d-flex my-2">
          <div><h4>Status :</h4></div>
          <div class="bg-primary text-black rounded-2"><h4>${response.status}</h4></div>

        </div>
           

        <div >
               <p>${response.description}</p>
        </div>
           
        <a  href= ${response.game_url} class="btn btn-outline-warning" role="button" target="blank">Show Game </a>
         


       </div>
    </div>
  </div>
 
 




</div>
  ` ;

  document.getElementById("all").innerHTML = htmlcomp;
}

