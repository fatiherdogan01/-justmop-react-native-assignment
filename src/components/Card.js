import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CardFlip from 'react-native-card-flip';
const width = 320
const height = 440
import FastImage from 'react-native-fast-image'
function Card({ item, index }) {
    return (
        <CardFlip key={index} style={styles.cardContainer} ref={(card) => this['card' + index] = card} >
            <TouchableOpacity key={index} style={styles.card} onPress={() => this['card' + index].flip()} >
                <FastImage
                    style={styles.image}
                    source={{ uri: item.img, priority: FastImage.priority.high }}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </TouchableOpacity>
            <TouchableOpacity key={index} style={styles.cardBack} onPress={() => this['card' + index].flip()} >
                <FastImage
                    style={styles.imageBack}
                    source={{ uri: item.img, priority: FastImage.priority.high }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.context}>
                        Card Set: {item.cardSet}{'\n'}
                       Artist :{item.artist}
                       Type: {item.type}{'\n'}
                       Cost : {item.cost}{'\n'}
                       Attack: {item.attack}{'\n'}
                       Health : {item.health}
                    </Text>
                </View>
            </TouchableOpacity>
        </CardFlip>
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
        marginTop: 50,
        marginBottom: 60,
        width: width - 95,
        height: height - 95,
    },
    textContainer: {
        position: 'absolute',
        top: 30,
    },
    image: {
        marginBottom: 40,
        width: width,
        height: height,
    },
    imageBack: {
        marginBottom: 40,
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
    cardBack: {
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },

    context: {
        fontSize: 21,
        letterSpacing: 2,
        fontWeight: '500',
        paddingTop: 10,
        paddingLeft: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
    }

});

export default Card