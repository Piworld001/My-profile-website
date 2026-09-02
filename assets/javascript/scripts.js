// // year automation in footer 
// const year = new Date().getFullYear();
// document.getElementById("year").textContent=year;

// // Dynamic welcome message 
// const name = "Future Full Stack Developer";
// document.getElementById("welcome").textContent=`Welcome ${name}!`;

// // Dark mode 
// const btn = document.getElementById("themeBtn");
// btn.addEventListener("click",()=>{
//     document.body.classList.toggle("dark");

// });

// // Contact Form Validation 
// const form = document.getElementById("contactForm");
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const name=document.getElementById("name").value;
//     if(name===""){
//         alert("Name is required");
//         return;
//     }
//     alert("Form Submitted");
// });

// // Step 6– Display Skills Dynamically 
// const skills=[
// "HTML",
// "CSS",
// "JavaScript",
// "React",
// "Python",
// "Django"
// ];
// const skillList=document.getElementById("skills");
// skills.forEach(skill=>{
// const li=document.createElement("li");
// li.textContent=skill;
// skillList.appendChild(li);
// });

// // Scroll to top button 
// const topBtn=document.getElementById("topBtn");
// topBtn.addEventListener("click",()=>{
// window.scrollTo({
// top:0,
// behavior:"smooth"
// });
// });

// Year automation in footer
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// Dynamic welcome message
const welcome = document.getElementById("welcome");

if (welcome) {
    const name = "Future Full Stack Developer";
    welcome.textContent = `Welcome ${name}!`;
}


// Dark mode
const btn = document.getElementById("themeBtn");

if (btn) {
    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}


// Contact Form Validation
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;

        if (name === "") {
            alert("Name is required");
            return;
        }

        alert("Form Submitted");
    });
}


// Display Skills Dynamically
const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Django"
];

const skillList = document.getElementById("skills");

if (skillList) {
    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillList.appendChild(li);
    });
}


// Scroll to top button
const topBtn = document.getElementById("topBtn");

if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

