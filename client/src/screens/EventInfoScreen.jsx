import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text } from '../components/Generic';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    //borderWidth: 2,
  },
  cardListContainer: {
    padding: 20,
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
    fontSize: 18,
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
  }
});

export const EventInfoScreen = () => {

  const mockApproData = [
    {
    id: 1,
    name: "Gurula",
    completedStatus: true
  },
  {
    id: 2,
    name: "Test",
    completedStatus: false
  }
];


  const renderItem = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
           <View style={{flexDirection:'row'}}>
              <View style={[styles.iconContainer, {backgroundColor: '#FC8618', marginRight: 20}]} />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={item.completedStatus? styles.completed : styles.notCompleted}>{item.completedStatus ? 'Suoritettu': 'Ei suoritettu'}</Text>
              </View>
          </View>
          <View style={[styles.iconContainer, {backgroundColor: '#24B273'}] } />
          
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Kumpulan approt</Text>
      <View>
        <Text>Vielä 5 jäljellä olevaa rastia ensimmäiseen tasoon</Text>
      </View>
      <View>
        <Text>Kaikki</Text>
        <Text>Järjestys</Text>
        <Text>Baarit</Text>
        <Text>Ravintolat</Text>
      </View>
      <FlatList
      contentContainerStyle={{justifyContent: 'center'}}
      style={styles.cardListContainer}
      ItemSeparatorComponent={() => <View style={styles.divider}/>}
      data={mockApproData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
    </View>
  );
};


