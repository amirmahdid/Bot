const { ActivityType, Events, messageLink} = require('discord.js')

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client, message) {



        const {memberCount, ownerId, name} = client.guilds.cache.get("1265386238337355836",)

        let status = [
            {
                name: `All members: ${memberCount}`,
                type: ActivityType.Custom
            },
            {
                name: `${name}`,
                type: ActivityType.Custom
            }
        ]

        setInterval(() => {
            let random = Math.floor(Math.random() * status.length);
            client.user.setActivity(status [random]);
        }, 7000);

        client.user.setStatus('idle')

    }
}