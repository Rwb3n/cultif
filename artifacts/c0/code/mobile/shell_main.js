/* ANNOTATION_BLOCK_START
{
  "artifact_id": "c0_rn_shell_src_main",
  "version_tag": "0.1.2-c0",
  "g_created": 4,
  "g_last_modified": 13,
  "description": "Main annotated source code file for the React Native (Expo) shell application developed in Cycle 0. Implements basic navigation and placeholder screens using React Native Paper (Material Design 3) for core Cycle 0 flows.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a functional, runnable React Native (Expo) application shell with structured navigation and UI stubs for Cycle 0 screens, using React Native Paper. This serves as the immediate foundation for AI-assisted development of UI components and screen details.",
  "key_logic_points": [
    "Initializes Expo application with React Native Paper Provider and basic MD3 theme.",
    "Sets up root navigation: StackNavigator for pre-auth flows (Onboarding, Auth) and Bottom Tab Navigator for main app sections.",
    "Includes placeholder screen components for T-01b, T-11, T-02, T-03, T-06, T-04, T-08, plus Explore, Plan, You tabs.",
    "Screens use basic React Native Paper components (Appbar, Card, Button, Text).",
    "Static mock data and navigation stubs are used; no live data or complex logic."
  ],
  "interfaces_provided": [
    { "name": "Main App UI", "interface_type": "GUI", "details": "Provides the primary graphical user interface for the mobile application shell, styled with Material Design 3, including navigation between core Cycle 0 screens.", "notes": "Interaction involves navigating between static/stubbed screens." }
  ],
  "requisites": [
    { "description": "Expo and React Native environment setup.", "type": "ENVIRONMENT" },
    { "description": "React Native Paper library and dependencies (e.g., react-native-vector-icons, @react-navigation/*) integrated.", "type": "LIBRARY_DEPENDENCY" },
    { "description": "Figma prototype (c0_figma_prototype) and Figma Page Catalogue (figma_page_catalogue_csv) providing UI/UX design for shell screens.", "type": "DESIGN_INPUT" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^18.x.x", "reason": "Core UI library for React Native." },
    { "name": "React Native", "version": "0.74.x (Expo SDK 51 compatible)", "reason": "Framework for building native mobile apps." },
    { "name": "Expo", "version": "SDK 51", "reason": "Platform and tools for universal React applications." },
    { "name": "@react-navigation/native", "version": "^6.x", "reason": "Navigation library core." },
    { "name": "@react-navigation/stack", "version": "^6.x", "reason": "Stack navigator for React Navigation." },
    { "name": "@react-navigation/material-bottom-tabs", "version": "^6.x", "reason": "Material style bottom tab navigator (alternative to Paper's BottomNavigation if more integrated with React Navigation state)." },
    { "name": "react-native-paper", "version": "^5.x", "reason": "Material Design 3 component library for React Native." },
    { "name": "react-native-vector-icons", "version": "^10.x (or compatible)", "reason": "Icon library often required by React Native Paper." }
  ],
  "internal_dependencies": ["c0_mobile_readme", "figma_page_catalogue_csv"],
  "dependents": ["c1_rn_app_src"],
  "linked_issue_ids": ["issue_g5_visual_tech_strategy_update"],
  "quality_notes": {
    "linting": "PENDING (ESLint to be configured)",
    "unit_tests": "PENDING (Jest tests to be developed)",
    "manual_review_comment": "Structure updated with navigation and placeholders for Cycle 0 screens using React Native Paper at g=13. This version is more fleshed out for AI-driven component building.",
    "last_security_review_g": null
  }
}
ANNOTATION_BLOCK_END */

// WorldChef/Cultif - Cycle 0 React Native Shell Application (React Native Paper)
// Artifact ID: c0_rn_shell_src_main
// Version: 0.1.2-c0
// Last Updated (g): 13

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { 
  Provider as PaperProvider, 
  Appbar, 
  BottomNavigation, // Using Paper's BottomNavigation for now
  Text, 
  Card, 
  Button, 
  MD3LightTheme as DefaultTheme 
} from 'react-native-paper';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// --- Theme Configuration ---
const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#008080', // Teal variant from Cultif Welcome screen
    accent: '#FFC107', // Example accent
    // TODO: Populate with actual Figma 01 Foundations tokens, adapted to Material Design 3
  },
};

const navigationTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    primary: appTheme.colors.primary,
    background: 'white',
  },
};

// --- Placeholder Screens (Cycle 0) ---
const CenteredTextScreen = ({ title, templateId }) => (
  <View style={styles.container}>
    <Text variant="headlineMedium">{title}</Text>
    {templateId && <Text variant="bodySmall">Corresponds to: {templateId}</Text>}
  </View>
);

const OnboardingFeatureTourScreen = () => <CenteredTextScreen title="Onboarding / Feature Tour" templateId="T-01b" />;
const AuthShellScreen = () => <CenteredTextScreen title="Authentication Shell (Login/Signup)" templateId="T-11" />;

