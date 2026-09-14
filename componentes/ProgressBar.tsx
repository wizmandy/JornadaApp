import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function ProgressBar(){
  return(
    <View style={styles.container}>

      <View style={styles.progressHeader}>
        <Text style={styles.label}>EXPERIÊNCIA</Text>
        <Text style={styles.xp}>430 / 600 XP</Text>
      </View>

      <View style={styles.progressBackground}>
        <View style={styles.progressValue}/>
      </View>

      <View style={styles.infoArea}>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialCommunityIcons
          name="circle-multiple-outline"
          size={17}
          color="#ffb454"
        />

        <Text style={[styles.moedas, { marginLeft: 5 }]}>
          120 moedas
        </Text>
      </View>

        <View style={styles.diasBox}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.dias}>5 dias</Text>

            <MaterialCommunityIcons
              name="fire"
              size={15}
              color="#ff7043"
              style={{ marginLeft: 3 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#373a4b'
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  label: {
    color: '#7782aa',
    fontSize: 11,
    fontWeight: 'bold'
  },
  xp: {
    color: '#42f5a1',
    fontSize: 11,
    fontWeight: 'bold'
  },
  progressBackground: {
    height: 9,
    backgroundColor: '#1e2130',
    borderRadius: 5,
    overflow: 'hidden'
  },
  progressValue: {
    width: '72%',
    height: '100%',
    backgroundColor: '#c084fc',
  },
  infoArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14
  },
  moedas: {
    color: '#ffb454',
    fontSize: 12,
    fontWeight: 'bold'
  },
  diasBox: {
    backgroundColor: '#353848',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 5
  },
  dias: {
    color: '#ffb454',
    fontSize: 11,
    fontWeight: 'bold'
  }
});
