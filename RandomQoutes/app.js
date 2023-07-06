const generate = () => {
  const qoutes = {
    "― Albert Einstein":
      "“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.”",
    "― Lana Del Rey":
      "“Who are you?Are you in touch with all of your darkest fantasies?Have you created a life for yourself where you can experience them?I have. I am fucking crazy.But I am free.”",
    "― Jon Krakauer":
      "“He was unheeded, happy, and near to the wild heart of life. He was alone and young and wilful and wildhearted, alone amid a waste of wild air and brackish waters and the seaharvest of shells and tangle and veiled grey sunlight.”",
    "― Charlotte Eriksson":
      "“I woke up early and took the first train to take me away from the city. The noise and all its people. I was alone on the train and had no idea where I was going, and that’s why I went there.”",
    "― Erik Pevernagie":
      "“Liberty is only possible on the condition of regularity. We cannot be free and play the game of life without abiding to the rules, but the rules have to be adapted constantly in line with our experiences and the events we encounter. ( “If he doesn't play ball “ )”",
  };

  const authors = Object.keys(qoutes);

  const author = authors[Math.floor(Math.random() * authors.length)];

  const qoute = qoutes[author];

  document.getElementById("qoute").textContent = qoute;
  document.getElementById("author").textContent = author;
};

generate();
