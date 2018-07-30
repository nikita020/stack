import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SectionList
} from 'react-native';
import styles from './HomeNotifications.style';
import NotificationPreview from '../../../components/NotificationPreview';

class HomeNotifications extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            this.props.navigation.goBack()
          }}>
          <Image
            style={styles.closeIcon}
            source={require('../../../assets/cross.png')}
            resizeMode="contain"
            />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <SectionList
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled={false}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.sectionHeaderText}>{title}</Text>
            )}
            ItemSeparatorComponent={() => <View style={{height: 15}}/>}
            keyExtractor={(item, index) => index}
            style={styles.listView}
            sections={[
                {title: 'Today', data: [{color: 'blue', type: 'alert'}, {color: 'green'}]},
                {title: 'Yesterday', data: [{color: 'violet', type: 'alert'}, {color: 'sea'}]},
              ]}
            renderItem={this._renderItem}
            />

        </View>
      </View>
    )
  }

  _renderItem = ({item, index, section}) => {
    return (
      <NotificationPreview
        color={item.color}
        type={item.type}/>
    )
  }
}

export default HomeNotifications
