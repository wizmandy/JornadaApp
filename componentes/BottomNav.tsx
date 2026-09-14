import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function BottomNav(){
  return(
    <View style={styles.nav}>

      <View style={styles.item}>
        <MaterialCommunityIcons
          name="map-marker-outline"
          size={22}
          color="#bd93f9"
        />
        <Text style={styles.activeText}>
          Jornada
        </Text>
      </View>

      <View style={styles.item}>
        <MaterialCommunityIcons
          name="shield-outline"
          size={22}
          color="#61729e"
        />
        <Text style={styles.text}>
          Missões
        </Text>
      </View>

      <View style={styles.item}>
        <MaterialCommunityIcons
          name="beer-outline"
          size={22}
          color="#61729e"
        />
        <Text style={styles.text}>
          Taverna
        </Text>
      </View>

      <View style={styles.item}>
        <MaterialCommunityIcons
          name="skull-outline"
          size={22}
          color="#61729e"
        />
        <Text style={styles.text}>
          Personagem
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    height: 70,
    backgroundColor: '#282b3a',
    borderTopWidth: 1,
    borderTopColor: '#343848',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 5
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize: 9,
    color: '#61729e',
    marginTop: 3,
    fontWeight: 'bold'
  },
  activeText: {
    fontSize: 9,
    color: '#bd93f9',
    marginTop: 3,
    fontWeight: 'bold'
  }
});
