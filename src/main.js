let counter = 1;

export const startInterval = () => {
   setInterval(() => {
      let radio = document.querySelector("#radio" + counter);
      if (radio) radio.checked = true;
      counter++;
      if (counter > 4) {
         counter = 1;
      }
   }, 6000);
};
