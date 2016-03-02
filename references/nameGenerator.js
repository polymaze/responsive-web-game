
<!DOCTYPE html>
<html>
    <head>
        <title>Name generator</title>
        <script type="text/javascript">
            var consonants = "bcdfghjklmnpqrstvwz"; // ignore x
            var vowels = "aeoiuy";
            var exitProbability = 0.9;
            var max = 10;
            var twoVowelsInRowProbability = 0.1;
            
            function randomName(){
                var name;
                var sindex= 0;
                if(Math.random() > 0.3){ // start with consonant
                    name = randomString(1, consonants.toUpperCase());
                    name += randomString(Math.round(1 + Math.random()), vowels); // one or two vowels
                    sindex = 1;
                }else{
                    name = randomString(1, vowels.toUpperCase()); // one or two vowels
                    if(Math.random() < twoVowelsInRowProbability){
                        name += randomString(1, vowels); // one or two vowels
                    }
                }
                return name + randomNameBody(sindex);
            }
            function randomNameBody(count){
                var name = "";
                if(count >= 10){
                    return name;
                }
                if(Math.random() > Math.pow(exitProbability, count)){
                    return name;
                }
                var s = randomString(1, consonants);
                if(Math.random() > 0.95){
                    s = s + s;
                }
                name += s;
                if(Math.random() > Math.pow(exitProbability, count)){
                    return name;
                }
                name += randomString(1, vowels);
                if(Math.random() < twoVowelsInRowProbability){
                    name += randomString(1, vowels); // one or two vowels
                }
                return name + randomNameBody(count + 1);
            }
            
            
            
            function randomString(length, chars) {
                var result = '';
                for (var i = 0; i < length; i++){ 
                    result += chars[Math.round(Math.random() * (chars.length - 1))];
                }
                return result;
            }
            
            function showNames(){
                var s = "";
                for(var i = 0; i < 10; i++){
                    s += "<div onclick=\"if(this.style.backgroundColor == 'yellow') this.style.backgroundColor = ''; else this.style.backgroundColor = 'yellow';\">" + randomName() + "</div>";
                }
                var ndiv = document.createElement("div");
                var w = "100pt";
                console.log(w);
                ndiv.innerHTML = s;
                document.getElementById('target').insertBefore(ndiv, document.getElementById("target").children[0]);
                window.setTimeout(function(ndiv,w){return function(){ndiv.style.width=w; ndiv.style.padding="1em";}}(ndiv,w), 16);
            }
        </script>
        <style type="text/css">
            div#target > div{
                display: inline-block;
                width: 0;
                padding:0;
                padding-top:1em;
                padding-bottom:1em;
                overflow:hidden;
                transition: all 1s ease;
            }
            body{
                font-family:sans-serif;
                font-size: 11pt;
            }
        </style>
    </head>
    <body>
        <input type="button" onclick="showNames()" value="Generate names" />
        <div id="target"></div>
    </body>
</html>