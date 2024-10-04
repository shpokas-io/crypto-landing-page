const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");
const closeBtn = document.getElementById("close-btn");
const backToTopBtn = document.getElementById("backToTopBtn");

//Burger menu toggle
burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
});

//CLOSE MENU WHEN CLICKING OUTSIDE MENU
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});

//Show btn only after user scrolls
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

//Scroll to top when button is clicked
backToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", //for smooth scrolling
  });
};

fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
)
  .then((res) => res.json())
  .then((data) => {
    const bitcoinData = data.find((coin) => coin.id === "bitcoin");
    console.log(bitcoinData);

    if (bitcoinData) {
      const cryptoTableSection = document.querySelector(
        ".hero_crypto-table-grid"
      );
      cryptoTableSection.innerHTML = "";
      const coinContainer = document.createElement("div");
      coinContainer.classList.add("coin-container");

      //create image el
      const coinIcon = document.createElement("img");
      coinIcon.src = bitcoinData.image;
      coinIcon.alt = `${bitcoinData.name}logo`;
      coinIcon.classList.add("'coin-icon','bitcoin-logo'");

      // Create coin text element
      const coinText = document.createElement("p");
      coinText.classList.add("coin-text", "bitcoin-text");
      coinText.innerHTML = `${
        bitcoinData.name
      } <span class="coin-symbol bitcoin-symbol">${bitcoinData.symbol.toUpperCase()}</span>`;

      // Create price element
      const coinPrice = document.createElement("p");
      coinPrice.classList.add("coin-price");
      coinPrice.innerText = `$${bitcoinData.current_price.toLocaleString()}`;

      // Append elements to the container
      coinContainer.appendChild(coinIcon);
      coinContainer.appendChild(coinText);

      // Append everything to the cryptoTableSection
      cryptoTableSection.appendChild(coinContainer);
      cryptoTableSection.appendChild(coinPrice);
      cryptoTableSection.appendChild(document.createElement("hr")); // Add a horizontal line
    } else {
      console.log("Bitcoin data not found.");
    }
  });
