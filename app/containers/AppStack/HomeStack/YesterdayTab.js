import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import { Card, Button, Icon, ButtonGroup } from 'react-native-elements'
import ViewContainer from '../../../components/ViewContainer';
import { styles } from '../../../components/styles';
import CardWrapper from '../../../components/CardWrapper';
import API from '../../../lib/api';

export default class YesterdayTab extends React.Component{
  static navigationOptions = {
    title: 'Yesterday',
    tabBarIcon: ({ tintColor }) => <Icon name="brightness-2" color={tintColor} />
  }


  constructor(props){
      super(props);
      this.state = {
        totalEstimatedBalance: 1242.12,
        totalInvestment: 1002.43,
        totalPercentGainLoss: 23.91,
        totalSpareChange: 120.42,
        totalWithdrawn: 0,
        totalGainLoss: 239.57,
        selectedIndex: 0,
        statTime: 'total',
      };
      this.percentGainLossSign = this.percentGainLossSign.bind(this);
      this.totalGainLossSign = this.totalGainLossSign.bind(this);
      this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex){
    this.setState({selectedIndex});
    switch(selectedIndex) {
      case 0:
      this.setState({statTime:'total'})
      break;
      case 1:
      this.setState({statTime:'daily'})
      break;
      case 2:
      this.setState({statTime:'weekly'})
      break;
      case 3:
      this.setState({statTime:'monthly'})
      break;
      case 4:
      this.setState({statTime:'yearly'})
      break;
    }
  }

  percentGainLossSign(){
    if(this.state.totalPercentGainLoss > 0){
      return <Text style = {styles.textVioletSmall}>+%{this.state.totalPercentGainLoss}</Text>
    } else if(this.state.totalPercentGainLoss < 0) {
      return <Text style = {styles.textVioletSmall}>-%{this.state.totalPercentGainLoss}</Text>
    } else if(this.state.totalPercentGainLoss == 0) {
      return <Text style = {styles.textVioletSmall}>%{this.state.totalPercentGainLoss}</Text>
    }
  }

  totalGainLossSign(){
    if(this.state.totalGainLoss > 0){
      return <Text style = {styles.textVioletSmall}>+${this.state.totalGainLoss}</Text>
    } else if(this.state.totalGainLoss < 0) {
      return <Text style = {styles.textVioletSmall}>-${this.state.totalGainLoss}</Text>
    } else if(this.state.totalGainLoss == 0) {
      return <Text style = {styles.textVioletSmall}>${this.state.totalGainLoss}</Text>
    }
  }

//TODO render different balances for each time frame

 render(){
   const { selectedIndex } = this.state;
   const buttons = ['Total', 'Day', 'Week', 'Month', 'Year'];
   return(
     <ViewContainer>
      <Card title={"Your " + this.state.statTime + " statistics"} containerStyle = {styles.cardStyle} titleStyle = {styles.stackBoxTitle}>
        <ButtonGroup
        textStyle = {styles.buttonGroupText}
        selectedTextStyle = {styles.buttonGroupTextSelected}
        containerStyle = {styles.buttonGroupContainer}
        selectedButtonStyle = {styles.buttonGroupSelected}
        onPress = {this.updateIndex}
        selectedIndex = {selectedIndex}
        buttons = {buttons}
        />
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <View style={{paddingTop:'5%'}}>
                <View style={{paddingBottom:'5%'}}>
                <Text style = {styles.textBalance}>Invested</Text>
                <Text style = {styles.textVioletSmall}>${this.state.totalInvestment}</Text>
                </View>
                <View style={{paddingBottom:'5%'}}>
                <Text style = {styles.textBalance}>% Gain/Loss</Text>
                <this.percentGainLossSign/>
                </View>
                <View style={{paddingBottom:'5%'}}>
                <Text style = {styles.textBalance}>Spare Change</Text>
                <Text style = {styles.textVioletSmall}>${this.state.totalSpareChange}</Text>
                </View>
            </View>
            <View style={{paddingTop:'5%'}}>
                <View style={{paddingBottom:'5%'}}>
                <Text style = {styles.textBalance}>Withdrawn</Text>
                <Text style = {styles.textVioletSmall}>${this.state.totalWithdrawn}</Text>
                </View>
                <View style={{paddingBottom:'5%'}}>
                <Text style = {styles.textBalance}>$ Gain/Loss</Text>
                <this.totalGainLossSign/>
                </View>
                <View style={{paddingBottom:'5%'}}>
                <Text style = {styles.textBalance}>Balance</Text>
                <Text style = {styles.textVioletSmall}>${this.state.totalEstimatedBalance}</Text>
                </View>
                </View>
        </View>
      </Card>

      <ScrollView>
      </ScrollView>

     </ViewContainer>
   )
 }
}
