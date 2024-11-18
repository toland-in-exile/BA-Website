/*
        <img src="Assets/logo!.png" alt="BA Flag">
        <p id="quoteTag">Quotes:</p>
        <div  id="quoteContainer">
            <p></p>
        </div>
        <p style="position: absolute; width: 92%; bottom: 5px; left: 4%; word-wrap: break-word">Website by <a href="aboutMe.html"><u>Bradley, Phillip D.</u></a></p>
        <!--list of games we play, possibly using the steam API to auto-pop for a BA steam group or such
        BA dish of the week w/ link to cookbook page-->
*/
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
