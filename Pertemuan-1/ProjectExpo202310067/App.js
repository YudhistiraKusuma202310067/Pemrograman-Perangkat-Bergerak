/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Tentang Diri Saya">
            Saya <Text style={styles.highlight}>Yudhistira Kusuma</Text>, lulusan SMA Budi Mulia Bogor. 
            Saya <Text style={styles.highlight}>mahasiswa Institut Bisnis dan Informatika Kesatuan</Text>.
            Saya berminat bekerja sebagai Mobile Application Designer.
          </Section>
          <Section title="Riwayat Pendidikan">
            <Text style={styles.highlight}>SMP Budi Mulia </Text> (Bogor - 2017) 
            <Text style={styles.highlight}> SMA Budi Mulia </Text> (Bogor - 2020)
          </Section>
          <Section title="Kemampuan Dasar">
            *Programming
            *Fotografi
            *Videografi
            *Adobe Photoshop
            *CorelDraw
            *Canva
          </Section>
          <Section title="Informasi Kontak">
            <Text style={styles.highlight}>Phone</Text> : 0881 5342 328 
            <Text style={styles.highlight}> Email</Text> : 202310067@student.ibik.ac.id
            <Text style={styles.highlight}> Alamat</Text> : Jalan Farmasi I BF 12, Bogor
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
