import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import IntroCarouselScreen from '../features/onboarding/screens/IntroCarouselScreen';
import LoginScreen from '../features/auth/screens/LoginScreen';
import LocationSelectionScreen from '../features/onboarding/screens/LocationSelectionScreen';
import RoleSelectionScreen from '../features/auth/screens/RoleSelectionScreen';
import SchoolRegistrationScreen from '../features/school/screens/SchoolRegistrationScreen';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
