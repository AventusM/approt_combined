import React, { useRef } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useSignup } from "../hooks";
import { LOGIN_ROUTE } from "../constants";
import { Celebrate } from "../customizedAssets/Celebrate";
import { Text, TextInput } from "../components/Generic";
import theme from "../theme";

const styles = StyleSheet.create({
  // flexGrow specifically --> https://github.com/APSL/react-native-keyboard-aware-scroll-view/issues/99#issuecomment-360939114
  scrollViewContentContainerStyle: { flexGrow: 1},
  scrollViewStyle: { backgroundColor: theme.colors.primary },
  wrapper: {
    backgroundColor: theme.colors.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 15,
    flex: 1, // Fill the bottom space
  },
  input: {
    borderLeftColor: theme.colors.primary,
    borderLeftWidth: 1,
    flex: 1, // Fill the width for triggering onpress
    paddingLeft: 15,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#CACACA",
    flexDirection: "row",
    display: "flex",
    padding: 18,
  },
  icon: {
    right: 10,
    color: theme.colors.primary,
  },
  errorText: {
    color: theme.colors.error,
    padding: 5,
  },
  signupButtonContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    padding: 22,
    width: "100%",
  },
  signupButtonText: {
    color: theme.colors.textSecondary,
    textAlign: "center",
    fontWeight: theme.fontWeights.bold,
    paddingHorizontal: 10,
    fontSize: theme.fontSizes.smallerHeading,
  },
  title: {
    fontSize: theme.fontSizes.smallerHeading,
    marginBottom: 20,
    marginTop: 30,
    textAlign: "center",
  },
  form: {
    marginHorizontal: 30,
  },
  signInTextContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 15,
  },
  signInText: {
    fontSize: theme.fontSizes.subheading,
    textDecorationLine: "underline",
    color: theme.colors.primary,
  },
  userText: {
    fontSize: theme.fontSizes.subheading,
    right: 5,
  },
  name: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.heading,
    textAlign: "center",
    marginTop: 5,
  },
});

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, errors, watch } = useForm();

  const usernameRef = useRef({});
  const passwordRef = useRef({});
  usernameRef.current = watch("username", "");
  passwordRef.current = watch("password", "");

  const [signUpAndLogin] = useSignup({ usernameRef, passwordRef });

  const onSubmit = (registrationData) => {
    try {
      signUpAndLogin(registrationData);
    } catch (error) {
      console.log("RegisterScreen onSubmit error", error);
    }
  };

  return (
    <KeyboardAwareScrollView 
      style={styles.scrollViewStyle} 
      contentContainerStyle={styles.scrollViewContentContainerStyle}
      >
        <Celebrate />
        <View style={styles.wrapper}>
          <Text style={styles.title}>Rekisteröidy</Text>
          <View style={styles.form}>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <View style={styles.inputContainer}>
                  <MaterialIcons
                    name="alternate-email"
                    size={24}
                    style={styles.icon}
                  />
                  <TextInput
                    placeholder="your@email.com"
                    style={styles.input}
                    placeholderTextColor="#888888"
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    error={errors.username}
                  />
                </View>
              )}
              name="username"
              rules={{ required: "Username is required" }}
              defaultValue=""
            />
            <ErrorText conditionalMessage={errors?.username?.message} />
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <View style={styles.inputContainer}>
                  <MaterialIcons name="lock" size={24} style={styles.icon} />
                  <TextInput
                    placeholder="password"
                    secureTextEntry={true}
                    placeholderTextColor="#888888"
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    error={errors.password}
                  />
                </View>
              )}
              name="password"
              rules={{ required: "Password is required" }}
              defaultValue=""
            />
            <ErrorText conditionalMessage={errors?.password?.message} />
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <View style={styles.inputContainer}>
                  <MaterialIcons name="lock" size={24} style={styles.icon} />
                  <TextInput
                    placeholder="confirm password"
                    placeholderTextColor="#888888"
                    secureTextEntry={true}
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    error={errors.password}
                  />
                </View>
              )}
              name="confirmPassword"
              rules={{
                required: "Password confirmation is required",
                validate: (value) =>
                  value === passwordRef.current || "The passwords do not match",
              }}
              defaultValue=""
            />
            <ErrorText conditionalMessage={errors?.confirmPassword?.message} />
            <TouchableOpacity
              style={styles.signupButtonContainer}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={styles.signupButtonText}>Rekisteröidy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signInTextContainer}>
            <Text style={styles.userText}>On jo käyttäjä?</Text>
            <TouchableOpacity onPress={() => navigation.navigate(LOGIN_ROUTE)}>
              <Text style={styles.signInText}>Kirjaudu sisään</Text>
            </TouchableOpacity>
          </View>
        </View>
    </KeyboardAwareScrollView>
  );
};

const ErrorText = ({ conditionalMessage }) => {
  return <Text style={styles.errorText}>{conditionalMessage}</Text>;
};
