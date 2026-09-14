import { SafeAreaView, View, StyleSheet, StatusBar } from 'react-native';

import { PlayerHeader } from './componentes/PlayerHeader';
import { ProgressBar } from './componentes/ProgressBar';
import { MissionCard } from './componentes/MissionCard';
import { BossCard } from './componentes/BossCard';
import { BottomNav } from './componentes/BottomNav';

export default function App(){
  return(
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#292c3d"
      />

      <View style={styles.content}>
        <PlayerHeader />

        <ProgressBar />

        <MissionCard />

        <BossCard />
      </View>

      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272a39'
  },

  content: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 14
  }
});
