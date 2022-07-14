export function playerAction(action,payload){
    switch(action){
        case 'teleportation':{
            return moveplayer(payload.player,payload.caseId)
        }
        case 'next':{
            return getNextPlayer(payload.players,payload.currentPlayer)
        }
    }
}

//Make a player moove
function moveplayer(player, caseId){
    return player.position = caseId;
}

// get the next player
function getNextPlayer(players,currentPlayer){
    if(currentPlayer+1 < players.length){
        return currentPlayer + 1
    }
    // if next player is the first player
    return currentPlayer = 0
}
