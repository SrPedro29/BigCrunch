const select = document.querySelectorAll('[data-character]');
let paper_2 = document.getElementById('paper_2')
let docs = document.getElementById('docs')

select.forEach((element)=>{
    element.addEventListener('click', (event)=>{
      const clicked = event.target.parentElement;
      const characterElement = clicked.hasAttribute('data-character')
      
      if(characterElement) showIdentity(clicked)
      if(paper_2.classList.contains('stop')){
       paper_2.classList.add('play')
       paper_2.classList.remove('stop')
      } 
      else{
       paper_2.classList.add('stop')
       paper_2.classList.remove('play')
      }

      if(docs.classList.contains('hide')){
        docs.classList.add('show')
        docs.classList.remove('hide')
       } 
       else{
        docs.classList.add('hide')
        docs.classList.remove('show')
       }
       
    })
})

function showIdentity(clicked){
    const characterName = clicked.getAttribute('data-character')

    document.getElementById('docs').innerHTML =` 
    <img src="image/${characterName}_hesiodus.png" alt="" class="hesiodus">
    <img src="image/${characterName}_identity.png" alt="" class="identity">
    <img src="image/${characterName}_acess.png" alt="" class="acess">
    <img src="image/${characterName}_icon.png" alt="" class="icon">
    <img src="image/${characterName}_banner.png" class="banner">`;
    
}

