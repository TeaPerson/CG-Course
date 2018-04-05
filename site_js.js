const my_button = document.getElementById('join_newsletter');

my_button.onclick = function(){
  event.preventDefault();

  const name = document.getElementById('name');

  const mail = document.getElementById('mail');
  
let classNames = name.classList;

  if (name.value === ""){
    classNames.add("red");
  } else {
    classNames.remove("red");
  }
console.log(name.value);

let classMails = mail.classList;
  if (mail.value === ""){
  	classMails.add("red");
  } else {
    classMails.remove("red");
}
console.log(mail.value);

const my_form = document.getElementById('my-form');
const message = document.getElementById('my_message');

if(name.value !== "" && mail.value !== ""){
  my_form.style.display = 'none';
  message.style.display = 'block';
  
}

}
