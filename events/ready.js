module.exports = (client) => {
  console.log(`Je suis connecté et prêt à servir `+client.guilds.cache.size +" serveurs et "+client.users.cache.size+" utilisateurs");
  client.user.setActivity(client.users.cache.size+" membres !", {
  type: "STREAMING",
  url: "https://www.twitch.tv/justenno"
});
}
