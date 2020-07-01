import React, { useEffect, useState,useRef } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  mechanicsData,
  fetchData
} from './homeSlice'


function Home() {
  const navigation = useNavigation();
  const myRefs = useRef([]);
  const { entities, loading } = useSelector(mechanicsData)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData)
  }, [dispatch])

  if (!loading) {
    filterMechanics();
  }

  function filterMechanics() {
    var temp = [];
    var arr = [];
    Object.keys(entities).map((keys) => {
      entities[keys].map((item) => {
        if (item.mechanics) {
          item.mechanics.map((subItem) => {
            if (!temp.includes(subItem.name)) {
              arr.push(subItem.name)
            }
            temp.push(subItem.name)
          })
        }
      })
    })
    return arr;
  }
  function onPress(name,index) {
    console.log(myRefs.current[index])
    myRefs.current[index]= 'xxxxxxxx'
    navigation.navigate("Cards", {
      name: name
    })
     
  }
  return (

     
      loading ? 
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <ActivityIndicator size='large' />  
      </View>:
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Mechanics</Text>
          {
            filterMechanics().map((name, index) => {
              return (
                <TouchableOpacity key={index} style={styles.item} onPress={() => onPress(name, index)}>
                  <Text ref={el => myRefs.current[index] = el}  style={styles.context}>{name}</Text>
                </TouchableOpacity>
              )
            })
          }


        </ScrollView>
 

  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: 10
  },
  context: {
    fontSize: 22,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Home;
