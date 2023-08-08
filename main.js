var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function StaticRange()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.result[0][0].transcipt;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
}

function start()
{
    
}