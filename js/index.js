const formulario = document.querySelector("#form");
const $buttonMailto = document.querySelector("#botonOculto");

formulario.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = new FormData(this);
  // console.log(form.get('name'));
  $buttonMailto.setAttribute("href", `mailto:pazospablosebastian@gmail.com?subject=${form.get("name")} - Tel: ${form.get("telefono")} - Email: ${form.get("email")} &body=${form.get("message")}`);
  $buttonMailto.click();
}
