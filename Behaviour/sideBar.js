const page = document;
const sideBar = page.getElementById("sideBar");

//flag
const flag = page.createElement("img");
sideBar.appendChild(flag)
flag.setAttribute("src", "Assets/logo!.png");
flag.setAttribute("alt", "BA Flag");

//quoteTag?
const quoteTag = page.createElement("p");
sideBar.appendChild(quoteTag);
quoteTag.id = "quoteTag";
quoteTag.innerHTML = "Quotes:";

//quoteContainer
const quoteContainer = page.createElement("div");
sideBar.appendChild(quoteContainer);
quoteContainer.id = "quoteContainer";
const quote = page.createElement("p");
quoteContainer.appendChild(quote);

//signature
const sig = page.createElement("p");
sideBar.appendChild(sig);
sig.style.position = "absolute";
sig.style.width = "92%";
sig.style.bottom = "5px";
sig.style.left = "4%";
sig.style.wordWrap = "break-word";
sig.innerHTML = "Website by <a href='aboutMe.html'><u>Bradley, Phillip D.</u></a>";
