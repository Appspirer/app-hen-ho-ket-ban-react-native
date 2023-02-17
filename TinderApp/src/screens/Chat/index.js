import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        avatar: Images.avatar1,
        name: 'Aryn Jacobssen',
        lastMessage: 'Ha ha! I knew it!'
    },
    {
        id: 1,
        avatar: Images.avatar1,
        name: 'Cammy Hedling',
        lastMessage: 'Called you'
    },
    {
        id: 2,
        avatar: Images.avatar1,
        name: 'Slavcho Karbashewski',
        lastMessage: 'Sent a GIF'
    },
    {
        id: 3,
        avatar: Images.avatar1,
        name: 'Mbe Tshinguta',
        lastMessage: 'Sent a sticker'
    },
    {
        id: 4,
        avatar: Images.avatar1,
        name: 'Sakane Miiko',
        lastMessage: 'Saga Lindén'
    },
]

export default function Chat() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header_text}>Chat</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.item_container}>
                            <View style={styles.left_item}>
                                <Image source={item.avatar} style={styles.avatar} />
                                <View style={styles.info}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.lastMessage}>{item.lastMessage}</Text>
                                </View>
                            </View>
                            <View style={styles.right_item}>
                                {Icons.Icons({name:'call', height:22, width:22})}
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}