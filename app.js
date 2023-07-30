
const form = document.querySelector("form")
const imgSrc = document.querySelector("input[name='img-src']")
const topText = document.querySelector("input[name='top-text']")
const bottomText = document.querySelector("input[name='bottom-text']")
const gallery = document.querySelector(".gallery")

form.addEventListener("submit", function(event){
  event.preventDefault();
  const newMeme = addNewMeme(
    imgSrc.value,
    topText.value,
    bottomText.value
  );
  gallery.append(newMeme);
  imgSrc.value = '';
  topText.value = '';
  bottomText.value = '';
});

function addNewMeme(src, textTop, textBot) {
  const memeDiv = document.createElement("div")
  memeDiv.classList.add("meme")
  const newImg = document.createElement("img")
  newImg.setAttribute("src", src)
  const newTop = document.createElement("div")
  newTop.classList.add("top-text")
  if (textTop === undefined) {
    newTop.innerText = ""
  } else {
    newTop.innerText = textTop
  }
  const newBottom = document.createElement("div")
  newBottom.classList.add("bottom-text")
  if (textBot === undefined) {
    newBottom.innerText = ""
  } else {
    newBottom.innerText = textBot
  }
  memeDiv.append(newImg, newTop, newBottom);
  return memeDiv;
}

gallery.addEventListener('click', function(event){
  const deleteDiv = event.target.parentElement;
  deleteDiv.remove();
});
