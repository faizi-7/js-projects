const details= document.querySelectorAll(".userdetail")
const userinput= document.querySelector("#gituser")
const searchBtn= document.querySelector("#search")
const imgElement= document.querySelector("#image")
const cardcontainer= document.querySelector(".card")
const repocontainer= document.querySelector(".userrepos")


let data;
let repos;
let error= false

const fetchProfile= async (url)=> {
    try {
        const res= await fetch("https://api.github.com/users/" + url)
        data= await res.json()
        console.log(data)
    } catch(err) {
        console.log(err)
        error= true
    }
}
const fetchRepo= async (url)=> {
    try {
        const res= await fetch("https://api.github.com/users/" + url + "/repos")
        repos= await res.json()
        console.log(repos)
    } catch(err) {
        console.log(err)
        error= true
    }
}
 


searchBtn.addEventListener("click", async (event)=> {
    event.preventDefault()
    let urlname= userinput.value
    data= {}
    repos= []
    while (repocontainer.firstChild) {
        repocontainer.removeChild(repocontainer.firstChild);
    }
    await fetchProfile(urlname)
    await fetchRepo(urlname)
    if(error == false && data.name!= null) {
        details[0].innerHTML= "Username : " + data.name
        details[1].innerHTML= "User id : " + data.login
        details[2].innerHTML= "Followers : " + data.followers 
        details[3].innerHTML= "Repository Count : " + data.repos_url.length
        details[4].innerHTML= "Github Profile : " + data.html_url
        details[4].setAttribute("href", data.html_url)
        imgElement.setAttribute("src", data.avatar_url)
        for(let i=0; i<Math.min(repos.length, 5); i++) {
            const child= document.createElement("a")
            child.setAttribute("href", repos[i].svn_url)
            child.textContent= repos[i].name
            repocontainer.appendChild(child)
        }
        cardcontainer.style.display= "flex"
    } else {
        cardcontainer.style.display= "none"
    }
})


