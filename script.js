// function bigImage(id) {
//   const element = document.getElementById(id)
//   if (element.classList.value == 'image') {
//     element.classList.replace('image', 'biggerImage')
//   } else {
//     element.classList.replace('biggerImage', 'image')
//   }
// }


function openModal(x) {
  const idNum = x.slice(-2)
  const modal = document.getElementById(`myModal${idNum}`)
  const img = document.getElementById(`myImg${idNum}`)
  const modalImg = document.getElementById(`img${idNum}`)
  const captionText = document.getElementById(`caption${idNum}`)
  modal.style.display = 'block'
  modalImg.src = img.src
  captionText.innerHTML = img.alt

  let span = document.getElementsByClassName('close')[idNum - 1]
  span.onclick = function() {
    modal.style.display = 'none'
  }
}

