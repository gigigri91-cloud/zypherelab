function generateSite(){
    const name=document.getElementById("siteName").value;
    
    document.getElementById("previewBox").innerHTML=`
    <div style="background:white;color:black;padding:20px;border-radius:10px;">
    <h2>${name}</h2>
    <p>Website Preview</p>
    <button>Contact</button>
    </div>`;
    }
    
    /* SCROLL */
    window.addEventListener("scroll",()=>{
    document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top<window.innerHeight-100){
    el.classList.add("active");
    }
    });
    });
    
    /* LOADER */
    window.addEventListener("load",()=>{
    document.getElementById("loader").style.display="none";
    });