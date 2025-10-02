async function sendMessage() {
  const message = document.getElementById("message").value;

  try {
    const res = await fetch("/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();

    document.getElementById("response").textContent = data.reply;
  } catch (error) {
    console.error(error);
    document.getElementById("response").textContent =
      "Erro.";
  }
}
