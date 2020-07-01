import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import CardFlip from 'react-native-card-flip';
import {
    mechanicsData
} from '../home/homeSlice'

const width = 320
const height = 440
function Cards({ route }) {
    const { entities, loading } = useSelector(mechanicsData)
    function getCards() {
        var arr = [];
        Object.keys(entities).slice(0, 2).map((keys) => {
            entities[keys].map((item) => {
                if (item.mechanics) {
                    item.mechanics.map((subItem) => {
                        if (subItem.name === route.params.name) {
                            arr.push(item)
                        }
                    })
                }
            })
        })
        return arr;
    }
    if (!loading) {
        getCards();
    }

    return (
        <ScrollView style={styles.container}>
            {loading && <ActivityIndicator size='large' />}
            {getCards().map((item, index) => {
                return (

                    <CardFlip key={index} style={styles.cardContainer} ref={(card) => this['card' + index] = card} >
                        <TouchableOpacity style={styles.card} onPress={() => this['card' + index].flip()} >
                            <Image
                                style={styles.image}
                                source={{ uri: item.img }}
                            />

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card} onPress={() => this['card' + index].flip()} >

                            <Image
                                style={styles.imageBack}
                                source={{ uri: item.img }}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.context}>Name: {item.name}</Text>
                                <Text style={styles.context} >Card Id: {item.cardId}</Text>
                                <Text style={styles.context} >Card Set: {item.cardSet}</Text>
                                <Text style={styles.context} >Type: {item.type}</Text>
                                <Text style={styles.context} >{item.text}</Text>
                            </View>
                        </TouchableOpacity>

                    </CardFlip>

                )
            })
            }
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 40
    },
    cardContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
        marginBottom: 80,
        width: width-100,
        height: height-100,
    },
    textContainer: {
        position: 'absolute',
        top: 30,
    },
    image: {
        width: width,
        height: height,
    },
    imageBack: {
        opacity: 0.2,
        width: width,
        height: height,
        transform: [{ rotateY: '180deg' }]
    },
    card: {
        flex: 1,
        backgroundColor: '#c8d6e5',
        borderRadius: 30,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    context: {
        fontSize: 21,
        fontWeight: '500',
        paddingTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',

    }

});
export default Cards;