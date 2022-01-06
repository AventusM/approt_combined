import React, { useRef } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Actions } from "react-native-router-flux";
import { useForm, Controller } from "react-hook-form";
import { useSignup } from "../hooks";
import { LOGIN_ROUTE, MAIN_ROUTE } from "../constants";
import theme from "../theme";
import { Celebrate } from "../customizedAssets/Celebrate";
import { Ionicons } from "@expo/vector-icons";

import { Text, TextInput } from "../components/Generic";

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: "#FF7E15",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  wrapper: {
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 15,
    flex: 1,
  },
  input: {
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: theme.colors.primary,
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
    color: "#FF7E15",
    width: "100%",
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    padding: 22,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
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
    paddingHorizontal: 30,
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
  imageContainer: {},
});

export const RegisterScreen = () => {
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
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Actions.push(MAIN_ROUTE)}>
        <Ionicons
          name="return-down-back-outline"
          size={34}
          color="#fff"
          style={{
            alignSelf: "flex-start",
            marginLeft: 10,
            padding: 15,
          }}
        />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Celebrate style={styles.logo} />
        <Text style={styles.name}>{`Let's start!`}</Text>
      </View>
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
          <TouchableOpacity onPress={() => Actions.push(LOGIN_ROUTE)}>
            <Text style={styles.signInText}>Kirjaudu sisään</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ErrorText = ({ conditionalMessage }) => {
  return <Text style={styles.errorText}>{conditionalMessage}</Text>;
};
