ThesaurusRex = (function(){

  // stopwords taken from http://esl.about.com/library/vocabulary/bl1000_list1.htm
  stopWords = ["north","under","few","our","life","give","real","me","night","good","close",
  "every","press","show","while","came","don't","year","run","man","late","round","left","only",
  "draw","little","sea","back","far","after","saw","where","story","live","might","made","start",
  "place","hard","get","farm","take","cross","part","tree","work","city","new","thought","any",
  "let","find","last","now","never","been","eye","side","keep","down","state","may","between",
  "who","four","first","sun","call","food","than","cover","water","plant","know","learn","over",
  "still","my","study","people","grow","most","school","no","answer","sound","found","number",
  "country","did","should","come","page","go","own","could","stand","day","head","more","father",
  "look","earth","has","self","two","build","him","near","see","world","thing","mother","make",
  "point","long","animal","her","again","these","us","so","try","like","picture","would","house",
  "write","need","them","off","then","kind","many","light","about","went","way","change","will",
  "men","if","ask","time","why","their","act","do","follow","which","such","she","high","each",
  "big","an","must","said","here","how","land","your","even","use","add","up","spell","when","large",
  "there","port","all","hand","were","read","other","home","out","put","can","end","we","small",
  "some","play","what","also","but","well","word","air","hot","want","by","three","had","set","or",
  "does","from","tell","this","same","have","too","one","old","at","boy","be","right","they","move",
  "his","before","I","mean","as","much","with","cause","are","turn","on","differ","for","line","was",
  "low","he","help","that","say","you","think","it","great","is","sentence","in","form","a","just",
  "and","through","to","very","of","name","the"]

  highlight = function(word, level){
    // assumes white background
    hex = (16 - ((level > 16) ? 16 : level)).toString(16);
    return "<span style='background-color: #F"+hex+hex+"'; style='ThesaurusRexified'>"+word+"</span>"
  }

  growl = function(text, updateFunction){
    var words = text.split(/ /)
    var wordCounts = {}
    var wordsToChange = []
    for(i=0;i<words.length; i++){
      word = words[i]
      wordCounts[word] = (wordCounts[word] || 0) + 1
      if(wordCounts[word] > 1) wordsToChange.push(word)
    }
    for(i=0;i<wordsToChange.length; i++){
      console.log('calling updateFunction for '+wordsToChange[i])
      updateFunction(
        wordsToChange[i],
        highlight(
          wordsToChange[i],
          wordCounts[wordsToChange[i]]
        )
      )
    }
  }

  replaceHtml = function(element){
    return function(word, highlightedWord){
      element.html(
        element.text().replace(new RegExp(word, 'g'), highlightedWord)
      )
    }
  }

  return {
    growl: growl,
    replaceHtml: replaceHtml
  }
})()