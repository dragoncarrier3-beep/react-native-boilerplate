import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { images } from '../../../assets'

export default onPress => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={images.menu} style={styles.icon}/>
        </TouchableOpacity>
    )
}

const styles = {
    icon: {
        width: 30,
        height: 30,
        tintColor: 'white',
        resizeMode: 'contain',
    }
}