import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function BossCard(){
  return(
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.titleArea}>
          <MaterialCommunityIcons
            name="skull-outline"
            size={21}
            color="#ff5368"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.title}>Dragão da API</Text>
        </View>

        <View style={styles.bossTag}>
          <Text style={styles.bossTagText}>CHEFE COLETIVO</Text>
        </View>
      </View>

      <View style={styles.lifeHeader}>
        <Text style={styles.lifeLabel}>VIDA DO CHEFE</Text>
        <Text style={styles.lifePercentage}>65% restantes</Text>
      </View>
      
      <View style={styles.lifeBackground}>
        <View style={styles.lifeValue} />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 11 }}>
        <MaterialCommunityIcons
          name="sword-cross"
          size={14}
          color="#ffb454"
        />

        <Text style={[styles.contribution, { marginTop: 0, marginLeft: 4 }]}>
          Contribuição da turma:{' '}
          <Text style={styles.contributionValue}>
            35%
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 18,
    backgroundColor: '#4b2438',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ff5065',
    padding: 15
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleArea: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold'
  },
  bossTag: {
    backgroundColor: '#ff5368',
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 5
  },
  bossTagText: {
    color: '#ffffff',
    fontSize: 8,
    fontWeight: 'bold'
  },
  lifeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
    marginBottom: 5
  },
  lifeLabel: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: 'bold'
  },
  lifePercentage: {
    color: '#ff6778',
    fontSize: 10,
    fontWeight: 'bold'
  },
  lifeBackground: {
    height: 9,
    borderRadius: 5,
    backgroundColor: '#2a1c2a',
    overflow: 'hidden'
  },
  lifeValue: {
    width: '65%',
    height: '100%',
    backgroundColor: '#ff5368'
  },
  contribution: {
    color: '#ffffff',
    marginTop: 11,
    fontSize: 10
  },
  contributionValue: {
    color: '#ffb457',
    fontWeight: 'bold'
  }
});
