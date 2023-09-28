
const imageContainer = document.querySelector('.image-container')
const btn = document.querySelector('.btn');
// let images = 4; 
btn.addEventListener('mouseover', addMoreImages)


function addMoreImages() {

  // also you can use a for loop to geneate  more images

  /*

  for (let i = 0; i < images; i++){
  const newImg = document.createElement('img')
  newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 3000)}`
  
  imageContainer.appendChild(newImg)
  }

  */

  const newImg = document.createElement('img')
  newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 3000)}`
  
  imageContainer.appendChild(newImg)

  
}



// Add images using js