import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    Alert,
    Image,
    StatusBar
} from 'react-native';
import { Card, ListItem, ButtonGroup, CheckBox, List, Button, SocialIcon } from 'react-native-elements';
import ViewContainer from './ViewContainer';
import ProgressBar from './ProgressBar';
import { styles } from './styles';
import firebase from 'react-native-firebase';
import Moment from 'moment';
import API from '../lib/api'

class CustomCheckbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: this.props.checked
        }
        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        var newState = !this.state.checked
        this.setState( { checked: newState } )
        this.props.callback(newState)
    }

    render() {
        return (
            <CheckBox
                center
                checked={ this.state.checked }
                onPress={ this.onPress }
                containerStyle = { styles.stackBoxCheck }
                iconRight
                size = { this.props.size }
                iconType = 'material'
                uncheckedIcon = 'add-circle'
                checkedIcon = 'check-circle'
                checkedColor = '#2bbd7e'
            />
        );
    }
}

// TODO (minor): Change name
export default class CardWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = { checked: this.props.item.checked }
        this.onStateChange = this.onStateChange.bind(this)
    }

    onStateChange(newState) {
        API.check_transaction(global.user.uid, this.props.item.transaction_id, newState)
            .catch( error => {
                console.log("Error: ", error)
                // TODO: Make child reset checked state if call fails
            })
    }

    render(){
        switch(this.props.tab) {
            case 'home':
                return this.renderHome()
                break
            case 'invest':
                return this.renderInvest()
                break
            default:
                break
        }
    }

    renderHome() {
        // TODO(minor) Refactor toFixed line into a separate function
        return (
            <Card
                containerStyle = {styles.cardStyleSmall}>
                <View style = {styles.stackBoxWrapper}>
                    <View style = {styles.stackBoxTextContainer}>
                        <Text style = {styles.stackBoxTextHome}> + ${this.props.item.change.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}</Text>
                        <Text style = {styles.stackBoxText}> for {this.props.item.name.toLowerCase()}</Text>
                    </View>
                    <View>
                        <CustomCheckbox
                            checked={ this.state.checked }
                            callback={ this.onStateChange }
                            size={ 40 }
                        />
                    </View>
                </View>
            </Card>
        )
    }

    renderInvest() {
        return (
            <Card title = {"+$" + this.props.item.change.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}
                titleStyle = {styles.stackBoxTitle}
                dividerStyle = {styles.divider}
                containerStyle = {styles.cardStyle}>
                <View style = {styles.stackBoxWrapper}>
                    <View style = {styles.stackBoxTextContainer}>
                        <Text style = {styles.stackBoxText}>{Moment(this.props.item.date).format("MMMM DD, YYYY")}</Text>
                        <Text style = {styles.stackBoxText}>${this.props.item.amount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}</Text>
                        <Text style = {styles.stackBoxText}>for {this.props.item.name}</Text>
                    </View>
                    <View>
                        <CustomCheckbox
                            checked={ this.state.checked }
                            callback={ this.onStateChange }
                            size={ 50 }
                        />
                    </View>
                </View>
            </Card>
        )
    }
}
