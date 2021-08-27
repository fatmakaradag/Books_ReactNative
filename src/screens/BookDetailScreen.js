import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const BookDetailScreen = (props)=> {

    const book=props.navigation.getParam('book');

    //console.log('book',book);

    
        return (
            <View>
                <Text> {book.title} = {book.author} </Text>
            </View>
        )
    }


const styles = StyleSheet.create({})

export default BookDetailScreen ;