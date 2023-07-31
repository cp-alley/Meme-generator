
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

function addNewMeme(src, text1, text2){
  const newMemeDiv = newImgDiv(src);
  const topTextDiv = newTopText(text1);
  const botTextDiv = newBotText(text2);
  newMemeDiv.append(topTextDiv, botTextDiv);
  return newMemeDiv;
};

function newImgDiv(src){
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("meme");
  const newImg = document.createElement("img");
  newImg.setAttribute("src", src);
  imgDiv.append(newImg);
  return imgDiv;
};

function newTopText(text){
  const newTop = document.createElement("div");
  newTop.classList.add("top-text");
  if (text === undefined) {
    newTop.innerText = "";
  } else {
    newTop.innerText = text;
  }
  return newTop;
};

function newBotText(text){
  const newBot = document.createElement("div");
  newBot.classList.add("bottom-text");
  if (text === undefined) {
    newBot.innerText = "";
  } else {
    newBot.innerText = text;
  }
  return newBot;
};

gallery.addEventListener('click', function(event){
  const deleteDiv = event.target.parentElement;
  deleteDiv.remove();
});
