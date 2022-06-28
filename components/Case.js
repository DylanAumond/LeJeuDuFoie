import React, { useEffect } from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Case = ({caseData,caseModal}) => {
  return (
    <TouchableOpacity onPressIn={()=>caseModal(true,caseData)} onPressOut={()=>caseModal(false,caseData)} style={{backgroundColor:'red',borderWidth:1,borderColor:'black',flex:1,padding:10}}>
      <Text style={{color:'white'}}>{caseData.rule}</Text>
    </TouchableOpacity>
  )
}

export default Case