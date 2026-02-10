const noBtn = document.getElementById('no');
const limited = document.getElementById('stop')
const yesBtn = document.getElementById('yes');


let count = null;
let  x_cordinate = null 
let  y_cordinate = null

yesBtn.onclick = ()=>{
    alert("HAPPY VALENTINE DAY")
}

noBtn.addEventListener("mouseover" , ()=>{
    y_cordinate = Math.floor(Math.random() * 100 ) + 1
    x_cordinate = Math.floor(Math.random() * 100 ) + 1


    if(count == 5){
        document.querySelector("h1").textContent = 'stop messing with me'
        limited.style.display = 'block',
        noBtn.style.display = 'none'
    }else{
        let flip_axis = Math.floor(Math.random() * 5) + 1;
        noBtn.classList.add('special')
        if(flip_axis){
            if(flip_axis < 2){
                noBtn.style.top = `${y_cordinate}%`;
                noBtn.style.le = `${x_cordinate}%`
    
                return count ++;
            }else{
                noBtn.style.left = `${x_cordinate}%`;
                return count ++;
            }
        }
    }
})