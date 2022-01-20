let mainForm=document.getElementById('contaion');
let ps=document.getElementById('option2')
let options=document.getElementById('options')
let input1=document.getElementById('input1')
let mobileDark=document.getElementById('mobile-dark')
let mobileLight=document.getElementById('header')


function lightDark() {
    document.body.style.backgroundColor = "#292b3a";
    mainForm.style.backgroundColor="#484b6a";
    mainForm.style.color="#ffffff";
    ps.style.backgroundColor="#484b6a";
    ps.style.color="#ffffff";    
    input1.style.backgroundColor="#484b6a";
    input1.style.color="#ffffff";   
    options.style.backgroundColor="#484b6a";
    options.style.color="#ffffff";
    mobileDark.style.display="block"
    // mobileLight.style.display="none"
  
}