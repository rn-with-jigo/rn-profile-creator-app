import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { getAllUsersdata } from '../../helper/UserApiHelper'
import ScreenWrapper from '../../components/ScreenWrapper'
import UserItemComponent from './components/UserItemComponent'

const HomeScreen = (props) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsersDta();
    }, [])

    function fetchUsersDta() {
        fetch('https://dummyjson.com/users?limit=20')
            .then(res => res.json())
            .then(res => {
                // console.log("api respons =>: ", res.users);
                setUsers(res.users)
                })
            .catch((err) => {
                console.log("api error =>: ", err);
            });
    }

    const renderUserList = useCallback(({item ,index}) => {
        return (
            <UserItemComponent {...item} {...index} /> 
        )
    }, [users])

    const itemComponentSparator = useCallback(() => {
        return <View style={{height:5,}} />
    }, [users])

    return (
        <ScreenWrapper>
            <FlatList
                data={users}
                renderItem={renderUserList}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={itemComponentSparator}
            />

        </ScreenWrapper>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})