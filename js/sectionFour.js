//Murtaza Arif

function room41 (){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You stand in silence in the moonlit hall. You find yourself looking down at the ghost of the ‘Lady of the Night’. You find a map on the small table beside you. You are instructed to ‘follow her path’"
    //Change the Pic
    thepic.src = "images/ghosthall.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",room36)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",room42)
}

function room42 (){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You find yourself in a small corridor. Dangers looms from the book of magic. You are instructed to ‘take a step back'."
    //Change the Pic
    thepic.src = "images/books.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",room41)
    document.getElementById("S").addEventListener("click",room43)
    document.getElementById("E").addEventListener("click",wrongWay)
}

function room43(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You fall out from the dungeon. The magic spell is still following you from the book of magic. You are asked to ‘take another step back"
    //Change the Pic
    thepic.src = "images/bluehall2.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room42)
    document.getElementById("W").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",room44)
    document.getElementById("E").addEventListener("click",wrongWay)
}

function room44(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You enter the living room through a portal in the book shelf. You are instructed to ‘go towards the piano and not the lamp’"
    //Change the Pic
    thepic.src = "images/living.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room43)
    document.getElementById("W").addEventListener("click",room46)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",room45)
}

function room45(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You find yourself at a landing. You are instructed to ‘avoid the pit and return back to the living room’."
    //Change the Pic
    thepic.src = "images/stairsdown.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",room44)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",wrongWay)
}

function room46(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You find yourself in the gallery and notice Shakespeare on the left and the ghost of the ‘Lady in Black’ on the right. She congratulates you and prepares the gemstone. The room turns warm and glows bright. You now believe in miracles, realms of fantasy, ghosts and entities in the land of Alcazar. Healing power starts to heal Alcazar back to its former glory. You have now inherited the castle."
    //Change the Pic
    thepic.src = "images/ghostlady.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",gameOver)
    document.getElementById("W").addEventListener("click",gameOver)
    document.getElementById("S").addEventListener("click",gameOver)
    document.getElementById("E").addEventListener("click",room44)
}