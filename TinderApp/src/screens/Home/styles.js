import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16
    },
    card: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
        height: height * 0.55,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        borderRadius: 20,
        resizeMode: 'cover',
        marginTop: 30
    },
    cardImage: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 20,
        justifyContent: 'flex-end'
    },
    info: {
        height: 95,
        backgroundColor: Colors.white,
        marginHorizontal: 16,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        paddingVertical: 15,
        justifyContent: 'space-around',
        paddingHorizontal: 32
    },
    first_info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        fontSize: 20,
        color: Colors.gray_text
    },
    age: {
        fontSize: 21,
        color: Colors.gray_text
    },
    distance: {
        fontSize: 15,
        color: Colors.gray_text
    },
    top_container: {
        flexDirection: 'row',
        height: 46,
        width: 133,
        backgroundColor: Colors.gray,
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 23,
        padding: 4,
        marginTop:10
    },
    hot_container: {
        height: 38,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        width: 61,
        alignItems: 'center',
        borderRadius: 23
    },
    star_container: {
        height: 38,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        width: 61,
        alignItems: 'center',
        borderRadius: 23
    },
    botom_container:{
        position:'absolute',
        bottom:30,
        flexDirection:"row",
        justifyContent:"space-between",
        width:width*0.55,
        alignSelf:'center'
    },
    item_bottom_container:{
        shadowColor:Colors.black,
        shadowOpacity:0.2,
        shadowOffset:{
            height:5
        },
        shadowRadius:5
    }
})