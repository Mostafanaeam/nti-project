let btn=document.getElementById('btn')
    console.log(btn)
window.onscroll = function(){
    if(scrollY > 110)
    {
    btn.style.display = 'block';
    }else{
    btn.style.display = 'none';
    }
}

btn.onclick = function (){
    window.scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })

    
};