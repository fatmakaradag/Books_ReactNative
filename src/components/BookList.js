import React from 'react'

import {StyleSheet, View, Text,FlatList ,TouchableOpacity} from 'react-native'


import books from '../../data/books.json';

import { withNavigation } from 'react-navigation';

//FlatList kullana bilmek için olması gereken iki kural vardır
//1. olarak data arrayi tanımlanır.(books)
//2. olarak da bir prop kullanımıdr.(renderItem)



const BookList = (props) => {
      //navigator ile sarılmadığı için console da boş bir obje döner.
    //console.log(props);

    return (
        <View>
            <FlatList
            
             data={books} 
             renderItem={ (item)=>{
                 return (
                     ////book title üstüne basılınca tanımlanan array objesi içindeki verilerin geçişi
                     <TouchableOpacity onPress ={ () =>
                        {
                         props.navigation.navigate('BookDetail',{book:item})
                     }}
                     >
                         <Text style={styles.textStyle}>{item.title}</Text>
                     </TouchableOpacity>

                 );

             }

            



             }
             keyExtractor ={ book => book.title}
             >

             </FlatList>
        </View>
    )
}


const styles=StyleSheet.create({

    textStyle:{

        marginVertical :50

    }
});




export default withNavigation (BookList);
