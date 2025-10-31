document.getElementById("produto-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("produto-nome").value.trim();
  const price = document.getElementById("produto-preco").value.trim();
  const alert = document.getElementById("alert");

  if (!name || !price) {
    alert.classList.remove("hidden");
    return;
  }

  alert.classList.add("hidden");

  const li = document.createElement("li");
  li.textContent = `${name} - R$ ${parseFloat(price).toFixed(2)}`;
  document.getElementById("produto-lista").appendChild(li);

  document.getElementById("produto-nome").value = "";
  document.getElementById("produto-preco").value = "";
});