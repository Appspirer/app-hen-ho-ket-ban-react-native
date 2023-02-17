import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        action: "Address",
        content: "8146 Reinger Oval, Easterhaven, OR 82016-3283",
        icon: Icons.Icons({ name: 'place', height: 24, width: 24 })
    },
    {
        id: 1,
        action: "Language",
        content: "English",
        icon: Icons.Icons({ name: 'language', height: 24, width: 24 })
    },
    {
        id: 2,
        action: "Log Out",
        content: "You will be logged out",
        icon: Icons.Icons({ name: 'power_settings', height: 24, width: 24 })
    }
]

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header_text}>Profile</Text>
                <View style={styles.header_right}>
                    <TouchableOpacity>
                        {Icons.Icons({ name: "share", height: 24, width: 24 })}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settings}>
                        {Icons.Icons({ name: "settings", height: 24, width: 24 })}
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.avatar_container}>
                <Image source={Images.avatar} style={styles.avatar} />
                <View style={styles.avatar_right}>
                    <View style={styles.name_container}>
                        <Text style={styles.name}>Shafikul Islam</Text>
                        <View style={styles.check}>
                            {Icons.Icons({ name: "check", height: 18, width: 18 })}
                        </View>
                    </View>
                    <Text style={styles.mail}>@partha31416</Text>
                </View>
            </View>
            <View style={styles.status_container}>
                <View style={styles.total_love}>
                    <Text style={styles.text_status}>Total Love</Text>
                    <Text style={styles.number_status}>34</Text>
                </View>
                <View style={styles.matched}>
                    <Text style={styles.text_status}>Matched</Text>
                    <Text style={styles.number_status}>67%</Text>
                </View>
            </View>
            <View style={styles.action_container}>
                {data.map((item, index) => {
                    return (
                        <View key={index} style={styles.block}>
                            <View style={styles.action_left}>
                                <View style={styles.icon_container}>
                                    {item.icon}
                                </View>
                                <View style={styles.action_info}>
                                    <Text style={styles.text_action}>{item.action}</Text>
                                    <Text style={styles.sub_text_action}>{item.content}</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.arrow}>
                                {Icons.Icons({ name: "arrow_next", height: 24, width: 24 })}
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}