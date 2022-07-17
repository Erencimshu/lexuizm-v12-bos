
const client = global.client;
module.exports = () => {
  console.log("Bot aktif!");
  client.user.setActivity("Lexuizm ❤️ Github ");
  client.user.setStatus("idle")
}
module.exports.configuration = {
  name: "ready"
}