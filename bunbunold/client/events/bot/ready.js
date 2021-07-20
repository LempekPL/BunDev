let clc = require("cli-color");

module.exports = async (client) => {
    client.user.setPresence({
        status: "online",
        clientStatus: "online",
        activity: {
            name: "to people | Change language on lmpk.tk/bun",
            type: "LISTENING"
        }
    }).catch(console.error);
    module.exports.emojiguild = client.guilds.cache.get(client.config.settings.emojiServer);
    // load database
    let conn = await new client.db.Conn().connect();
    await conn.load();
    await conn.close();
    
    // load dashboard
    await require("../../../app/dashboard")(client);

    console.log(clc.cyan(`Discord Bot: ${client.user.tag} ready!`));
}