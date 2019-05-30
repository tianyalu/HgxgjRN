/*
 * @Date: 2019-05-21 09:14:18
 * @LastEditors: Tian
 * @LastEditTime: 2019-05-28 16:14:03
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native'

export default class TabBar extends Component {
    static propType = {
        goToPage    : React.PropTypes.func,
        activeTab   : React.PropTypes.number,
        tabs        : React.PropTypes.array,

        tabNames    : React.PropTypes.array,
        tabIconNames: React.PropTypes.array
    }

    render() {
        const { activeTab, selectedTabIconNames, tabIconNames, tabNames, goToPage } = this.props

        return (
            <View style={[styles.tabs, {borderTopWidth: gScreen.onePix}]}>
                {this.props.tabs.map((tab, i) => {
                    let color = activeTab === i ? '#59be70' : 'gray'
                    let icon = activeTab === i ? selectedTabIconNames[i] : tabIconNames[i]
                    return (
                        <TouchableOpacity
                            key={i}
                            activeOpacity={0.8}
                            style={styles.tab}
                            onPress={()=>goToPage(i)}>
                            <View style={styles.tabItem}>
                                <Image style={styles.icon} source={icon}/>
                                <Text style={{color: color, fontSize: 12}}>{tabNames[i]}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        height: 49,
        borderTopColor: '#d9d9d9',
    },

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    icon: {
        width: 26,
        height: 26,
        marginBottom: 2
    }
})