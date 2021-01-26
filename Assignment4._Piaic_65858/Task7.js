var text = "The quick brown fox jumps over the lazy dog";
var word = text.split(" ");
var count = 0;
for(var i=0; i<word.length; i++){
    if(word[i] === "the" || word[i] === "The"){
        count += 1;
    }
}
document.write("Text:" + text + "<br>" + "There are " + count + " occurrence(s) of the word 'the'")