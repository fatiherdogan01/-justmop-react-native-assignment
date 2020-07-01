import React from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import {
    mechanicsData
} from '../mechanics/mechanicsSlice'
import Card from '../../components/Card'

function Cards({ route }) {
    const { data, loading } = useSelector(mechanicsData)
    function getCards() {
        var arr = [];
        data.map((item) => {
            if (item.mechanics) {
                item.mechanics.map((subItem) => {
                    if (subItem.name === route.params.name) {
                        arr.push(item)
                    }
                })
            }
        })
        return arr;
    }

    getCards();

    return (
        <ScrollView >
            {loading && <ActivityIndicator size='large' />}
            {getCards().map((item, index) => {
                return (
                    <Card item={item} index={index} />
                )
            })
            }
        </ScrollView>
    )
}

export default Cards;