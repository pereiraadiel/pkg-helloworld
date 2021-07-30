function handleClick() {
  let element = document.querySelector("#name");
  let name = element.value;
  name ? alert(`Olá ${name}!!`) : alert("Olá Mundo!!");
  element.value = "";
}