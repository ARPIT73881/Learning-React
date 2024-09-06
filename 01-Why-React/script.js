const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const basket1 = document.querySelector(".basket-1");
const basket2 = document.querySelector(".basket-2");

const totalApples = 10;
let secondBasketCount = 0;
let firstBasketCount = totalApples - secondBasketCount;

basket1.innerText = firstBasketCount;
basket2.innerText = secondBasketCount;

leftArrow.addEventListener("click", () => {
  if (firstBasketCount > 0) {
    firstBasketCount = firstBasketCount - 1;
    secondBasketCount = secondBasketCount + 1;
    basket1.innerText = firstBasketCount;
    basket2.innerText = secondBasketCount;
  }
});

rightArrow.addEventListener("click", () => {
  if (secondBasketCount > 0) {
    firstBasketCount = firstBasketCount + 1;
    secondBasketCount = secondBasketCount - 1;
    basket1.innerText = firstBasketCount;
    basket2.innerText = secondBasketCount;
  }
});
