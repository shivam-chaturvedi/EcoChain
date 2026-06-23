import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function SupportHelpHubScreen({ navigation }: any) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I verify our school's carbon credits?",
      answer: "Log in to your Dashboard and navigate to the 'Environmental Impact' tab. From there, select 'Certification' to view your current standing and pending carbon credits awaiting verification by our auditors.",
    },
    {
      question: "Adding new teachers to the administration panel",
      answer: "In the 'Teachers' section, click the 'Invite New' button. Enter their institutional email address and assign them a specific role (Lead Coordinator, Department Representative, or Student Mentor).",
    },
    {
      question: "Data syncing issues with smart meters",
      answer: "Ensure your school's gateway is connected to the same subnet as your smart meters. If the data hasn't updated in 24 hours, try a soft reboot of the primary sensor node in the utility room.",
    }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="eco" size={24} color="#006c49" />
          <Text style={styles.logoText}>EcoSchools Admin</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="notifications" size={24} color="#006c49" />
          </TouchableOpacity>
          <View style={styles.avatarWrapper}>
            <Text style={styles.avatarText}>SC</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.heroSection}>
          <View style={styles.heroLeft}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Knowledge Base</Text>
            </View>
            <Text style={styles.heroTitle}>How can we help you today?</Text>
            <Text style={styles.heroSubtitle}>Find technical support, instructional videos, and school-wide coordination guides to streamline your sustainability journey.</Text>
            <View style={styles.searchWrapper}>
              <Icon name="search" size={20} color="#6c7a71" style={styles.searchIcon} />
              <TextInput style={styles.searchInput} placeholder="Search for troubleshooting guides, tutorials..." placeholderTextColor="#6c7a71" />
            </View>
          </View>
          <View style={styles.heroRight}>
             <View style={styles.topSupportCard}>
               <Icon name="live-help" size={48} color="#005ac2" />
               <Text style={styles.topSupportTitle}>Top Coordinators are online</Text>
               <Text style={styles.topSupportSub}>Average response time: 4 mins</Text>
             </View>
          </View>
        </View>

        <View style={styles.mainGrid}>
          {/* Left Column */}
          <View style={styles.leftCol}>
            {/* FAQ */}
            <View style={styles.faqCard}>
              <View style={styles.faqHeader}>
                <Icon name="quiz" size={24} color="#006c49" />
                <Text style={styles.faqTitle}>Frequently Asked Questions</Text>
              </View>
              <View style={styles.faqList}>
                {faqs.map((faq, index) => (
                  <TouchableOpacity key={index} style={styles.faqItem} onPress={() => setActiveFaq(activeFaq === index ? null : index)}>
                    <View style={styles.faqQuestionRow}>
                      <Text style={[styles.faqQuestion, activeFaq === index && styles.faqQuestionActive]}>{faq.question}</Text>
                      <Icon name={activeFaq === index ? "expand-less" : "expand-more"} size={24} color={activeFaq === index ? "#006c49" : "#6c7a71"} />
                    </View>
                    {activeFaq === index && (
                      <Text style={styles.faqAnswer}>{faq.answer}</Text>
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Troubleshooting Guides */}
            <View style={styles.guidesGrid}>
              <TouchableOpacity style={styles.guideCard}>
                <View style={[styles.guideIconWrapper, { backgroundColor: 'rgba(255,218,214,0.5)' }]}>
                  <Icon name="router" size={24} color="#ba1a1a" />
                </View>
                <Text style={styles.guideTitle}>Hardware Setup</Text>
                <Text style={styles.guideDesc}>Resolving connectivity issues with your school's IoT environmental sensors.</Text>
                <View style={styles.guideLink}>
                  <Text style={styles.guideLinkText}>READ GUIDE</Text>
                  <Icon name="arrow-forward" size={16} color="#006c49" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.guideCard}>
                <View style={[styles.guideIconWrapper, { backgroundColor: 'rgba(109,245,225,0.5)' }]}>
                  <Icon name="storage" size={24} color="#006b5f" />
                </View>
                <Text style={styles.guideTitle}>Data Portability</Text>
                <Text style={styles.guideDesc}>Exporting yearly impact reports for school board presentations.</Text>
                <View style={styles.guideLink}>
                  <Text style={styles.guideLinkText}>READ GUIDE</Text>
                  <Icon name="arrow-forward" size={16} color="#006c49" />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Right Column */}
          <View style={styles.rightCol}>
            {/* Contact Card */}
            <View style={styles.contactCard}>
              <Text style={styles.contactTitle}>Still need help?</Text>
              <Text style={styles.contactDesc}>Our specialist support team is available 24/7 to assist with technical deployments and curriculum integration.</Text>
              <TouchableOpacity style={styles.chatBtn}>
                <LinearGradient colors={['#10b981', '#006c49']} style={styles.chatGradient}>
                  <Icon name="chat" size={20} color="#fff" />
                  <Text style={styles.chatBtnText}>Start Live Chat</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={styles.emailBtn}>
                <Icon name="mail" size={20} color="#002113" />
                <Text style={styles.emailBtnText}>Email Support</Text>
              </TouchableOpacity>
            </View>

            {/* Resources */}
            <View style={styles.resourcesCard}>
              <Text style={styles.resourcesLabel}>USEFUL RESOURCES</Text>
              <View style={styles.resourceList}>
                {[
                  { icon: 'description', text: 'Coordination PDF Handbook' },
                  { icon: 'policy', text: 'Privacy & Data Policy' },
                  { icon: 'forum', text: 'Coordinators Forum' },
                ].map((res, i) => (
                  <TouchableOpacity key={i} style={styles.resourceItem}>
                    <View style={styles.resourceIconWrapper}>
                      <Icon name={res.icon} size={20} color="#3c4a42" />
                    </View>
                    <Text style={styles.resourceText}>{res.text}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>

        {/* Tutorials */}
        <View style={styles.tutorialsSection}>
          <View style={styles.tutorialsHeader}>
            <View>
              <Text style={styles.tutorialsTitle}>Tutorial Library</Text>
              <Text style={styles.tutorialsSubtitle}>Step-by-step video guides for the modern Eco-School coordinator.</Text>
            </View>
            <TouchableOpacity style={styles.viewAllBtn}>
              <Text style={styles.viewAllText}>View all videos</Text>
              <Icon name="open-in-new" size={16} color="#006c49" />
            </TouchableOpacity>
          </View>

          <View style={styles.tutorialsGrid}>
            {[
              { title: 'Onboarding: First 30 Days', desc: 'Learn the essential workflows to get your school certified in record time.', time: '12:45', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPXyxDkTrKldixLaoUh6c3Dywb8WzmZaRyG8g_uKcysF-3AJ1KtxMiE7CFrgcPBoNgVcR0GADqQHZjEVKHR0qUPAIwN_9L5o91VA4kIzE-oH6oSAPlnD0sj8esgWAOn29QstSzKIHx0rIJ0oXo08lQUelpt2VLBhawkutdASchry-UZO2svv8DzhVREFUzEAosMoO9YItfZ878jAzABOGrrkGGvaY1oTI-3jZikKATrlwEwaP4clta9WHf6OAqaktXQAbfAuLMtHQM', theme: 'primary' },
              { title: 'Gamification Strategies', desc: 'Boost student participation using XP, badges, and physics-based leaderboard effects.', time: '08:12', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHCMpWE-fz4LVWPImbHR_M9OaakWVmizR2XA24gysVwjBsdXUIV0S6lSVKeeoqKOtWJFLv1m-9GmbNEcIuc60PVlCQB-azY50yJq-Xde0IASV8ZFcLHthNagh7RhF8b8BjH1OJjwq0DAwvQqccHsCTFh3Ny3ecMbvpuOmJoEIH4A_cLPL2bvPSuhH3CDJ1aiEkgFr7D_1GC8VcUzYznn67i1F7oVShZBVMzSTigUhV4o4MlaumDwCJv0XZb84nSTZqsD4b4lMUJVZ8', theme: 'secondary' },
              { title: 'Advanced Impact Analysis', desc: 'Dive deep into your school\'s data lake to identify hidden energy-saving opportunities.', time: '15:30', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjfJCS6RCJWR9Kl87jsNkkMEfAeVvdnaPmKO35UsKrsFzjuCtO0inZf8Pgfu4O_685-Zk0gl3oeA4NimJQ93GM3CW7W8UaO3SZRiPvAOJVJal4ot-71VZ0HMTK1MvkDVSWNR4thhv2J_vJ0iYZotJJ_GJNxHaKJ51fyFqouAtLvvvs4XYU60a55n4-XQd3_jGLliSxTgOQ7ot2J8BRfCGGN00zOrnos4uqcm0TjCL_Aixm1al5-jsSjCrzgPnwCEqju4PBvS2vRDDA', theme: 'tertiary' },
            ].map((tut, i) => (
              <TouchableOpacity key={i} style={styles.tutorialCard}>
                <View style={styles.tutorialImageWrapper}>
                  <Image source={{uri: tut.img}} style={styles.tutorialImage} />
                  <View style={styles.playOverlay}>
                    <View style={styles.playBtn}>
                      <Icon name="play-arrow" size={32} color={tut.theme === 'primary' ? '#006c49' : tut.theme === 'secondary' ? '#006b5f' : '#005ac2'} />
                    </View>
                  </View>
                  <View style={styles.timeBadge}>
                    <Text style={styles.timeBadgeText}>{tut.time}</Text>
                  </View>
                </View>
                <Text style={styles.tutorialTitle}>{tut.title}</Text>
                <Text style={styles.tutorialDesc}>{tut.desc}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, backgroundColor: 'rgba(248, 249, 250, 0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187, 202, 191, 0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49', letterSpacing: -0.5 },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  iconBtn: { padding: 8 },
  avatarWrapper: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#6df5e1', alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontSize: 16, fontWeight: '700', color: '#00367a' },
  scrollContent: { padding: 24, paddingBottom: 100 },
  heroSection: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 40, marginBottom: 40 },
  heroLeft: { flex: 1, minWidth: 300 },
  badge: { alignSelf: 'flex-start', backgroundColor: 'rgba(16,185,129,0.1)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16, marginBottom: 12 },
  badgeText: { fontSize: 12, fontWeight: '700', color: '#006c49', textTransform: 'uppercase' },
  heroTitle: { fontSize: 48, fontWeight: '800', color: '#191c1d', marginBottom: 16 },
  heroSubtitle: { fontSize: 18, color: '#3c4a42', marginBottom: 32 },
  searchWrapper: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f3f4f5', borderRadius: 8, paddingHorizontal: 16, height: 56, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4 },
  searchIcon: { marginRight: 12 },
  searchInput: { flex: 1, fontSize: 16, color: '#191c1d' },
  heroRight: { display: 'none' }, // simplified for react native
  topSupportCard: { backgroundColor: 'rgba(255,255,255,0.7)', padding: 32, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  topSupportTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginTop: 16 },
  topSupportSub: { fontSize: 16, color: '#3c4a42', marginTop: 4 },
  mainGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, marginBottom: 40 },
  leftCol: { flex: 2, minWidth: 300, gap: 24 },
  faqCard: { backgroundColor: '#fff', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)' },
  faqHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 24 },
  faqTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  faqList: { gap: 16 },
  faqItem: { borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)', paddingBottom: 16 },
  faqQuestionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  faqQuestion: { fontSize: 18, fontWeight: '600', color: '#191c1d', flex: 1 },
  faqQuestionActive: { color: '#006c49' },
  faqAnswer: { fontSize: 16, color: '#3c4a42', marginTop: 12 },
  guidesGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24 },
  guideCard: { flex: 1, minWidth: 200, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  guideIconWrapper: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  guideTitle: { fontSize: 18, fontWeight: '700', color: '#191c1d', marginBottom: 8 },
  guideDesc: { fontSize: 16, color: '#3c4a42', marginBottom: 16 },
  guideLink: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  guideLinkText: { fontSize: 12, fontWeight: '700', color: '#006c49', textTransform: 'uppercase' },
  rightCol: { flex: 1, minWidth: 250, gap: 24 },
  contactCard: { backgroundColor: '#6ffbbe', borderRadius: 16, padding: 24, elevation: 4 },
  contactTitle: { fontSize: 24, fontWeight: '600', color: '#002113', marginBottom: 12 },
  contactDesc: { fontSize: 16, color: '#005236', marginBottom: 24 },
  chatBtn: { borderRadius: 8, overflow: 'hidden', marginBottom: 12 },
  chatGradient: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12, paddingVertical: 12 },
  chatBtnText: { fontSize: 16, fontWeight: '700', color: '#fff' },
  emailBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12, paddingVertical: 12, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 8 },
  emailBtnText: { fontSize: 16, fontWeight: '700', color: '#002113' },
  resourcesCard: { backgroundColor: '#e7e8e9', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)' },
  resourcesLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', marginBottom: 16 },
  resourceList: { gap: 16 },
  resourceItem: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  resourceIconWrapper: { width: 40, height: 40, borderRadius: 8, backgroundColor: '#e1e3e4', alignItems: 'center', justifyContent: 'center' },
  resourceText: { fontSize: 16, fontWeight: '600', color: '#191c1d' },
  tutorialsSection: { marginTop: 40 },
  tutorialsHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 24 },
  tutorialsTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d' },
  tutorialsSubtitle: { fontSize: 18, color: '#3c4a42' },
  viewAllBtn: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  viewAllText: { fontSize: 16, fontWeight: '700', color: '#006c49' },
  tutorialsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24 },
  tutorialCard: { flex: 1, minWidth: 250 },
  tutorialImageWrapper: { aspectRatio: 16/9, borderRadius: 8, overflow: 'hidden', marginBottom: 12 },
  tutorialImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  playOverlay: { ...StyleSheet.absoluteFill as any, backgroundColor: 'rgba(0,0,0,0.1)', alignItems: 'center', justifyContent: 'center' },
  playBtn: { width: 64, height: 64, borderRadius: 32, backgroundColor: 'rgba(255,255,255,0.9)', alignItems: 'center', justifyContent: 'center' },
  timeBadge: { position: 'absolute', bottom: 8, right: 8, backgroundColor: 'rgba(0,0,0,0.6)', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  timeBadgeText: { fontSize: 12, fontWeight: '700', color: '#fff' },
  tutorialTitle: { fontSize: 18, fontWeight: '700', color: '#191c1d', marginBottom: 4 },
  tutorialDesc: { fontSize: 16, color: '#3c4a42' },
});
