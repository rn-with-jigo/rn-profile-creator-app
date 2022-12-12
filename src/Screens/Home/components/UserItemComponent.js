import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserItemComponent = (props) => {

    const { username, lastName, firstName, image, email, phone, age, gender } = props;
    return (
        <View style={styles.userItemMainContainer}>
            <View style={{ flexDirection: "row", padding: 10, flex: 1, }}>
                <View style={{ width: 100, height: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Image source={{ uri: image }} style={styles.userImage} />
                </View>
                <View style={{ flex: 1, paddingVertical: 10, }}>
                    <Text style={styles.userNameStyle}>{`@${username}`}</Text>
                    <Text style={styles.fnandlnUser}>{`${firstName} ${lastName}`}</Text>
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.userContactText}>{email}</Text>
                        <Text style={styles.userContactText}>{phone}</Text>
                    </View>
                    <View style={{ position: "absolute", right: 10, top: 10, flexDirection: "row-reverse", alignItems:"center", }}>
                        <View style={[styles.ageShowContainer, { backgroundColor: age > 18 ? "#01bf71" : "tomato" }]}>
                            <Text style={[styles.ageTextStyle]}>{age}</Text>
                        </View>
                        <Image source={gender === "male"?require("../../../assets/male.png"): require("../../../assets/woman.png")} 
                            style={{height:20,width:20, marginHorizontal:10,}}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default UserItemComponent

const styles = StyleSheet.create({
    ageShowContainer: {
        height: 30, width: 30,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    ageTextStyle: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 12,
    },
    fnandlnUser: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
    userContactText: {
        fontSize: 12,
        fontWeight: "500",
        color: "#00000088"
    },
    userImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "#00000033",
        borderWidth: 1,
        borderColor: "#000",
    },
    userInfoContainer: {
        marginTop: 5,
        padding: 5,
    },
    userItemMainContainer: {
        width: "100%",
        height: 140,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    userNameStyle: {
        fontSize: 14,
        fontWeight: "600",
        color: "#00000066",
    },
})