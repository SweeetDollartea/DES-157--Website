(function(){
    'use strict';
    console.log('reading js');

    document.addEventListener('DOMContentLoaded', function(){
        var startbutton = document.querySelector(".button");
    
    startbutton.addEventListener ('click', function(){
        document.getElementById("start-box").style.display='none';
        document.getElementById('second-box').style.display = 'block';
    });

    var form =document.querySelector('form');
    
    form.addEventListener('submit', function(event){
        event.preventDefault();

    const form =document.querySelector('form');
    const lib =document.querySelector("second-box");
    const libfinal =document.querySelector('#finalbox');

    const cn = document.getElementById("charactername").value;
    const vn = document.getElementById('villainname').value;
    const cn2 = document.getElementById('charactername2').value;
    const hoh = document.getElementById('hisorher').value;
    const noun = document.getElementById('noun').value;
    const pluralnoun = document.getElementById('pluralnoun').value;

    const ad = document.getElementById('adjective1').value;
    const v = document.getElementById('verb').value;
    const ad2 =document.getElementById('adjective2').value;
    const v2 =document.getElementById('verb2').value;
    const ad3 =document.getElementById('adjective3').value;

    let mytext= `The words submitted are ${cn}`;

    if (cn ==""){
        mytext="please provide a character name";
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
    else if (ad==""){
        mytext="please provide an adjective"
        document.getElementById(adjective1).focus();
    }
    else if (v==""){
        mytext="please provide a verb"
        document.getElementById(verb).focus();
    }
    else if (ad2==""){
        mytext="please provide another adjective"
        document.getElementById(adjective2).focus();
    }
    else if (v2==""){
        mytext="please provide another verb"
        document.getElementById(verb2).focus();
    }
    else if (ad3==""){
        mytext="please provide another adjective"
        document.getElementById(adjective3).focus();
    }
    else {
        mytext = (`In the Mushroom Kingdom,${cn}, a ${ad} plumber, discoverd that Princess ${cn2} was kidnapped by the evil ${vn}.
        To save her, ${cn} must travel through the ${ad2} forest, filled with ${pluralnoun}. Along the way, ${cn} finds a magical ${noun} that gives power to ${v}.
        After overcoming obstacles by defeating Koopa Troops and Bowser Jr., ${cn}, confronts ${vn} in a ${ad3} castle.
        Using ${hoh} new power to ${v}, ${cn} defeats ${vn} and rescue Princess ${cn2} becoming a hero of Mushroom Kingdom.`);
       
    const libfinal = document.getElementById('finalbox');
    libfinal.innerHTML=`<p class="final">${mytext}</p>`;
    libfinal.style.display= 'block';

    document.getElementById('second-box').style.display = 'none';
    }
});
});
})();

