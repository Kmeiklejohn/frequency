document.getElementById("countButton").onclick = function () {
    // your code will go here ...
    var typedText = document.getElementById("textInput").value;

    typedText = typedText.toLowerCase();
    // This changes all the letter to lower case.

    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    // This gets rid of all the characters except letters, spaces, and apostrophes.
    // We will learn more about how to use the replace function in an upcoming lesson
    let letterCounts = {};

    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];

        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }
        // do something for each letter.
    }
    for (letter in letterCounts) {
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
        span.appendChild(textContent);
        document.getElementById("lettersDiv").appendChild(span);
    }
    let words = typedText.split(/\s/);
    let wordsCount = {};

    for (let i = 0; i < words.length; i++) {
        currentWords = words[i];

        if (wordsCount[currentWords] === undefined) {
            wordsCount[currentWords] = 1;
        } else {
            wordsCount[currentWords]++;
        }
    }


    for (words in wordsCount) {
        let span = document.createElement("span");
        let textContent = document.createTextNode( " "+ wordsCount[words]+":" +words+",");
        span.appendChild(textContent);
        document.getElementById("wordsDiv").appendChild(span);
    }


}