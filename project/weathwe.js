
 let apikey=    `5dab3f14c449292e4d031371f2d9a9ff`
 let inp =document.querySelector('input')
 let btn =document.querySelector('button')
 let temp=document.querySelector('#temp')
 let city=document.querySelector('#city')

 btn.addEventListener('click',()=>{
    console.log('rrrr')
    let text=inp.value
    console.log(text,"inp")
 

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apikey}`)
.then((res)=>{
    return res.json()
 } ).then((data)=>{
        console.log(data)
        fun1(data)
    })
 })
 function fun1(data){
    city.innerHTML=data.name
    temp.innerHTML=data.main.temp
}
