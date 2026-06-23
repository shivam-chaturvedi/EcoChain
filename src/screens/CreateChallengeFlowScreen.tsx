import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CreateChallengeFlowScreen() {
  const [tasks, setTasks] = useState([
    { id: 1, name: '' }
  ]);

  const addTask = () => {
    setTasks([...tasks, { id: tasks.length + 1, name: '' }]);
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backBtn}>
            <Icon name="arrow-back" size={24} color="#006c49" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Create New Challenge</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.modeText}>TEACHER MODE</Text>
          <View style={styles.avatar}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlSEyQjRx8G5iN9hVq5TwQcWelx-AoH04Noyey0dYAzfnjKbaKAp8mPz32zUShoWI2MquFB5LKlv6Y_FgrZQEOraE016JXVB0BM6kEi8ommJ-I0ZPpHuUZ-R4dAtUyuo49DL8d1KNcTUwlHpfTjHEg_RXYQvhb-ReDr_vA7WgdnAhF0QULgxYGgXNDh297uVHF_U1TiHgcpLq42Y9tzu609vZX3zxn7NazQjXoWSbKF0z2yC26anRv3Y9YNj99pKC-iY_ZhhgiAVDw' }}
              style={styles.avatarImg}
            />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Cover Image Upload */}
        <TouchableOpacity style={styles.uploadBox}>
          <View style={styles.uploadIconWrap}>
            <Icon name="add-a-photo" size={32} color="#006c49" />
          </View>
          <Text style={styles.uploadTitle}>Upload Challenge Cover</Text>
          <Text style={styles.uploadSubtitle}>PNG, JPG up to 10MB (16:9 recommended)</Text>
        </TouchableOpacity>

        {/* Basic Info Form */}
        <View style={styles.formCard}>
          <View style={styles.field}>
            <Text style={styles.label}>CHALLENGE TITLE</Text>
            <TextInput style={styles.input} placeholder="e.g., The Plastic-Free Week Expedition" placeholderTextColor="#6c7a71" />
          </View>
          
          <View style={styles.field}>
            <Text style={styles.label}>DESCRIPTION</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Describe the mission, the impact, and why students should join..."
              placeholderTextColor="#6c7a71"
              multiline
              numberOfLines={4}
            />
          </View>

          <View style={styles.row}>
            <View style={[styles.field, { flex: 1, marginRight: 12 }]}>
              <Text style={styles.label}>START DATE</Text>
              <View style={styles.inputWrap}>
                <TextInput style={styles.input} placeholder="YYYY-MM-DD" placeholderTextColor="#6c7a71" />
                <Icon name="calendar-today" size={20} color="#6c7a71" style={styles.inputIcon} />
              </View>
            </View>
            <View style={[styles.field, { flex: 1, marginLeft: 12 }]}>
              <Text style={styles.label}>END DATE</Text>
              <View style={styles.inputWrap}>
                <TextInput style={styles.input} placeholder="YYYY-MM-DD" placeholderTextColor="#6c7a71" />
                <Icon name="event" size={20} color="#6c7a71" style={styles.inputIcon} />
              </View>
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>TARGET AUDIENCE</Text>
            <View style={styles.inputWrap}>
              <Text style={[styles.input, { paddingTop: 12 }]}>My Classes</Text>
              <Icon name="expand-more" size={20} color="#6c7a71" style={styles.inputIcon} />
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>REWARDS</Text>
            <View style={styles.row}>
              <View style={[styles.inputWrap, { flex: 1, marginRight: 12, borderRadius: 24 }]}>
                <Icon name="stars" size={20} color="#006c49" style={[styles.inputIcon, { left: 16, right: 'auto' }]} />
                <TextInput style={[styles.input, { paddingLeft: 48 }]} placeholder="e.g., 100" keyboardType="numeric" placeholderTextColor="#6c7a71" />
              </View>
              <View style={[styles.inputWrap, { flex: 1, marginLeft: 12, borderRadius: 24 }]}>
                <Icon name="eco" size={20} color="#006c49" style={[styles.inputIcon, { left: 16, right: 'auto' }]} />
                <TextInput style={[styles.input, { paddingLeft: 48 }]} placeholder="e.g., 50" keyboardType="numeric" placeholderTextColor="#6c7a71" />
              </View>
            </View>
          </View>
        </View>

        {/* Task Builder */}
        <View style={styles.taskSection}>
          <Text style={[styles.label, { marginBottom: 16, fontSize: 16 }]}>TASKS</Text>
          {tasks.map((task, index) => (
            <View key={task.id} style={styles.taskCard}>
              <View style={styles.taskNumberWrap}><Text style={styles.taskNumber}>{index + 1}</Text></View>
              <View style={styles.taskContent}>
                <TextInput style={styles.taskInput} placeholder="Task Name..." placeholderTextColor="#6c7a71" />
                <View style={styles.taskActions}>
                  <TouchableOpacity style={styles.taskActionBtn}>
                    <Icon name="stars" size={16} color="#006b5f" />
                    <Text style={styles.taskActionText}>Add Reward</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.taskActionBtn}>
                    <Icon name="attachment" size={16} color="#6c7a71" />
                    <Text style={styles.taskActionText}>Evidence Type</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity style={styles.taskDelete} onPress={() => removeTask(task.id)}>
                <Icon name="delete" size={24} color="#6c7a71" />
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity style={styles.addTaskBtn} onPress={addTask}>
            <Icon name="add" size={24} color="#006c49" />
            <Text style={styles.addTaskText}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Actions */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.draftBtn}>
          <Text style={styles.draftText}>Save Draft</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.publishBtn}>
          <Text style={styles.publishText}>Publish Challenge</Text>
          <Icon name="rocket-launch" size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, height: 64, backgroundColor: 'rgba(255,255,255,0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  backBtn: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 20 },
  headerTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 24, display: 'flex' },
  modeText: { fontSize: 12, fontWeight: '700', color: '#6c7a71', letterSpacing: 1 },
  avatar: { width: 40, height: 40, borderRadius: 20, overflow: 'hidden', backgroundColor: '#6df5e1' },
  avatarImg: { width: '100%', height: '100%' },
  
  scrollContent: { paddingHorizontal: 24, paddingTop: 32, paddingBottom: 100 },
  
  uploadBox: { height: 256, backgroundColor: '#f3f4f5', borderRadius: 16, borderWidth: 2, borderStyle: 'dashed', borderColor: '#bbcabf', alignItems: 'center', justifyContent: 'center', marginBottom: 24 },
  uploadIconWrap: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center', marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
  uploadTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  uploadSubtitle: { fontSize: 12, fontWeight: '700', color: '#6c7a71', letterSpacing: 1, marginTop: 4 },

  formCard: { backgroundColor: 'rgba(255,255,255,0.7)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', marginBottom: 24 },
  field: { marginBottom: 24 },
  label: { fontSize: 12, fontWeight: '700', color: '#006c49', letterSpacing: 1, marginBottom: 8, marginLeft: 4 },
  input: { backgroundColor: '#f3f4f5', borderRadius: 16, paddingHorizontal: 24, paddingVertical: 16, fontSize: 16, color: '#191c1d' },
  textArea: { minHeight: 120, textAlignVertical: 'top' },
  row: { flexDirection: 'row' },
  inputWrap: { position: 'relative' },
  inputIcon: { position: 'absolute', right: 16, top: '50%', marginTop: -10 },

  taskSection: { marginBottom: 32 },
  taskCard: { backgroundColor: 'rgba(255,255,255,0.7)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', flexDirection: 'row', alignItems: 'flex-start', gap: 24, marginBottom: 16 },
  taskNumberWrap: { width: 48, height: 48, borderRadius: 24, backgroundColor: 'rgba(16,185,129,0.2)', alignItems: 'center', justifyContent: 'center' },
  taskNumber: { fontSize: 18, fontWeight: 'bold', color: '#006c49' },
  taskContent: { flex: 1 },
  taskInput: { borderBottomWidth: 1, borderBottomColor: '#bbcabf', fontSize: 24, fontWeight: '600', paddingVertical: 8, marginBottom: 16, color: '#191c1d' },
  taskActions: { flexDirection: 'row', gap: 16 },
  taskActionBtn: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: 'rgba(225,227,228,0.5)', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 16 },
  taskActionText: { fontSize: 12, fontWeight: '700', color: '#191c1d' },
  taskDelete: { padding: 8 },
  addTaskBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingVertical: 16, borderWidth: 2, borderStyle: 'dashed', borderColor: '#006c49', borderRadius: 16 },
  addTaskText: { fontSize: 16, fontWeight: '700', color: '#006c49' },

  bottomBar: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255,255,255,0.9)', paddingHorizontal: 24, paddingVertical: 16, flexDirection: 'row', gap: 24, borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.2)' },
  draftBtn: { flex: 1, paddingVertical: 16, borderRadius: 24, alignItems: 'center' },
  draftText: { fontSize: 24, fontWeight: '600', color: '#3c4a42' },
  publishBtn: { flex: 1, flexDirection: 'row', backgroundColor: '#10b981', paddingVertical: 16, borderRadius: 32, alignItems: 'center', justifyContent: 'center', gap: 12 },
  publishText: { fontSize: 24, fontWeight: '600', color: '#ffffff' },
});
