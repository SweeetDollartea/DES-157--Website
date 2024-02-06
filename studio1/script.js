document.addEventListener('DOMContentLoaded', function(){
    var startbutton = document.querySelector(".button");

startbutton.addEventListener ('click', function(){
    document.getElementById("start-box").style.display='none';
    document.getElementById('second-box').style.display = 'block';
    document.getElementById('third-box').style.display = 'block';
}) });

(function(){
    'use strict'
    console.log('reading js');

    const form =document.querySelector('form');
    const lib =document.querySelector("second-box");

    form.addEventListener('submit', function(event){
        event.preventDefault();

    const cn = document.getElementById("charactername").value;
    const vn = document.getElementById('villainname').value;
    const cn2 = document.getElementById('charactername2').value;
    const hoh = document.getElementById('hisorher').value;
    const noun = document.getElementById('noun').value;
    const pluralnoun = document.getElementById('pluralnoun').value;

    let mytext;

    if (cn ==""){
        mytext="please provide a charactername";
        document.getElementById(charactername).focus();
    }
    else if (vn ==""){
        mytext="please provide a villain name";
        document.getElementById(villainname).focus();
    }
    else if(cn2==""){
        mytext="please provide another character name";
        document.getElementById(charactername2).focus();
    }
    else if (hoh==""){
        mytext="Choose his or her";
        document.getElementById(hisorher).focus();
    }
    else if (noun==""){
        mytext="Please provide a noun";
        document.getElementById(noun).focus();
    }
    else if (pluralnoun==""){
        mytext="Please provide a plural noun";
        document.getElementById(pluralnoun).focus();
    }
    else {
        mytext= (`The words submitted are ${charactername}, ${villainname}, ${charactername2}, ${hisorher}, ${noun}, ${pluralnoun}`);
        const textfield =document.querySelectorAll('input[type=text]');
        for (let i=0; i<textfield.length;i++){
            textfield[i].value='';
        }
    }
    form.innerHTML=mytext;

    });

})();
