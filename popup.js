const webSite = 'https://web.whatsapp.com/'
const input = document.querySelector("input");
const button = document.querySelector("button");

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  let tab = tabs[0];
  let paragraph = document.querySelector("p");

  let container1 = document.querySelector(".container1");
  let container2 = document.querySelector(".container2");

  if (!tab.url.startsWith(webSite)){
    container2.style.display = "none";
  }

  if (tab.url.startsWith(webSite)){
    container1.style.display = "none";
  }
});


button.addEventListener("click", () => {
  const phoneNumber = input.value;
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  const apiURL = `https://api.whatsapp.com/send?phone=${encodedPhoneNumber}`;
  
  window.open(apiURL, "_blank");
});