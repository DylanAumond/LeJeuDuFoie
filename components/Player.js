import { Button, Text, View } from "react-native"

const Player = ({player,...props}) => {
  return (
    <View>
        <Text>{player.pseudo}</Text>
        <Button onPress={()=>props.delete(player.pseudo)} title='delete' />
    </View>
  )
}

export default Player