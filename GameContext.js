import { createContext, useState } from "react"

const GameContexts = createContext()

const GameProvider = ({children}) => {
    const [players,setPlayers] = useState([]) // players' list
    const [currentPlayer,setCurrentPlayer] = useState(0) // current player
    return(
        <GameContexts.Provider
            value={{
                players,setPlayers,
                currentPlayer,setCurrentPlayer
            }}
        >
            {children}
        </GameContexts.Provider>
    )
}

export { GameProvider, GameContexts}