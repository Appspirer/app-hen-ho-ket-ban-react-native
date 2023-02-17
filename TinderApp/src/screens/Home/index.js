import React, { useState, useMemo } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import styles from "./styles";
import TinderCard from 'react-tinder-card'
import Images from "../../themes/Images";
import Icons from "../../themes/Icons";
import Colors from "../../themes/Colors";

const db = [
    {
        name: 'Richard Hendricks',
        age: 25,
        distance: 10,
        img: Images.char1
    },
    {
        name: 'Erlich Bachman',
        age: 25,
        distance: 10,
        img: Images.char1
    },
    {
        name: 'Monica Hall',
        age: 25,
        distance: 10,
        img: Images.char1
    },
    {
        name: 'Jared Dunn',
        age: 25,
        distance: 10,
        img: Images.char1
    },
    {
        name: 'Dinesh Chugtai',
        age: 25,
        distance: 10,
        img: Images.char1
    }
]

const alreadyRemoved = []
let charactersState = db

export default function Home() {
    const [characters, setCharacters] = useState(db)
    const [index, setIndex] = useState(0)

    const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete + ' to the ' + direction)
        alreadyRemoved.push(nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
        charactersState = charactersState.filter(character => character.name !== name)
        setCharacters(charactersState)
    }

    return (
        <View style={styles.container}>
            <View style={styles.top_container}>
                <TouchableOpacity style={[styles.hot_container, { backgroundColor: index === 0 ? Colors.white : Colors.gray}]}
                    onPress={() => setIndex(0)}>
                    {Icons.Icons({ name: index === 0 ? "hot_focus" : "hot", height: 21.05, width: 16 })}
                </TouchableOpacity>
                <TouchableOpacity style={[styles.star_container, { backgroundColor: index === 1 ? Colors.white : Colors.gray}]}
                    onPress={() => setIndex(1)}>
                    {Icons.Icons({ name: index === 1 ? "star_focus" : "star", height: 21, width: 20.09 })}
                </TouchableOpacity>
            </View>
            {characters.map((character, index) =>
                <TinderCard ref={childRefs[index]} key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                    <View style={styles.card}>
                        <ImageBackground style={styles.cardImage} source={character.img}>
                            <View style={styles.info}>
                                <View style={styles.first_info}>
                                    <Text style={styles.name}>{character.name}</Text>
                                    <Text style={styles.age}>{character.age}</Text>
                                </View>
                                <Text style={styles.distance}>{character.distance} km away</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </TinderCard>
            )}
            <View style={styles.botom_container}>
                <TouchableOpacity style={styles.item_bottom_container}>
                    {Icons.Icons({name:"cancel", height:69, width:69})}
                </TouchableOpacity>
                <TouchableOpacity style={styles.item_bottom_container}>
                    {Icons.Icons({name:"heart", height:69, width:69})}
                </TouchableOpacity>
            </View>
        </View>
    )
}