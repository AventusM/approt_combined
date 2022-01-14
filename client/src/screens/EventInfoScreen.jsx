import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from "react-redux";
import { useRoute, useNavigation } from '@react-navigation/native';
import QRCode from "react-native-qrcode-svg";

import { Text } from '../components/Generic';
import { EventInfoScreenPlaceholder } from '../components/Placeholders';
import { SINGLE_EVENT_GROUP_ROUTE_MAP } from '../constants';
import { useSingleAppro } from '../hooks';
import theme from '../theme';


const styles = StyleSheet.create({
  outerContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    // Flatlist shouldn't get cut off from the bottom with margin
    marginTop: 20,
    marginHorizontal: 20,
  },
  levelTrackerCardContainer: {
    alignItems: 'center',
    borderColor: 'rgba(184, 184, 184, 0.9)',
    borderRadius: 15,
    borderWidth: 2,
    justifyContent: 'center',
    marginVertical: 20,
    paddingVertical: 20,
  },
  cardListContainer: {
    width: '100%', 
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'rgba(184, 184, 184, 0.5)',
    borderRadius: 15,
    borderWidth: 2,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:20,
  },
  iconContainer: {
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  name: {
    fontSize: theme.fontSizes.smallerHeading,
  },
  completed: {
    color:'#24B273',
    fontSize: 12
  },
  notCompleted: {
    color: 'orange',
    fontSize: 12
  },
  divider: {
    marginBottom: 20,
  },
  title: {
    fontSize: theme.fontSizes.smallerHeading,
    fontWeight: theme.fontWeights.bold
  },
  filterRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '100%',
  },
  filterRowItemBase: {
    marginRight: 15,
  },
  activeFilterRowItem: {
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
    textDecorationLine: 'underline'
  },
  inactiveFilterRowItem: {

  }
});

export const EventInfoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { data, status } = useSingleAppro(route.params.approData.id);
  const { currentUser } = useSelector((state) => state.authData);
  
  const doOpenMap = () => {
    navigation.navigate(SINGLE_EVENT_GROUP_ROUTE_MAP, {id: route.params.approData.id});
  };

  const renderItem = ({ item }) => {
    const thisEventCompleted = item.completedParticipants.find(participantId => participantId === currentUser.userId);
    return (
      <TouchableOpacity onPress={doOpenMap} style={styles.cardContainer}>
           <View style={{flexDirection:'row'}}>
              <View style={[styles.iconContainer, {backgroundColor: '#FC8618', marginRight: 20}]} />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={thisEventCompleted? styles.completed : styles.notCompleted}>{thisEventCompleted ? 'Rasti suoritettu!': 'Ei vielä suoritettu'}</Text>
              </View>
          </View>
          <View style={[styles.iconContainer, {backgroundColor: '#24B273'}] } />
          <QRCode value={generateQRValue(item.id)} />
      </TouchableOpacity>
    );
  };

  if(status === "loading"){
    return <EventInfoScreenPlaceholder />;
  }

  return (
    <View style={styles.outerContainer}>
      {/* Non-list container into own component perhaps? */}
      <View style={styles.nonListContainer}>
        <Text style={styles.title}>{data.name}</Text>
        <View style={styles.levelTrackerCardContainer}>
          <Text>Vielä 5 jäljellä olevaa rastia ensimmäiseen tasoon</Text>
        </View>
        <View style={styles.filterRowContainer}>
          <Text style={[styles.activeFilterRowItem, styles.filterRowItemBase]}>Kaikki</Text>
          <Text style={[styles.filterRowItemBase]}>Järjestys</Text>
          <Text style={[styles.filterRowItemBase]}>Baarit</Text>
          <Text style={[styles.filterRowItemBase]}>Ravintolat</Text>
        </View>
      </View>
      <FlatList
        contentContainerStyle={{justifyContent: 'center'}}
        style={styles.cardListContainer}
        ItemSeparatorComponent={() => <View style={styles.divider}/>}
        data={data.events}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={data.events}
    />
    </View>
  );
};

// TODO: Add some event data for the confirmation prompt when user runs a QR scan
const generateQRValue = (id) => {
  return `${id}`;
};