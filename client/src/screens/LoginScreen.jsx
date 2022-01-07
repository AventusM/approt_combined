import React, { useEffect } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import { useForm, Controller } from "react-hook-form";
import { Actions } from "react-native-router-flux";
import { useSelector } from "react-redux";
import { useLogin } from "../hooks";
import theme from "../theme";
import { SIGN_UP_ROUTE, MAIN_ROUTE } from "../constants";
import { Celebrate, Trophy } from "../customizedAssets/";
import { MaterialIcons } from "@expo/vector-icons";

import { Text, TextInput, BackButton } from "../components/Generic";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF7E15",
    alignSelf: "center",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  wrapper: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 15,
  },
  logo: {
    width: 50,
    height: 50
  },
  imageContainer: {
    borderWidth: 2,
    width: 200,
    height: 200
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
  errorText: {
    color: theme.colors.error,
    padding: 5,
  },
  loginButtonContainer: {
    color: "#FF7E15",
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    padding: 22,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    marginTop: 30,
  },
  loginButtonText: {
    color: theme.colors.textSecondary,
    textAlign: "center",
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.smallerHeading,
  },
  title: {
    fontSize: theme.fontSizes.smallerHeading,
    marginBottom: 20,
    marginTop: 30,
    textAlign: "center",
  },
  form: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
  signUpTextContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 15,
  },
  signUpText: {
    fontSize: theme.fontSizes.subheading,
    textDecorationLine: "underline",
    color: theme.colors.primary,
    //color: "#FF7E15",
  },
  noUserText: {
    fontSize: theme.fontSizes.subheading,
    marginRight: 5,
  },
  bigTitle: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.heading,
    textAlign: "center",
    marginTop: 5,
  },
  icon: {
    right: 10,
    color: theme.colors.primary,
  },
  forgot: {
    textAlign: "center",
    fontSize: theme.fontSizes.subheading,
    textDecorationLine: "underline",
    color: theme.colors.primary,
  },
});

export const LoginScreen = () => {
  const { currentUser } = useSelector((state) => state.authData);
  const { control, handleSubmit, errors } = useForm();
  const [login] = useLogin();

  // If login was succesful, currentUser will get its state changed
  // Redirect will happen here instead of within action creator
  useEffect(() => {
    if (currentUser) {
      Actions.push(MAIN_ROUTE);
    }
  }, [currentUser]);

  const onSubmit = (credentials) => {
    try {
      login(credentials);
    } catch (error) {
      console.log("LoginScreen onSubmit error", error);
    }
  };

  return (
    <View style={styles.container}>
      <BackButton color={theme.colors.white}/>
      <View style={styles.imageContainer}>
        <Trophy style={styles.logo}/>
        <Text style={styles.bigTitle}>{`Let's start!`}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Kirjaudu sisään</Text>
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
          <Text style={styles.errorText}>{errors?.username?.message}</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <View style={styles.inputContainer}>
                <MaterialIcons name="lock" size={24} style={styles.icon} />
                <TextInput
                  placeholder="password"
                  secureTextEntry={true}
                  style={styles.input}
                  placeholderTextColor="#888888"
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
          <Text style={styles.errorText}>{errors?.password?.message}</Text>
          <Text style={styles.forgot}>Unohtuiko salasana?</Text>
          <TouchableOpacity
            style={styles.loginButtonContainer}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.loginButtonText}>Kirjaudu</Text>
          </TouchableOpacity>
          <View style={styles.signUpTextContainer}>
            <Text style={styles.noUserText}>Ei käyttäjää?</Text>
            <TouchableOpacity onPress={() => Actions.push(SIGN_UP_ROUTE)}>
              <Text style={styles.signUpText}>Luo käyttäjä</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
