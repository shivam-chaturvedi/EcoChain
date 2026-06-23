import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Svg, { Circle } from 'react-native-svg';

export default function ClassroomAnalyticsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.logoText}>ChonX</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn}><Icon name="notifications" size={24} color="#006c49" /></TouchableOpacity>
          <View style={styles.avatar}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzJWquaOfH637Kh384V8YHh9kcRccl_BvAzIer0rPgFC_BF98DPGq21zx9h1ur5zvLPIjATKsEvot4l3Zd6hTCRqSmpeyzyvndDazgV1uvt7IxkhOJahL_LsDCk4W_l0UweFoPfQkOF1Og-1giO4CXzrvweUaJQuVS0FekMR5uKEu-Ue22EgmxWT9FzZGwEm3a-MEp53AArX7-QHS_Q_i6c2-oCs5sk0qf40o23M1JiL6F3JpAyC1PmVhAOO2NQEqWeNDfXK9OXfKN' }}
              style={styles.avatarImg}
            />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Dashboard Header */}
        <View style={styles.dashboardHeader}>
          <View style={styles.dhLeft}>
            <Text style={styles.dhTitle}>Teacher Dashboard</Text>
            <Text style={styles.dhSubtitle}>Class 10-A • Sustainable Engineering</Text>
          </View>
          <View style={styles.dhRight}>
            <TouchableOpacity style={styles.filterBtn}>
              <Icon name="calendar-today" size={20} color="#191c1d" />
              <Text style={styles.filterBtnText}>LAST 30 DAYS</Text>
              <Icon name="expand-more" size={18} color="#191c1d" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterBtn}>
              <Icon name="groups" size={20} color="#191c1d" />
              <Text style={styles.filterBtnText}>CLASS 10-A</Text>
              <Icon name="expand-more" size={18} color="#191c1d" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.exportBtn}>
              <Icon name="ios-share" size={20} color="#ffffff" />
              <Text style={styles.exportBtnText}>EXPORT</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categoriesRow}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={[styles.catBtn, styles.catBtnActive]}><Text style={[styles.catBtnText, styles.catBtnTextActive]}>ALL INSIGHTS</Text></TouchableOpacity>
            <TouchableOpacity style={styles.catBtn}><Text style={styles.catBtnText}>CARBON FOOTPRINT</Text></TouchableOpacity>
            <TouchableOpacity style={styles.catBtn}><Text style={styles.catBtnText}>ENGAGEMENT</Text></TouchableOpacity>
            <TouchableOpacity style={styles.catBtn}><Text style={styles.catBtnText}>PEER COMPETITION</Text></TouchableOpacity>
            <TouchableOpacity style={styles.catBtn}><Text style={styles.catBtnText}>CURRICULUM LINKS</Text></TouchableOpacity>
          </ScrollView>
        </View>

        {/* Key Metrics Grid */}
        <View style={styles.metricsGrid}>
          <View style={styles.metricCard}>
            <View style={styles.metricHeader}>
              <View style={[styles.metricIconWrap, { backgroundColor: 'rgba(16,185,129,0.2)' }]}><Icon name="eco" size={20} color="#006c49" /></View>
              <Text style={[styles.metricTrend, { color: '#006c49' }]}>+12%</Text>
            </View>
            <Text style={styles.metricLabel}>CO2 REDUCED</Text>
            <Text style={styles.metricValue}>1,240 <Text style={styles.metricUnit}>kg</Text></Text>
          </View>
          <View style={styles.metricCard}>
            <View style={styles.metricHeader}>
              <View style={[styles.metricIconWrap, { backgroundColor: 'rgba(0,90,194,0.2)' }]}><Icon name="monitoring" size={20} color="#005ac2" /></View>
              <Text style={[styles.metricTrend, { color: '#005ac2' }]}>94%</Text>
            </View>
            <Text style={styles.metricLabel}>PARTICIPATION</Text>
            <Text style={styles.metricValue}>28/30 <Text style={styles.metricUnit}>Students</Text></Text>
          </View>
          <View style={[styles.metricCard, { borderLeftWidth: 4, borderLeftColor: '#006b5f' }]}>
            <View style={styles.metricHeader}>
              <View style={[styles.metricIconWrap, { backgroundColor: 'rgba(109,245,225,0.2)' }]}><Icon name="bolt" size={20} color="#006b5f" /></View>
              <Text style={[styles.metricTrend, { color: '#006b5f' }]}>8.4</Text>
            </View>
            <Text style={styles.metricLabel}>XP VELOCITY</Text>
            <Text style={styles.metricValue}>14.2k <Text style={styles.metricUnit}>Daily</Text></Text>
          </View>
          <View style={styles.metricCard}>
            <View style={styles.metricHeader}>
              <View style={[styles.metricIconWrap, { backgroundColor: 'rgba(186,26,26,0.2)' }]}><Icon name="emoji-events" size={20} color="#ba1a1a" /></View>
              <Text style={[styles.metricTrend, { color: '#ba1a1a' }]}>#2</Text>
            </View>
            <Text style={styles.metricLabel}>SCHOOL RANK</Text>
            <Text style={styles.metricValue}>Gold <Text style={styles.metricUnit}>Tier</Text></Text>
          </View>
        </View>

        {/* Charts Section */}
        <View style={styles.chartsSection}>
          <View style={styles.chartMain}>
            <View style={styles.chartMainHeader}>
              <View>
                <Text style={styles.cmTitle}>Reduction Trends</Text>
                <Text style={styles.cmSubtitle}>Comparing this month to previous 30 days</Text>
              </View>
              <View style={styles.cmLegend}>
                <View style={styles.legendDot} /><Text style={styles.legendText}>Current</Text>
                <View style={[styles.legendDot, { backgroundColor: '#bbcabf' }]} /><Text style={styles.legendText}>Target</Text>
              </View>
            </View>
            <View style={styles.barsContainer}>
              <View style={styles.barGroup}>
                <View style={[styles.chartBar, { height: '40%', backgroundColor: '#e7e8e9' }]} />
                <View style={[styles.chartBar, { height: '60%', backgroundColor: '#e7e8e9' }]} />
                <View style={[styles.chartBar, { height: '85%', backgroundColor: '#006c49' }]} />
              </View>
              <View style={styles.barGroup}>
                <View style={[styles.chartBar, { height: '55%', backgroundColor: '#e7e8e9' }]} />
                <View style={[styles.chartBar, { height: '70%', backgroundColor: '#e7e8e9' }]} />
                <View style={[styles.chartBar, { height: '95%', backgroundColor: '#006c49' }]} />
              </View>
              <View style={styles.barGroup}>
                <View style={[styles.chartBar, { height: '45%', backgroundColor: '#e7e8e9' }]} />
                <View style={[styles.chartBar, { height: '30%', backgroundColor: '#e7e8e9' }]} />
                <View style={[styles.chartBar, { height: '80%', backgroundColor: '#006c49' }]} />
              </View>
              <View style={styles.barGroup}>
                <View style={[styles.chartBar, { height: '60%', backgroundColor: '#e7e8e9' }]} />
              </View>
            </View>
            <View style={styles.xLabels}>
              <Text style={styles.xLabel}>Week 1</Text>
              <Text style={styles.xLabel}>Week 2</Text>
              <Text style={styles.xLabel}>Week 3</Text>
              <Text style={styles.xLabel}>Week 4</Text>
            </View>
          </View>

          <View style={styles.chartSide}>
            <Text style={styles.csTitle}>Task Completion</Text>
            <View style={styles.ringWrap}>
              <Svg width="160" height="160" viewBox="0 0 160 160" style={{ transform: [{ rotate: '-90deg' }] }}>
                <Circle cx="80" cy="80" r="70" stroke="#e7e8e9" strokeWidth="12" fill="transparent" />
                <Circle cx="80" cy="80" r="70" stroke="#006c49" strokeWidth="12" strokeDasharray="440" strokeDashoffset="50" strokeLinecap="round" fill="transparent" />
              </Svg>
              <View style={styles.ringCenter}>
                <Text style={styles.ringVal}>88%</Text>
                <Text style={styles.ringLabel}>ACTIVE</Text>
              </View>
            </View>
            <View style={styles.csLegend}>
              <View style={styles.csLegendRow}>
                <View style={styles.csLegendLeft}><View style={[styles.csDot, { backgroundColor: '#006c49' }]} /><Text style={styles.csLegendText}>Completed</Text></View>
                <Text style={styles.csLegendVal}>212 Tasks</Text>
              </View>
              <View style={styles.csLegendRow}>
                <View style={styles.csLegendLeft}><View style={[styles.csDot, { backgroundColor: '#e7e8e9' }]} /><Text style={styles.csLegendText}>Pending</Text></View>
                <Text style={styles.csLegendVal}>28 Tasks</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Student Insights & Actions */}
        <View style={styles.bottomSection}>
          <View style={styles.leaderboardSection}>
            <View style={styles.lsHeader}>
              <Text style={styles.lsTitle}>Class Leaderboard</Text>
              <TouchableOpacity><Text style={styles.lsLink}>View All Students</Text></TouchableOpacity>
            </View>
            <View style={styles.lsTable}>
              <View style={styles.lsThRow}>
                <Text style={[styles.lsTh, { flex: 2 }]}>Student</Text>
                <Text style={[styles.lsTh, { flex: 1.5 }]}>Status</Text>
                <Text style={[styles.lsTh, { flex: 1 }]}>Carbon (kg)</Text>
                <Text style={[styles.lsTh, { flex: 1 }]}>XP</Text>
                <Text style={[styles.lsTh, { width: 40 }]}></Text>
              </View>

              <View style={styles.lsTr}>
                <View style={[styles.lsTd, { flex: 2, flexDirection: 'row', alignItems: 'center', gap: 8 }]}>
                  <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPYiCML6iR-l3J0MK0eMnVSb-RT1Li7WRKJobu6CBnuzSk4S-_BrmrXFK01W1F05qQYYoW7ONARo20tnhHWmdP9KCEVqaLht-CPHrfRkBx0NbrLn3d3IPswDX8s2Tl7DqPnN75kDk1JYgB43LGIqtGZhNPwttulIay9EsODxwnjxaaiqxbbtyWbGL1hgU3O7R0xQKuHVLb_huuD6C6LnUihLa7gqOeItkmwRLN-5X3uLd4NAoY9M9RqbO5I7UrWwmtKMwH5wngTh9o' }} style={styles.lsAvatar} />
                  <View>
                    <Text style={styles.lsName}>Alex Johnson</Text>
                    <Text style={styles.lsLevel}>PIONEER LEVEL</Text>
                  </View>
                </View>
                <View style={[styles.lsTd, { flex: 1.5 }]}>
                  <View style={styles.lsStatusBadge}><Text style={styles.lsStatusText}>STREAK: 12d</Text></View>
                </View>
                <Text style={[styles.lsTd, { flex: 1, fontSize: 18, fontWeight: '700' }]}>42.5</Text>
                <Text style={[styles.lsTd, { flex: 1, color: '#006c49', fontWeight: 'bold' }]}>12,400</Text>
                <View style={[styles.lsTd, { width: 40 }]}><Icon name="trending-up" size={20} color="#006c49" /></View>
              </View>

              <View style={styles.lsTr}>
                <View style={[styles.lsTd, { flex: 2, flexDirection: 'row', alignItems: 'center', gap: 8 }]}>
                  <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf50rcHk1byR63fiQQc6_EfkLicAg2HiAtbYjWXi2TffdENpkUggMaTBlRysul6_xHaStXSwVLLUdQN0sjJ8_jdupFXD6Hk2wZOD9zq8agOVysTqsxXq6_2_UVABImWgocbK36PoW-PgWBV_e37yBDfPBjZWDFORJx7Cky3pEHXIpSQ-pbCkChXGFnHK8cQSnWmWYHX3j1eO-VCUR2A9SHMJ-Yct-LeR1iSEF039YmhxpWk6nIqaY1xx9pLvwRcg0hTc76w7DoCuwU' }} style={styles.lsAvatar} />
                  <View>
                    <Text style={styles.lsName}>Beatrix Wang</Text>
                    <Text style={styles.lsLevel}>ECO WARRIOR</Text>
                  </View>
                </View>
                <View style={[styles.lsTd, { flex: 1.5 }]}>
                  <View style={styles.lsStatusBadge}><Text style={styles.lsStatusText}>STREAK: 8d</Text></View>
                </View>
                <Text style={[styles.lsTd, { flex: 1, fontSize: 18, fontWeight: '700' }]}>38.2</Text>
                <Text style={[styles.lsTd, { flex: 1, color: '#006c49', fontWeight: 'bold' }]}>10,150</Text>
                <View style={[styles.lsTd, { width: 40 }]}><Icon name="trending-up" size={20} color="#006c49" /></View>
              </View>

              <View style={styles.lsTr}>
                <View style={[styles.lsTd, { flex: 2, flexDirection: 'row', alignItems: 'center', gap: 8 }]}>
                  <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATEygXQEMSCHm2WvfDCL7Jr_jQWJm3rheLk4My1AhUSblju5LH4PDTuFrhkB0Jd5hwICwQQhLyC4wq8A53in8aUqIpTySf-kQOQZPSLYikPHS-DYML2zmH2I5BGWm3bNQKQ3QqW_yaQIlHuVJ-UkBe9ZPOoyNmmcnspYEIYJl00as8-c_FeODsOQr1OC-Pb_15wlAhGqkNwJtwxeVVE9fEcRu2G2mQ2WApgt9JsUkF0z38z1HjX_AWtJAiBtVIDGKxfvLoFr8OYyhV' }} style={styles.lsAvatar} />
                  <View>
                    <Text style={styles.lsName}>Charlie Davis</Text>
                    <Text style={styles.lsLevel}>GRADUATE</Text>
                  </View>
                </View>
                <View style={[styles.lsTd, { flex: 1.5 }]}>
                  <View style={[styles.lsStatusBadge, { backgroundColor: 'rgba(113,161,255,0.2)' }]}><Text style={[styles.lsStatusText, { color: '#00367a' }]}>AWARDED: MVP</Text></View>
                </View>
                <Text style={[styles.lsTd, { flex: 1, fontSize: 18, fontWeight: '700' }]}>36.9</Text>
                <Text style={[styles.lsTd, { flex: 1, color: '#006c49', fontWeight: 'bold' }]}>9,800</Text>
                <View style={[styles.lsTd, { width: 40 }]}><Icon name="trending-flat" size={20} color="#006b5f" /></View>
              </View>
            </View>
          </View>

          <View style={styles.actionsSection}>
            <View style={styles.targetCard}>
              <Text style={styles.tcTitle}>Class Target</Text>
              <Text style={styles.tcDesc}>Reduce school bus usage by 20% this quarter.</Text>
              <View style={styles.tcProgressWrap}>
                <View style={styles.tcProgressTop}>
                  <Text style={styles.tcProgressLabel}>PROGRESS</Text>
                  <Text style={styles.tcProgressVal}>65%</Text>
                </View>
                <View style={styles.tcProgressBg}>
                  <View style={[styles.tcProgressFill, { width: '65%' }]} />
                </View>
              </View>
              <TouchableOpacity style={styles.tcBtn}>
                <Text style={styles.tcBtnText}>SET NEW GOAL</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.insightCard}>
              <View style={styles.icHeader}>
                <Icon name="psychology" size={20} color="#005ac2" />
                <Text style={styles.icLabel}>AI INSIGHT</Text>
              </View>
              <Text style={styles.icText}>Participation drops on Wednesdays. Consider a "Mid-week Green Challenge" to boost activity.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, height: 64, backgroundColor: 'rgba(248,249,250,0.8)', borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#006c49' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  iconBtn: { padding: 8 },
  avatar: { width: 40, height: 40, borderRadius: 20, overflow: 'hidden', backgroundColor: '#10b981' },
  avatarImg: { width: '100%', height: '100%' },
  scrollContent: { paddingHorizontal: 24, paddingTop: 32, paddingBottom: 100 },
  
  dashboardHeader: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, marginBottom: 32 },
  dhLeft: {},
  dhTitle: { fontSize: 32, fontWeight: '700', color: '#191c1d' },
  dhSubtitle: { fontSize: 18, color: '#3c4a42', marginTop: 4 },
  dhRight: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  filterBtn: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: '#f3f4f5', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 24, borderWidth: 1, borderColor: 'rgba(187,202,191,0.3)' },
  filterBtnText: { fontSize: 12, fontWeight: '700', color: '#191c1d' },
  exportBtn: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: '#006c49', paddingHorizontal: 24, paddingVertical: 10, borderRadius: 24, shadowColor: '#006c49', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8 },
  exportBtnText: { fontSize: 12, fontWeight: '700', color: '#ffffff' },

  categoriesRow: { marginBottom: 32 },
  catBtn: { backgroundColor: '#e7e8e9', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 24, marginRight: 8 },
  catBtnActive: { backgroundColor: '#10b981' },
  catBtnText: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  catBtnTextActive: { color: '#002113' },

  metricsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, marginBottom: 32 },
  metricCard: { flex: 1, minWidth: 200, backgroundColor: 'rgba(255,255,255,0.7)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  metricHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  metricIconWrap: { padding: 8, borderRadius: 16 },
  metricTrend: { fontSize: 12, fontWeight: '700' },
  metricLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42', opacity: 0.7, marginBottom: 4 },
  metricValue: { fontSize: 28, fontWeight: '700', color: '#191c1d' },
  metricUnit: { fontSize: 16, fontWeight: '400' },

  chartsSection: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, marginBottom: 32 },
  chartMain: { flex: 2, minWidth: 300, backgroundColor: 'rgba(255,255,255,0.7)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  chartMainHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 },
  cmTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  cmSubtitle: { fontSize: 16, color: '#3c4a42' },
  cmLegend: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: '#f3f4f5', paddingHorizontal: 16, paddingVertical: 6, borderRadius: 24, borderWidth: 1, borderColor: 'rgba(187,202,191,0.2)' },
  legendDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#006c49' },
  legendText: { fontSize: 12, fontWeight: '700', color: '#191c1d' },
  barsContainer: { height: 256, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 },
  barGroup: { flex: 1, flexDirection: 'row', alignItems: 'flex-end', height: '100%', gap: 4 },
  chartBar: { flex: 1, borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  xLabels: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 },
  xLabel: { fontSize: 12, fontWeight: '700', color: 'rgba(60,74,66,0.5)', textTransform: 'uppercase' },

  chartSide: { flex: 1, minWidth: 250, backgroundColor: 'rgba(255,255,255,0.7)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', alignItems: 'center' },
  csTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 32, alignSelf: 'flex-start' },
  ringWrap: { width: 160, height: 160, position: 'relative', marginBottom: 32 },
  ringCenter: { position: 'absolute', inset: 0, alignItems: 'center', justifyContent: 'center' },
  ringVal: { fontSize: 48, fontWeight: '800', color: '#191c1d' },
  ringLabel: { fontSize: 12, fontWeight: '700', color: '#3c4a42' },
  csLegend: { width: '100%', gap: 12 },
  csLegendRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  csLegendLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  csDot: { width: 12, height: 12, borderRadius: 6 },
  csLegendText: { fontSize: 16, color: '#191c1d' },
  csLegendVal: { fontSize: 16, fontWeight: '700', color: '#191c1d' },

  bottomSection: { flexDirection: 'row', flexWrap: 'wrap', gap: 24 },
  leaderboardSection: { flex: 3, minWidth: 300, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)', overflow: 'hidden' },
  lsHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 24, borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.2)' },
  lsTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d' },
  lsLink: { fontSize: 12, fontWeight: '700', color: '#006c49' },
  lsTable: {},
  lsThRow: { flexDirection: 'row', paddingHorizontal: 24, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.1)' },
  lsTh: { fontSize: 12, fontWeight: '700', color: 'rgba(60,74,66,0.7)', textTransform: 'uppercase' },
  lsTr: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: 'rgba(187,202,191,0.1)' },
  lsTd: {},
  lsAvatar: { width: 40, height: 40, borderRadius: 20 },
  lsName: { fontWeight: '700', color: '#191c1d' },
  lsLevel: { fontSize: 10, color: '#3c4a42', textTransform: 'uppercase', letterSpacing: 1, marginTop: 2 },
  lsStatusBadge: { backgroundColor: 'rgba(16,185,129,0.2)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16, alignSelf: 'flex-start' },
  lsStatusText: { fontSize: 10, fontWeight: '700', color: '#002113' },

  actionsSection: { flex: 1, minWidth: 250, gap: 24 },
  targetCard: { backgroundColor: 'rgba(255,255,255,0.7)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(229,231,235,0.5)' },
  tcTitle: { fontSize: 24, fontWeight: '600', color: '#191c1d', marginBottom: 8 },
  tcDesc: { fontSize: 16, color: '#3c4a42', marginBottom: 24 },
  tcProgressWrap: { marginBottom: 24 },
  tcProgressTop: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  tcProgressLabel: { fontSize: 12, fontWeight: '700', color: '#191c1d' },
  tcProgressVal: { fontSize: 12, fontWeight: '700', color: '#191c1d' },
  tcProgressBg: { height: 8, backgroundColor: '#e7e8e9', borderRadius: 4, overflow: 'hidden' },
  tcProgressFill: { height: '100%', backgroundColor: '#006c49', borderRadius: 4 },
  tcBtn: { backgroundColor: '#191c1d', paddingVertical: 12, borderRadius: 12, alignItems: 'center' },
  tcBtnText: { fontSize: 12, fontWeight: '700', color: '#ffffff' },

  insightCard: { backgroundColor: 'rgba(0,90,194,0.1)', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(0,90,194,0.2)' },
  icHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  icLabel: { fontSize: 12, fontWeight: '700', color: '#005ac2' },
  icText: { fontSize: 16, color: '#191c1d' },
});
