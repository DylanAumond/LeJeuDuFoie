export function playerAction(action,payload){
    switch(action){
        case 'move':{
            return moveplayer(payload.player,payload.caseId)
        }
        case 'next':{
            return getNextPlayer(payload.players,payload.currentPlayer)
        }
    }
}

//Make a player moove
function moveplayer(player, caseId){
    player.posistion = caseId;
}

// get the next player
function getNextPlayer(players,currentPlayer){
    if(currentPlayer+1 < players.length){
        return currentPlayer + 1
    }
    return currentPlayer = 0
}
