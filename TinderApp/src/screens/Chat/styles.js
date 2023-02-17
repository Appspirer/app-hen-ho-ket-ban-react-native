import {StyleSheet} from 'react-native'
import Colors from '../../themes/Colors'

export default StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:16
    },
    header:{
        marginHorizontal:32,
        marginVertical:10
    },
    header_text:{
        fontSize:24
    },
    avatar:{
        height:56,
        width:56
    },
    item_container:{
        backgroundColor: Colors.white,
        marginTop:10,
        padding:16,
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'space-between',
        shadowColor:Colors.black,
        shadowOpacity:0.1,
        shadowOffset:{height:1},
        shadowRadius:3
    },
    info:{
        marginLeft:10,
        justifyContent:'space-between',
        paddingVertical:8
    },
    name:{
        fontSize:17,
        color: Colors.gray_text
    },
    lastMessage:{
        fontSize:13,
        color: Colors.gray_text
    },
    left_item:{
        flexDirection:'row'
    },
    right_item:{
        justifyContent:'center',
        height:42,
        width:42,
        borderRadius:21,
        backgroundColor: Colors.pink,
        alignItems:'center',
        alignSelf:'center'
    }
})