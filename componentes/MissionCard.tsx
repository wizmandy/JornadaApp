import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function MissionCard(){
  return(
      <View style={styles.container}>
      <Text style={styles.sectionTitle}>MISSÃO EM DESTAQUE</Text>

      <View style={styles.card}>
        <View style={styles.top}>
          <View style={styles.iconBox}>
            <MaterialCommunityIcons
              name="sword-cross"
              size={21}
              color="#c084fc"
            />
          </View>

          <View style={styles.missionInfo}>
            <Text style={styles.title}>Derrote o Goblin das Props</Text>

            <View style={styles.details}>
              <View style={styles.dificuldadeBox}>
                <Text style={styles.dificuldade}>Média</Text>
              </View>

              <Text style={styles.entrega}>Entrega: 15 ago</Text>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.rewards}>
          <Text style={styles.rewardLabel}>RECOMPENSAS:</Text>

          <View style={styles.rewardItems}>
            <View style={styles.rewardBox}>
              <Text style={styles.xp}>+100 XP</Text>
            </View>

            <View style={styles.rewardBox}>
              <Text style={styles.coins}>+20 moedas</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 18
  },
  sectionTitle: {
    color: '#7c87b2',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 18
  },
  card: {
    backgroundColor: '#343747',
    borderRadius: 15,
    padding: 16,
    borderWidth: 1,
    borderColor: '#45495c',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#292c3b',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14
  },
  missionInfo: {
    flex: 1
  },
  title: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold'
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    gap: 8
  },
  dificuldadeBox: {
    backgroundColor: '#4a3d37',
    borderRadius: 4,
    paddingHorizontal: 7,
    paddingVertical: 3
  },
  dificuldade: {
    color: '#ffb457',
    fontSize: 10,
    fontWeight: 'bold'
  },
  entrega: {
    color: '#747ea4',
    fontSize: 10
  },
  divider: {
    height: 1,
    backgroundColor: '#4a4d5f',
    marginVertical: 14
  },
  rewards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rewardLabel: {
    color: '#7c87b2',
    fontSize: 10,
    fontWeight: 'bold'
  },
  rewardItems: {
    flexDirection: 'row',
    gap: 8
  },
  rewardBox: {
    backgroundColor: '#292c3b',
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 5
  },
  xp: {
    color: '#44f5a0',
    fontWeight: 'bold',
    fontSize: 10
  },
  coins: {
    color: '#ffb457',
    fontWeight: 'bold',
    fontSize: 10
  }
});
