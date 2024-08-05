

function Submit() {
    let n = document.getElementById('username');
    localStorage.nn = n.value
    h = localStorage.getItem('nn')
    console.log(h)
    let e = document.getElementById('email');
    localStorage.ee = e.value
    m = localStorage.getItem('ee')
    console.log(m)
    let p = document.getElementById('password');
    localStorage.pp = p.value
    w = localStorage.getItem('pp')
    let arr = [h, m, w];
    console.log(arr);
}
function Change(){
    document.getElementById('try').innerHTML= `${localStorage.nn}`;
}
// const signUp = e => {
//     let name = document.getElementById('username').value,
//     email = document.getElementById('email').value,
//      pwd = document.getElementById('password').value;

//     let formData = JSON.parse(localStorage.getItem('signup')) || [];

//     let exist = formData.length &&
//         JSON.parse(localStorage.getItem('formData')).some(data =>
//             data.fname.toLowerCase() == name.toLowerCase()
//         );
//     if(!exist){
//         formData.push({ name, email, pwd });
//         localStorage.setItem('formData', JSON.stringify(formData));
//         document.querySelector('form').reset();
//         document.getElementById('name').focus();
//         alert("Account Created.\n\nPlease Sign In using the link below.");
//     }
//     else{
//         alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
//     }
//     e.preventDefault();
// }

// function signIn(e) {
//     let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
//     let formData = JSON.parse(localStorage.getItem('formData')) || [];
//     let exist = formData.length &&
//     JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
//     if(!exist){
//         alert("Incorrect login credentials");
//     }
//     else{
//         location.href = "/";
//     }
//     e.preventDefault();
// }