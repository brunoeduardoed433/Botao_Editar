function CriarValor(value) {
  const valor = document.createElement("b");
  valor.innerHTML = value;
  return valor;
}

function EditarItem(e) {
  const value = document.getElementById(e.target.parentNode.id).firstElementChild.innerHTML
  document.getElementById("item").value = value;
  document.getElementById(e.target.parentNode.id).remove();
}

function CriarBotaoEditar() {
  const botao_editar = document.createElement("button");
  botao_editar.classList.add("btn", "btn-primary");
  botao_editar.innerHTML = "Editar";
  botao_editar.type = "button";
  botao_editar.addEventListener("click", (e) => EditarItem(e));
  
  return botao_editar;
}

function DeleteItem() {
  this.parentElement.remove();
}

function CriarBotaoDelete() {
  const botao_delete = document.createElement("button");
  botao_delete.classList.add("btn", "btn-danger");
  botao_delete.innerHTML = "Delete";
  botao_delete.type = "button";
  botao_delete.addEventListener("click", DeleteItem); // addEventListener ---->  ouve oque a ação que a pessoa quer fazer

  return botao_delete;
}

function Submit(e) {
  if (e) e.preventDefault(); // serve para evitar que atualize a página quando dá enter no input
  const lista = document.querySelector("[data-task]");
  const valor = document.querySelector("[data-form-input]");
  const novo_item_lista = document.createElement("li");
  novo_item_lista.id = document.getElementsByTagName('li').length;
  novo_item_lista.className = "list-group-item";
  novo_item_lista.style.display = 'flex';
  novo_item_lista.style.justifyContent = 'space-between';
  novo_item_lista.appendChild(CriarValor(valor.value));
  novo_item_lista.appendChild(CriarBotaoEditar());
  novo_item_lista.appendChild(CriarBotaoDelete());
  lista.appendChild(novo_item_lista);
  document.getElementById("item").value = "";
}
