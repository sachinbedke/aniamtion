const projects = [
     {
 name:"Todo",
 image:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
 url:"https://www.google.com/",
 desc:"Lorem"
},
{
    name:"Game",
    image:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    url:"https://www.google.com/",
    desc:"Lorem"
   },
   {
    name:"Money",
    image:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    url:"https://www.google.com/",
    desc:"Lorem"
   },
   {
    name:"red bus",
    image:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    url:"https://www.google.com/",
    desc:"Lorem"
   }
]
let usr =""
 for(const item of projects){
    str += ` <div class="card">
    <img src="${item.image}" alt="">
    <div class ="class-body">
    <h1>${item.name}</h1>
    <p>${item.desc}</p>
    <a href="${item.url}">Visit</a>
    </div>
</div>`
 }

 document.getElementById("projects").innerHTML = str

 gsap.registerPlugin(ScrollTrigger)

 gsap.from(".card",
     
       {ScrollTrigger:{
        trigger: ".card",
        scrub:1,
end: "+-200"
    }, scale: 0,rotation:360,stagger:0.5
    })