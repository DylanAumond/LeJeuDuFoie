import React from 'react'
import { Text } from 'react-native'

const Case = ({caseData}) => {
  return (
    <Text>{caseData.rule}</Text>
  )
}

export default Case