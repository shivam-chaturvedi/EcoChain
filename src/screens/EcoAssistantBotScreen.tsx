import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function EcoAssistantBotScreen({ navigation }: any) {
  const [messages, setMessages] = useState([
    {
      id: '1',
      sender: 'bot',
      text: "Hello! I'm your ChonX Eco-Assistant. Ready to calculate your impact or explore the Arena today? 🌱",
      time: '09:41 AM',
      type: 'text',
    },
    {
      id: '2',
      sender: 'user',
      text: 'How many points do I get for biking to work today?',
      time: '09:42 AM',
      type: 'text',
    },
    {
      id: '3',
      sender: 'bot',
      type: 'complex',
      time: '09:42 AM',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([
        ...messages,
        {
          id: Date.now().toString(),
          sender: 'user',
          text: inputText.trim(),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: 'text',
        },
      ]);
      setInputText('');
      setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 100);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        {/* Top Nav */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.botIconCircle}>
              <Icon name="smart-toy" size={24} color="#00422b" />
              <View style={styles.onlineDot} />
            </View>
            <View>
              <Text style={styles.title}>ChonX</Text>
              <Text style={styles.subtitle}>ECO-INTELLIGENCE BOT</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconBtn}>
              <Icon name="notifications" size={24} color="#006c49" />
            </TouchableOpacity>
            <View style={styles.userAvatar}>
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_TUjVZ-eUagXpojmSBYRr5QbyZVBvFZvMkXE1RnP0VcXnlJ9uSpJMMiBis2lZ8qapE9T0u3Kk27KvVnei6adSXsQeOi8Ikb5BvCppsB8AUC4GR70aZWBP-psB-NSF6LNXSb4qZUWO9DTYrAh2vNEki0Q_dcmbM1QsTRbWlsISPkC7ifT7G-FoGm9FCHNpzSrrl5gBthDtX2gO2zaemI5L1bwZQsxJM72BkGqR13jwJla5KiI6THMYkwf43aVOkvL2AYKRNcuY3L6t' }}
                style={styles.avatarImg}
              />
            </View>
          </View>
        </View>

        {/* Chat Area */}
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.chatContent}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        >
          <View style={styles.dateLabelWrap}>
            <Text style={styles.dateLabel}>Today</Text>
          </View>

          {messages.map((msg) => (
            <View key={msg.id} style={[styles.msgRow, msg.sender === 'user' ? styles.msgRowUser : styles.msgRowBot]}>
              {msg.sender === 'bot' && (
                <View style={styles.botAvatar}>
                  <Icon name="eco" size={16} color="#00422b" />
                </View>
              )}
              
              <View style={[styles.msgBubble, msg.sender === 'user' ? styles.bubbleUser : styles.bubbleBot]}>
                {msg.type === 'text' && (
                  <Text style={[styles.msgText, msg.sender === 'user' ? styles.msgTextUser : styles.msgTextBot]}>
                    {msg.text}
                  </Text>
                )}

                {msg.type === 'complex' && (
                  <View>
                    <View style={styles.complexHeader}>
                      <Icon name="workspace-premium" size={20} color="#006c49" />
                      <Text style={styles.complexTitle}>Eco-Calculation</Text>
                    </View>
                    <Text style={styles.msgTextBot}>
                      Biking to work earns you <Text style={styles.boldPrimary}>50 XP</Text> and saves approximately <Text style={styles.boldSecondary}>1.2kg of CO2</Text>!
                    </Text>
                    <View style={styles.achievementBox}>
                      <View style={styles.achievementIcon}>
                        <Icon name="pedal-bike" size={24} color="#ffffff" />
                      </View>
                      <View>
                        <Text style={styles.achieveTitle}>Daily Achievement Unlocked</Text>
                        <Text style={styles.achieveSub}>Green Commuter Level 2</Text>
                      </View>
                    </View>
                  </View>
                )}
                
                <Text style={[styles.msgTime, msg.sender === 'user' ? styles.msgTimeUser : styles.msgTimeBot]}>
                  {msg.time}
                </Text>
              </View>
            </View>
          ))}

          {/* Quick Replies */}
          <View style={styles.quickReplies}>
            <TouchableOpacity style={styles.qrBtn}>
              <Icon name="emoji-events" size={16} color="#006c49" />
              <Text style={styles.qrBtnText}>Check Rankings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.qrBtn}>
              <Icon name="energy-savings-leaf" size={16} color="#006c49" />
              <Text style={styles.qrBtnText}>Daily Challenge</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.qrBtn}>
              <Icon name="receipt-long" size={16} color="#006c49" />
              <Text style={styles.qrBtnText}>Log My Commute</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Input Area */}
        <View style={styles.inputArea}>
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.attachBtn}>
              <Icon name="add-circle" size={24} color="#3c4a42" />
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              placeholder="Ask about your environmental impact..."
              placeholderTextColor="#6c7a71"
              value={inputText}
              onChangeText={setInputText}
              onSubmitEditing={handleSend}
            />
            <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
              <Icon name="send" size={20} color="#ffffff" />
            </TouchableOpacity>
          </View>
          <Text style={styles.poweredBy}>AI-POWERED BY CHONX CARBON ENGINE</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  container: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 64, paddingHorizontal: 24, backgroundColor: 'rgba(248,249,250,0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  botIconCircle: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#10b981', alignItems: 'center', justifyContent: 'center' },
  onlineDot: { position: 'absolute', bottom: 0, right: 0, width: 12, height: 12, borderRadius: 6, backgroundColor: '#006c49', borderWidth: 2, borderColor: '#f8f9fa' },
  title: { fontSize: 24, fontWeight: '800', color: '#006c49', letterSpacing: -0.5 },
  subtitle: { fontSize: 10, fontWeight: '700', color: '#3c4a42', letterSpacing: 1 },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  iconBtn: { padding: 8 },
  userAvatar: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#10b981', overflow: 'hidden' },
  avatarImg: { width: '100%', height: '100%' },

  chatContent: { paddingHorizontal: 24, paddingVertical: 24 },
  dateLabelWrap: { alignItems: 'center', marginBottom: 24 },
  dateLabel: { backgroundColor: '#f3f4f5', paddingHorizontal: 16, paddingVertical: 4, borderRadius: 12, fontSize: 12, fontWeight: '700', color: '#3c4a42', textTransform: 'uppercase' },

  msgRow: { flexDirection: 'row', alignItems: 'flex-end', marginBottom: 16, maxWidth: '85%' },
  msgRowUser: { alignSelf: 'flex-end', justifyContent: 'flex-end' },
  msgRowBot: { alignSelf: 'flex-start' },
  botAvatar: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#10b981', alignItems: 'center', justifyContent: 'center', marginRight: 8, marginBottom: 4 },
  
  msgBubble: { padding: 16, borderRadius: 12 },
  bubbleUser: { backgroundColor: '#10b981', borderBottomRightRadius: 4 },
  bubbleBot: { backgroundColor: '#ffffff', borderBottomLeftRadius: 4, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)' },
  
  msgText: { fontSize: 16, lineHeight: 24 },
  msgTextUser: { color: '#00422b' },
  msgTextBot: { color: '#191c1d' },
  
  msgTime: { fontSize: 10, marginTop: 8, textAlign: 'right' },
  msgTimeUser: { color: 'rgba(0,66,43,0.7)' },
  msgTimeBot: { color: 'rgba(60,74,66,0.6)' },

  complexHeader: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 8 },
  complexTitle: { fontWeight: 'bold', color: '#006c49' },
  boldPrimary: { fontWeight: 'bold', color: '#006c49' },
  boldSecondary: { fontWeight: 'bold', color: '#006b5f' },

  achievementBox: { marginTop: 16, padding: 12, backgroundColor: 'rgba(109,245,225,0.2)', borderRadius: 8, borderWidth: 1, borderColor: 'rgba(0,107,95,0.1)', flexDirection: 'row', alignItems: 'center', gap: 12 },
  achievementIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#006b5f', alignItems: 'center', justifyContent: 'center' },
  achieveTitle: { fontSize: 12, fontWeight: 'bold', color: '#006f64' },
  achieveSub: { fontSize: 10, color: 'rgba(0,111,100,0.8)' },

  quickReplies: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 16 },
  qrBtn: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, borderWidth: 1, borderColor: '#10b981' },
  qrBtnText: { fontSize: 12, fontWeight: '700', color: '#006c49', textTransform: 'uppercase' },

  inputArea: { backgroundColor: 'rgba(248,249,250,0.9)', paddingHorizontal: 24, paddingTop: 16, paddingBottom: 24, borderTopWidth: 1, borderTopColor: 'rgba(187,202,191,0.3)' },
  inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f3f4f5', borderRadius: 24, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)', paddingHorizontal: 8, paddingVertical: 6 },
  attachBtn: { padding: 8 },
  textInput: { flex: 1, fontSize: 16, color: '#191c1d', paddingHorizontal: 8 },
  sendBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#006c49', alignItems: 'center', justifyContent: 'center' },
  poweredBy: { fontSize: 10, textAlign: 'center', color: 'rgba(60,74,66,0.5)', marginTop: 12, letterSpacing: 0.5 },
});
