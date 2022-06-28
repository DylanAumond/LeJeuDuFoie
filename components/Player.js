import { Button, Text, View } from "react-native"

const Player = ({player,...props}) => {
  return (
    <View>
        {/* player's pseudo */}
        <Text>{player.pseudo}</Text>
        {/* button to delete player*/}
        <Button onPress={()=>props.delete(player.pseudo)} title='delete' />
    </View>
  )
}

export default Player