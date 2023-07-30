const gallery = document.querySelector(".gallery")

function addNewMeme(src, text1, text2) {
  const newMeme = document.createElement("div")
  newMeme.classList.add("meme")
  const newImg = document.createElement("img")
  newImg.setAttribute("src", src)
  const newTop = document.createElement("div")
  newTop.classList.add("top-text")
  if (text1 === undefined) {
    newTop.innerText = ""
  } else {
    newTop.innerText = text1
  }
  const newBottom = document.createElement("div")
  newBottom.classList.add("bottom-text")
  if (text2 === undefined) {
    newBottom.innerText = ""
  } else {
    newBottom.innerText = text2
  }
  newMeme.append(newImg, newTop, newBottom)
  gallery.append(newMeme)
}

addNewMeme("https://imgflip.com/s/meme/Waiting-Skeleton.jpg", "test", "test")