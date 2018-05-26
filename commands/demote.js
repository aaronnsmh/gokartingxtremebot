var roblox = require('noblox.js');

exports.run = (Discord, client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No can do pal! Only BoX can run this command..");
	
	
var groupId = 2633056;
var maximumRank = 6;


roblox.login({username: process.env.username, password: process.env.password}).then((success) => {

}).catch(() => {console.log("Failed to login.");});

    	var username = args[0]
    	if (username){
    		roblox.getIdFromUsername(username)
			.then(function(id){
				roblox.getRankInGroup(groupId, id)
			        
				.then(function(rank){
						roblox.demote(groupId, id)
						.then(function(roles){
							message.channel.send(`Dromoted from ${roles.oldRole.Name} to ${roles.newRole.Name}`)
						}).catch(function(err){
							message.channel.send("Failed to demote.")
						});
					}
				}).catch(function(err){
					message.channel.send("Couldn't get them in the group.")
				});
			}).catch(function(err){ 
				message.channel.send(`Sorry, but ${username} doesn't exist on ROBLOX.`)
			});
    	} else {
    		message.channel.send("Please enter a username.")
    	}
    	return;
}