const HomeFeedScreen = ({ navigation }) => (
  <View style={styles.screenWithAppbar}>
    <Appbar.Header>
      <Appbar.Content title="Cultif Home" />
      {/* Example action: <Appbar.Action icon="magnify" onPress={() => {}} /> */}
    </Appbar.Header>
    <View style={styles.containerSpaced}>
      <Text variant="titleLarge">Home Feed (T-02)</Text>
      <Card style={styles.card}>
        <Card.Title title="Static Recipe Card" subtitle="(Example)"/>
        <Card.Content><Text>Content for a recipe item...</Text></Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('RecipeDetailFree')}>View Details</Button>
        </Card.Actions>
      </Card>
      <Button onPress={() => navigation.navigate('RecipeUploadWizard')} style={styles.button}>Upload Stub (T-06)</Button>
      <Button onPress={() => navigation.navigate('SubscriptionFlow')} style={styles.button}>Subscription Offer (T-08)</Button>
    </View>
  </View>
);

const RecipeDetailFreeScreen = ({ navigation }) => (
  <View style={styles.screenWithAppbar}>
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title="Recipe Detail (T-03)" />
    </Appbar.Header>
    <View style={styles.containerSpaced}>
      <Text variant="bodyMedium">Static display of one sample recipe's details, ingredients, steps.</Text>
      <Button onPress={() => navigation.navigate('RecipeDetailPaidLocked')} style={styles.button}>View Locked Version (T-04)</Button>
    </View>
  </View>
);

const RecipeUploadWizardScreen = () => <CenteredTextScreen title="Recipe Upload Wizard Stub" templateId="T-06" />;
const RecipeDetailPaidLockedScreen = () => <CenteredTextScreen title="Recipe Detail - Paid/Locked (Paywall Modal Visual)" templateId="T-04" />;
const SubscriptionFlowScreen = () => <CenteredTextScreen title="Subscription Flow / Offer Screen" templateId="T-08" />;

// Placeholder tabs for main navigation
const ExploreScreen = () => <CenteredTextScreen title="Explore Tab" />;
const PlanScreen = () => <CenteredTextScreen title="Plan Tab (Meal Plan T-07 later)" />;
const YouScreen = () => <CenteredTextScreen title="You Tab (Profile T-16 later)" />;

// --- Navigation Setup ---
const Stack = createStackNavigator();
const Tab = BottomNavigation; // Using Paper's BottomNavigation

// Home stack within the bottom tabs
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeFeed" component={HomeFeedScreen} />
      <Stack.Screen name="RecipeDetailFree" component={RecipeDetailFreeScreen} />
      <Stack.Screen name="RecipeUploadWizard" component={RecipeUploadWizardScreen} />
      <Stack.Screen name="RecipeDetailPaidLocked" component={RecipeDetailPaidLockedScreen} />
      <Stack.Screen name="SubscriptionFlow" component={SubscriptionFlowScreen} />
    </Stack.Navigator>
  );
}

// Main App Tabs Navigator
const MainAppTabs = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'homeStack', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'explore', title: 'Explore', focusedIcon: 'magnify' },
    { key: 'plan', title: 'Plan', focusedIcon: 'notebook-edit-outline', unfocusedIcon: 'notebook-outline' },
    { key: 'you', title: 'You', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    homeStack: HomeStack,
    explore: ExploreScreen,
    plan: PlanScreen,
    you: YouScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      // barStyle={{ backgroundColor: appTheme.colors.primary }} // Example styling
    />
  );
};

// Root Navigator (handles pre-auth and main app flows)
const AppRootNavigator = () => {
  // Basic logic to switch between Auth and Main App (can be replaced by auth state later)
  const [isAuthenticated, setIsAuthenticated] = React.useState(false); // Simulate auth state
  const [onboardingComplete, setOnboardingComplete] = React.useState(false); // Simulate onboarding state

  // In a real app, these would come from an auth service / async storage
  React.useEffect(() => {
    // Simulate loading state and then deciding flow
    // setTimeout(() => setOnboardingComplete(true), 1000); // Simulate onboarding done
    // setTimeout(() => setIsAuthenticated(true), 2000); // Simulate login
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* TODO: Determine initial route based on onboarding/auth state */} 
      {/* For C0, we might show Onboarding first, then Auth, then Main. For now, direct to MainTabs for simplicity or specific test. */}
      <Stack.Screen name="Onboarding" component={OnboardingFeatureTourScreen} />
      <Stack.Screen name="Auth" component={AuthShellScreen} />
      <Stack.Screen name="MainApp" component={MainAppTabs} />
    </Stack.Navigator>
  );
  // For quick testing of main tabs directly:
  // return <MainAppTabs />;
};

// --- Main App Component ---
export default function Main() {
  return (
    <PaperProvider theme={appTheme}>
      <NavigationContainer theme={navigationTheme}>
        {/* For C0, starting with Onboarding, then Auth, then Main. We can change initialRouteName for testing. */}
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Onboarding">
          <Stack.Screen name="Onboarding" component={OnboardingFeatureTourScreen} />
          <Stack.Screen name="Auth" component={AuthShellScreen} />
          <Stack.Screen name="MainApp" component={MainAppTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  screenWithAppbar: {
    flex: 1,
  },
  containerSpaced: {
    flex: 1,
    padding: 20,
    gap: 10, // For spacing between elements
  },
  card: {
    width: '100%',
    marginVertical: 10,
  },
  button: {
    marginTop: 10,
  }
});

console.log('Cycle 0 React Native Shell Main Source File (c0_rn_shell_src_main) with React Native Paper structure loaded.'); 