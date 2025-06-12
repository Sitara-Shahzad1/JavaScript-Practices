function CreateCard(title, cName, views, monthsOld, Duration, thumbnail) {
  let viewK 
  if (views < 100000) {
    viewK = views / 100000 + 'K';
  }
  else if (views < 1000000) {
    viewK = views / 100000 + 'M';
  }
  else {
    viewK = views / 1000 + 'K';
  }

  let html = ` <div class="card">
      <div class="image"> <img src= ${thumbnail} alt="" srcset="">
      <div class="capsule">${Duration}</div> </div>
      <div class="text">
        <h1 > ${title} </h1> 
        <p>${cName} . ${viewK} views . ${monthsOld} </p>
      </div>
       <div class="btn" > <button> ADD New </button>  </div> 

      
    </div>`

    
   let newBtn =  document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html

   document.querySelector('btn').addEventListener('click', newBtn);

}



CreateCard("Installing VS Code & How Website Work | Sigma Web Development Course-Tutorial 1",
  "CodeWithHarry", 727000, "2 months ago ", "32:22", "C:\Users\DELL\Documents\JavaScript Course\Practices\Practice\Dynamic Website\Harry .png"
)