import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, ActivityIndicator, TouchableOpacity, ScrollView } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
    cardData,
    searchCard
} from './cardSearchSlice'

function CardSearch() {
    const navigation = useNavigation();
    const { card, loading, error } = useSelector(cardData)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    function onChange(text) {
        if (text !== '') {
            dispatch(searchCard(text))
        }
        setInput(text)

    }
   function onPress(item){
      navigation.navigate('CardDetail',{
          item:item
      })
   }
    
    return (
        <View>
            <Text style={styles.title}>Card Search</Text>

            <TextInput
                style={styles.input}
                placeholder='Search Card'
                onChangeText={text => onChange(text)}
                value={input}
            />
             {loading && <ActivityIndicator size='large' />} 
            {error ? <Text>Card not found.</Text>:
            <ScrollView>
                {card.map((item, index) => {
                    return (

                        <TouchableOpacity style={styles.item} onPress={() => onPress(item, index)}>
                            <Text style={styles.context}>{item.name}</Text>
                        </TouchableOpacity>

                    )
                })
                }
            </ScrollView>
}

        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        alignSelf: 'stretch',
        marginHorizontal: 30,
        marginBottom: 20,
        borderColor: '#ccc',
        padding: 10,
        borderWidth: 1
    },
    title: {
        fontSize: 32,
        marginLeft: 'auto',
        marginRight: 'auto',
        margin: 10
    },
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    context: {
        fontSize: 22,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});
export default CardSearch;