let count = 0;
document.getElementById(`Decrease`).onclick = function(){
    count--;
    document.getElementById(`myh1`).textContent = count;
}

document.getElementById(`Increase`).onclick = function(){
    count++;
    document.getElementById(`myh1`).textContent = count;
}

document.getElementById(`Reset`).onclick = function(){
    count = 0;
    document.getElementById(`myh1`).textContent = count;
}