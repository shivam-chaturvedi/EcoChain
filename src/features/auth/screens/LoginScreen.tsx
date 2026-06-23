import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppIcon from '../../../components/AppIcon';
import AppLogo from '../../../components/AppLogo';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

const { height } = Dimensions.get('window');

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigation.navigate('LocationSelection');
  };

  return (
    <SafeAreaView style={styles.root} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.backgroundGreen} />

      {/* Green tinted scenic header area */}
      <View style={styles.headerBg} />

      <KeyboardAvoidingView
        style={styles.kavContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>

          {/* Spacer for header area */}
          <View style={styles.topSpacer} />

          {/* White card */}
          <View style={styles.card}>

            {/* Logo */}
            <View style={styles.logoArea}>
              <AppLogo size={72} />
              <Text style={styles.logoName}>EcoChain</Text>
            </View>

            {/* Welcome text */}
            <Text style={styles.welcomeTitle}>Welcome Back</Text>
            <Text style={styles.welcomeSubtitle}>
              Log in to track your planetary impact.
            </Text>

            {/* Email field */}
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>EMAIL ADDRESS</Text>
              <View style={styles.inputWrapper}>
                <View style={{ marginRight: 10 }}>
                  <AppIcon name="email" size={18} color={Colors.textSecondary} />
                </View>
                <TextInput
                  style={styles.textInput}
                  placeholder="name@ecosystem.com"
                  placeholderTextColor={Colors.inputPlaceholder}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
            </View>

            {/* Password field */}
            <View style={styles.fieldGroup}>
              <View style={styles.fieldLabelRow}>
                <Text style={styles.fieldLabel}>PASSWORD</Text>
                <TouchableOpacity activeOpacity={0.7}>
                  <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.inputWrapper}>
                <View style={{ marginRight: 10 }}>
                  <AppIcon name="lock" size={18} color={Colors.textSecondary} />
                </View>
                <TextInput
                  style={[styles.textInput, styles.passwordInput]}
                  placeholder="••••••••"
                  placeholderTextColor={Colors.inputPlaceholder}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeBtn}
                  activeOpacity={0.7}>
                  <AppIcon
                    name={showPassword ? 'visibility-off' : 'visibility'}
                    size={20}
                    color={Colors.textSecondary}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Login button */}
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={handleLogin}
              activeOpacity={0.85}>
              <Text style={styles.loginBtnText}>Log In  →</Text>
            </TouchableOpacity>

            {/* Sign up */}
            <Text style={styles.signupRow}>
              Don't have an account?{' '}
              <Text
                style={styles.signupLink}
                onPress={() => {}}>
                Sign up
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.backgroundGreen,
  },
  headerBg: {
    ...StyleSheet.absoluteFill,
    backgroundColor: Colors.backgroundGreen,
  },
  kavContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  topSpacer: {
    height: height * 0.14,
  },

  // Card
  card: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 32,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 8,
  },

  // Logo
  logoArea: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  logoEmoji: {
    fontSize: 30,
  },
  logoName: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.primaryDark,
    letterSpacing: 0.5,
  },

  // Welcome text
  welcomeTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 6,
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
    paddingHorizontal: 8,
  },

  // Fields
  fieldGroup: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.text,
    letterSpacing: 0.6,
    marginBottom: 7,
  },
  fieldLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 7,
  },
  forgotText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.link,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.inputBg,
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    borderRadius: 12,
    height: 52,
    paddingHorizontal: 14,
  },
  inputIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: Colors.text,
    paddingVertical: 0,
  },
  passwordInput: {
    letterSpacing: 1,
  },
  eyeBtn: {
    padding: 4,
  },
  eyeIcon: {
    fontSize: 16,
  },

  // Login button
  loginBtn: {
    height: 54,
    backgroundColor: Colors.buttonPrimary,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 20,
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  loginBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.buttonText,
    letterSpacing: 0.3,
  },

  // Sign up
  signupRow: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.textSecondary,
  },
  signupLink: {
    color: Colors.link,
    fontWeight: '700',
  },
});
