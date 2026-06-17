import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import IntroCarouselScreen from '../features/onboarding/screens/IntroCarouselScreen';
import LoginScreen from '../features/auth/screens/LoginScreen';
import LocationSelectionScreen from '../features/onboarding/screens/LocationSelectionScreen';
import RoleSelectionScreen from '../features/auth/screens/RoleSelectionScreen';
import SchoolRegistrationScreen from '../features/school/screens/SchoolRegistrationScreen';
import AdminProfileSetupScreen from '../features/school/screens/AdminProfileSetupScreen';
import SchoolCodeGenerationScreen from '../features/school/screens/SchoolCodeGenerationScreen';
import StudentStructureScreen from '../features/school/screens/StudentStructureScreen';
import SustainabilityGoalsScreen from '../features/school/screens/SustainabilityGoalsScreen';
import OnboardingCompleteScreen from '../features/school/screens/OnboardingCompleteScreen';
import AcademyOverviewScreen from '../features/school/screens/AcademyOverviewScreen';
import SchoolAnalyticsScreen from '../features/school/screens/SchoolAnalyticsScreen';
import SchoolCodeManagementScreen from '../features/school/screens/SchoolCodeManagementScreen';
import NotificationCenterScreen from '../features/school/screens/NotificationCenterScreen';
import SchoolSettingsProfileScreen from '../features/school/screens/SchoolSettingsProfileScreen';
import FacultyOverviewScreen from '../features/school/screens/FacultyOverviewScreen';
import StudentsOverviewScreen from '../features/school/screens/StudentsOverviewScreen';
import ClassroomManagementScreen from '../features/school/screens/ClassroomManagementScreen';
import PersonalIdentityScreen from '../features/onboarding/screens/PersonalIdentityScreen';
import SchoolCodeScreen from '../features/auth/screens/SchoolCodeScreen';
import InterestsSelectionScreen from '../features/onboarding/screens/InterestsSelectionScreen';
import AvatarSelectionScreen from '../features/onboarding/screens/AvatarSelectionScreen';
import SetPreferencesScreen from '../features/onboarding/screens/SetPreferencesScreen';
import CommuteScreen from '../features/carbonCalculator/screens/CommuteScreen';
import CarbonFootprintResultScreen from '../features/carbonCalculator/screens/CarbonFootprintResultScreen';
import StudentHomeScreen from '../features/student/screens/StudentHomeScreen';
import StudentCalendarScreen from '../features/student/screens/StudentCalendarScreen';
import ArenaHubScreen from '../features/hub/screens/ArenaHubScreen';
import ArenaChallengesScreen from '../features/hub/screens/ArenaChallengesScreen';
import ChallengeDetailScreen from '../features/hub/screens/ChallengeDetailScreen';
import CampaignDetailScreen from '../features/hub/screens/CampaignDetailScreen';
import CampaignsScreen from '../features/hub/screens/CampaignsScreen';
import ImpactHubScreen from '../features/impactHub/screens/ImpactHubScreen';
import ActivityFeedScreen from '../features/impactHub/screens/ActivityFeedScreen';
import LogActivityScreen from '../features/student/screens/LogActivityScreen';
import ActivityFormScreen from '../features/student/screens/ActivityFormScreen';
import ActivitySubmittedScreen from '../features/student/screens/ActivitySubmittedScreen';
import LeaderboardScreen from '../features/hub/screens/LeaderboardScreen';
import SettingsScreen from '../features/student/screens/SettingsScreen';
import EcoWalletScreen from '../features/impactHub/screens/EcoWalletScreen';
import StudentProfileScreen from '../features/student/screens/StudentProfileScreen';
import EcoBotScreen from '../features/student/screens/EcoBotScreen';
import TeacherLandingScreen from '../features/teacher/screens/TeacherLandingScreen';
import TeacherPersonalInfoScreen from '../features/teacher/screens/TeacherPersonalInfoScreen';
import TeacherClassSelectionScreen from '../features/teacher/screens/TeacherClassSelectionScreen';
import TeacherNotificationsScreen from '../features/teacher/screens/TeacherNotificationsScreen';
import TeacherFeatureTourScreen from '../features/teacher/screens/TeacherFeatureTourScreen';
import TeacherDashboardScreen from '../features/teacher/screens/TeacherDashboardScreen';
import TeacherClassManagerScreen from '../features/teacher/screens/TeacherClassManagerScreen';
import TeacherAnalyticsDashboardScreen from '../features/teacher/screens/TeacherAnalyticsDashboardScreen';
import TeacherCalendarScreen from '../features/teacher/screens/TeacherCalendarScreen';
import TeacherLeaderboardScreen from '../features/teacher/screens/TeacherLeaderboardScreen';
import TeacherStudentRosterScreen from '../features/teacher/screens/TeacherStudentRosterScreen';
import TeacherChallengeArenaScreen from '../features/teacher/screens/TeacherChallengeArenaScreen';
import TeacherCreateChallengeScreen from '../features/teacher/screens/TeacherCreateChallengeScreen';
import TeacherVerificationQueueScreen from '../features/teacher/screens/TeacherVerificationQueueScreen';
import SchoolReviewQueueScreen from '../features/school/screens/SchoolReviewQueueScreen';
import SchoolPendingSubmissionsScreen from '../features/school/screens/SchoolPendingSubmissionsScreen';
import SuperAdminVerificationQueueScreen from '../features/superAdmin/screens/SuperAdminVerificationQueueScreen';
import TeacherSubmissionDetailScreen from '../features/teacher/screens/TeacherSubmissionDetailScreen';
import TeacherCreateAnnouncementScreen from '../features/teacher/screens/TeacherCreateAnnouncementScreen';
import TeacherAnnouncementsManagerScreen from '../features/teacher/screens/TeacherAnnouncementsManagerScreen';
import TeacherProfileScreen from '../features/teacher/screens/TeacherProfileScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="IntroCarousel"
        screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
        <Stack.Screen name="IntroCarousel" component={IntroCarouselScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="LocationSelection" component={LocationSelectionScreen} />
        <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
        <Stack.Screen name="SchoolRegistration" component={SchoolRegistrationScreen} />
        <Stack.Screen name="AdminProfileSetup" component={AdminProfileSetupScreen} />
        <Stack.Screen name="SchoolCodeGeneration" component={SchoolCodeGenerationScreen} />
        <Stack.Screen name="StudentStructure" component={StudentStructureScreen} />
        <Stack.Screen name="SustainabilityGoals" component={SustainabilityGoalsScreen} />
        <Stack.Screen name="OnboardingComplete" component={OnboardingCompleteScreen} />
        <Stack.Screen name="AcademyOverview" component={AcademyOverviewScreen} />
        <Stack.Screen name="SchoolAnalytics" component={SchoolAnalyticsScreen} />
        <Stack.Screen name="SchoolCodeManagement" component={SchoolCodeManagementScreen} />
        <Stack.Screen name="NotificationCenter" component={NotificationCenterScreen} />
        <Stack.Screen name="SchoolSettingsProfile" component={SchoolSettingsProfileScreen} />
        <Stack.Screen name="FacultyOverview" component={FacultyOverviewScreen} />
        <Stack.Screen name="StudentsOverview" component={StudentsOverviewScreen} />
        <Stack.Screen name="ClassroomManagement" component={ClassroomManagementScreen} />
        <Stack.Screen name="PersonalIdentity" component={PersonalIdentityScreen} />
        <Stack.Screen name="SchoolCode" component={SchoolCodeScreen} />
        <Stack.Screen name="InterestsSelection" component={InterestsSelectionScreen} />
        <Stack.Screen name="AvatarSelection" component={AvatarSelectionScreen} />
        <Stack.Screen name="SetPreferences" component={SetPreferencesScreen} />
        <Stack.Screen name="CarbonCommute" component={CommuteScreen} />
        <Stack.Screen name="CarbonFootprintResult" component={CarbonFootprintResultScreen} />
        <Stack.Screen name="StudentHome" component={StudentHomeScreen} />
        <Stack.Screen name="StudentCalendar" component={StudentCalendarScreen} />
        <Stack.Screen name="ArenaHub" component={ArenaHubScreen} />
        <Stack.Screen name="ArenaChallenges" component={ArenaChallengesScreen} />
        <Stack.Screen name="ChallengeDetail" component={ChallengeDetailScreen} />
        <Stack.Screen name="CampaignDetail" component={CampaignDetailScreen} />
        <Stack.Screen name="Campaigns" component={CampaignsScreen} />
        <Stack.Screen name="ImpactHub" component={ImpactHubScreen} />
        <Stack.Screen name="ActivityFeed" component={ActivityFeedScreen} />
        <Stack.Screen name="LogActivity" component={LogActivityScreen} />
        <Stack.Screen name="ActivityForm" component={ActivityFormScreen} />
        <Stack.Screen name="ActivitySubmitted" component={ActivitySubmittedScreen} />
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="EcoWallet" component={EcoWalletScreen} />
        <Stack.Screen name="StudentProfile" component={StudentProfileScreen} />
        <Stack.Screen name="EcoBot" component={EcoBotScreen} />
        <Stack.Screen name="TeacherLanding" component={TeacherLandingScreen} />
        <Stack.Screen name="TeacherPersonalInfo" component={TeacherPersonalInfoScreen} />
        <Stack.Screen name="TeacherClassSelection" component={TeacherClassSelectionScreen} />
        <Stack.Screen name="TeacherNotifications" component={TeacherNotificationsScreen} />
        <Stack.Screen name="TeacherFeatureTour" component={TeacherFeatureTourScreen} />
        <Stack.Screen name="TeacherDashboard" component={TeacherDashboardScreen} />
        <Stack.Screen name="TeacherClassManager" component={TeacherClassManagerScreen} />
        <Stack.Screen name="TeacherAnalyticsDashboard" component={TeacherAnalyticsDashboardScreen} />
        <Stack.Screen name="TeacherCalendar" component={TeacherCalendarScreen} />
        <Stack.Screen name="TeacherLeaderboard" component={TeacherLeaderboardScreen} />
        <Stack.Screen name="TeacherStudentRoster" component={TeacherStudentRosterScreen} />
        <Stack.Screen name="TeacherChallengeArena" component={TeacherChallengeArenaScreen} />
        <Stack.Screen name="TeacherCreateChallenge" component={TeacherCreateChallengeScreen} />
        <Stack.Screen name="TeacherVerificationQueue" component={TeacherVerificationQueueScreen} />
        <Stack.Screen name="SchoolReviewQueue" component={SchoolReviewQueueScreen} />
        <Stack.Screen name="SchoolPendingSubmissions" component={SchoolPendingSubmissionsScreen} />
        <Stack.Screen name="SuperAdminVerificationQueue" component={SuperAdminVerificationQueueScreen} />
        <Stack.Screen name="TeacherSubmissionDetail" component={TeacherSubmissionDetailScreen} />
        <Stack.Screen name="TeacherCreateAnnouncement" component={TeacherCreateAnnouncementScreen} />
        <Stack.Screen name="TeacherAnnouncementsManager" component={TeacherAnnouncementsManagerScreen} />
        <Stack.Screen name="TeacherProfile" component={TeacherProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
