/* const addText = document.getElementById("addText");
const encryptButton = document.getElementById("encryptButton");
const decryptButton = document.getElementById("decryptButton");
const copyButton = document.getElementById("copyButton");
const finalMessage = document.getElementById("finalMessage"); */


let replace = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

const displayMessage = (newText) => {
    finalMessage.innerHTML = newText
    imageNoText.classList.add("hidden");
    rightPaneInfo.style.display = "none";
    copyButton.style.display = "block";
    resetButton.style.display = "block";
    rightPane.classList.add("adjust");
    finalMessage.classList.add("adjust");
}

encryptButton.addEventListener("click", () => {
    const text = addText.value.toLowerCase();
    if (text == ""){
        alert("Please add a text to encrypt.")
    } else {
        function encrypt(newText){
            for (let i = 0; i < replace.length; i++){
                if (newText.includes(replace[i][0])){
                    newText = newText.replaceAll(replace[i][0], replace[i][1]);
                };
            };
            return newText;
        }
        displayMessage(encrypt(text));
    }
});

decryptButton.addEventListener("click", () => {
    const text = addText.value.toLowerCase();
    if (text == "") {
        alert("Please add a text to decrypt.")
    } else {
        function decrypt(newText){
            for (let i = 0; i < replace.length; i++){
                if (newText.includes(replace[i][1])){
                    newText = newText.replaceAll(replace[i][1], replace[i][0]);
                };
            };
            return newText;
        }
        displayMessage(decrypt(text));
    }
});

copyButton.addEventListener("click", () => {
    let text = finalMessage;
/*     navigator.clipboard.writeText(text.value); */
    text.select();
    document.execCommand('copy');
    alert("Texto copiado");
})

resetButton.addEventListener("click", () => {
    finalMessage.innerHTML = "";
    addText.value = "";
    imageNoText.classList.remove("hidden")
    rightPaneInfo.style.display = "block";
    copyButton.style.display = "none";
    resetButton.style.display = "none";
    rightPane.classList.remove("adjust")
    finalMessage.classList.remove("adjust");
    addText.focus();    
})






