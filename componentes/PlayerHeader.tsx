import { View, Text, StyleSheet, Image } from 'react-native';

export function PlayerHeader(){
  return(
    <View style={styles.header}>
      <View style={styles.playerArea}>

        <View style={styles.avatar}>
          <Image
            source={require('../assets/lyra-avatar.png')}
            style={styles.avatarImage}
          />
        </View>

      <View>
        <Text style={styles.nome}>Lyra</Text>
        <Text style={styles.titulo}>Maga dos Estados</Text>
      </View>

    </View>

      <View style={styles.level}>
        <Text style={styles.levelText}>Lvl 4</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  playerArea: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#bd93f9',
    backgroundColor: '#303345',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    overflow: 'hidden'
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 24
  },
  nome: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold'
  },
  titulo: {
    color: '#bd93f9',
    fontSize: 12,
    marginTop: 2
  },
  level: {
    backgroundColor: '#bd93f9',
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 7
  },
  levelText: {
    color: '#292b3a',
    fontSize: 11,
    fontWeight: 'bold'
  }
});
