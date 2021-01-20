let counter = 1;

export const startInterval = () => {
   setInterval(() => {
      document.querySelector("#radio" + counter).checked = true;
      counter++;
      if (counter > 4) {
         counter = 1;
      }
   }, 6000);
};

export const stopInterval = () => {
   clearInterval(startInterval);
};
