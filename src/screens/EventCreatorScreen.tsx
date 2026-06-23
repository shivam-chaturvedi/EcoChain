import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EventCreatorScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#006c49" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ChonX</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="notifications" size={24} color="#006c49" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.titleSection}>
          <Text style={styles.pageTitle}>Create New Announcement</Text>
          <Text style={styles.pageSubtitle}>Design a purposeful experience for your eco-community.</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Announcement Title</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., Campus Reforestation Initiative"
              placeholderTextColor="#a0a0a0"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Describe the mission, activities, and what participants should bring..."
              placeholderTextColor="#a0a0a0"
              multiline
              numberOfLines={6}
            />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Icon name="perm-media" size={24} color="#006c49" />
            <Text style={styles.cardTitle}>Visual Assets</Text>
          </View>
          <TouchableOpacity style={styles.uploadArea}>
            <View style={styles.uploadIconContainer}>
              <Icon name="add-a-photo" size={32} color="#006c49" />
            </View>
            <Text style={styles.uploadTitle}>Upload Cover Image</Text>
            <Text style={styles.uploadSub}>PNG, JPG, or GIF up to 10MB (16:9 Recommended)</Text>
            <View style={styles.selectBtn}>
              <Text style={styles.selectBtnText}>Select File</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitleColored}>Audience</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Target Audience</Text>
            <View style={styles.selectBox}>
              <Text style={styles.selectText}>Whole School</Text>
              <Icon name="expand-more" size={24} color="#3c4a42" />
            </View>
          </View>
          <View style={styles.infoBanner}>
            <Icon name="verified-user" size={20} color="#006b5f" />
            <Text style={styles.infoBannerText}>Verified student organizers only</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.discardBtn} onPress={() => navigation.goBack()}>
          <Icon name="delete" size={24} color="#3c4a42" />
          <Text style={styles.discardText}>Discard</Text>
        </TouchableOpacity>
        <View style={styles.actionBtns}>
          <TouchableOpacity style={styles.draftBtn}>
            <Text style={styles.draftText}>Save Draft</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.publishBtn}>
            <Icon name="send" size={20} color="#fff" />
            <Text style={styles.publishText}>Publish Announcement</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e3e4',
  },
  headerTitle: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  iconButton: { padding: 8 },
  scrollContent: { padding: 24, paddingBottom: 100 },
  titleSection: { marginBottom: 32 },
  pageTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d', marginBottom: 8 },
  pageSubtitle: { fontSize: 16, color: '#3c4a42' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#e1e3e4',
  },
  inputGroup: { marginBottom: 20 },
  label: { fontSize: 12, fontWeight: '700', color: '#3c4a42', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8, marginLeft: 4 },
  input: {
    backgroundColor: '#f3f4f5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#191c1d',
  },
  textArea: { minHeight: 120, textAlignVertical: 'top' },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 },
  cardTitle: { fontSize: 20, fontWeight: '600', color: '#191c1d' },
  cardTitleColored: { fontSize: 20, fontWeight: '600', color: '#006c49', marginBottom: 16 },
  uploadArea: {
    borderWidth: 2,
    borderColor: '#bbcabf',
    borderStyle: 'dashed',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
  },
  uploadIconContainer: { width: 64, height: 64, borderRadius: 32, backgroundColor: 'rgba(16,185,129,0.1)', alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  uploadTitle: { fontSize: 18, fontWeight: '600', color: '#191c1d', marginBottom: 4 },
  uploadSub: { fontSize: 14, color: '#3c4a42', textAlign: 'center', marginBottom: 16 },
  selectBtn: { backgroundColor: 'rgba(0,108,73,0.1)', paddingHorizontal: 24, paddingVertical: 10, borderRadius: 20 },
  selectBtnText: { color: '#006c49', fontSize: 12, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5 },
  selectBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f3f4f5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  selectText: { fontSize: 16, color: '#191c1d' },
  infoBanner: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(109,245,225,0.1)', padding: 12, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(109,245,225,0.2)' },
  infoBannerText: { color: '#006b5f', fontSize: 14, fontWeight: '500', marginLeft: 8 },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255,255,255,0.9)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 32,
    borderTopWidth: 1,
    borderTopColor: '#e1e3e4',
  },
  discardBtn: { flexDirection: 'row', alignItems: 'center' },
  discardText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginLeft: 8, textTransform: 'uppercase', letterSpacing: 0.5 },
  actionBtns: { flexDirection: 'row', gap: 12 },
  draftBtn: { paddingHorizontal: 20, paddingVertical: 12, borderWidth: 1, borderColor: '#6c7a71', borderRadius: 8 },
  draftText: { fontSize: 12, fontWeight: '700', color: '#3c4a42', textTransform: 'uppercase', letterSpacing: 0.5 },
  publishBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#006c49', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 8 },
  publishText: { fontSize: 12, fontWeight: '700', color: '#fff', textTransform: 'uppercase', letterSpacing: 0.5, marginLeft: 8 },
});

export default EventCreatorScreen;
