import React from 'react'
import Card from '../../components/Card'
function CardDetail({ route }) {
  const { item } = route.params
  return (
    <Card item={item} />
  )
}

export default CardDetail;