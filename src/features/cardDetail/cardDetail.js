import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import CardFlip from 'react-native-card-flip';
import { useRoute } from '@react-navigation/native';
const width = 320
const height = 440
//TODO navigaton isim degistir
// TODO git init
// TODO card resim sorunu

function CardDetail() {
    
    const route = useRoute();
    const { item } = route.params
    console.log(item)
    return (
        <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
            <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} >
                <Image
                    style={styles.image}
                    source={{ uri: 'http://wow.zamimg.com/images/hearthstone/cards/enus/original/ULDA_BOSS_62h.png' }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} >
                <Image
                    style={styles.imageBack}
                    source={{ uri: 'http://wow.zamimg.com/images/hearthstone/cards/enus/animated/ULDA_BOSS_62h_premium.gif' }}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.context}>Name: {item.name}</Text>
                    <Text style={styles.context} >Card Id: {item.cardId}</Text>
                    <Text style={styles.context} >Card Set: {item.cardSet}</Text>
                    <Text style={styles.context} >Type: {item.type}</Text>
                    <Text style={styles.context} >{item.img}</Text>
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
        marginTop: 30,
        width: width,
        height: height,
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
    },
    card: {
        flex: 1,
        backgroundColor: '#ccc',
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
export default CardDetail;