import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { MaterialIcons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { SIGN_UP_ROUTE } from "../constants";
import { Text, TextInput } from "../components/Generic";
import { Trophy } from "../customizedAssets";
import { useLogin } from "../hooks";
import theme from "../theme";

const styles = StyleSheet.create({
  // flexGrow specifically --> https://github.com/APSL/react-native-keyboard-aware-scroll-view/issues/99#issuecomment-360939114
  scrollViewContentContainerStyle: { flexGrow: 1},
  scrollViewStyle: {backgroundColor: theme.colors.primary},
  wrapper: {
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 20,
    borderTopColor: theme.colors.white,
    borderTopRightRadius: 20,
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
  errorText: {
    color: theme.colors.error,
    padding: 5,
  },
  loginButtonContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    color: theme.colors.primary,
    marginTop: 30,
    padding: 22,
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
    marginHorizontal: 30,
  },
  signUpTextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  signUpText: {
    fontSize: theme.fontSizes.subheading,
    textDecorationLine: "underline",
    color: theme.colors.primary,
  },
  noUserText: {
    fontSize: theme.fontSizes.subheading,
    marginRight: 5,
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
  const navigation = useNavigation();
  const { control, handleSubmit, errors } = useForm();
  const [login] = useLogin();

  const onSubmit = (credentials) => {
    try {
      login(credentials);
    } catch (error) {
      console.log("LoginScreen onSubmit error", error);
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.scrollViewStyle} contentContainerStyle={styles.scrollViewContentContainerStyle}>
      <Trophy />
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
              <TouchableOpacity onPress={() => navigation.navigate(SIGN_UP_ROUTE)}>
                <Text style={styles.signUpText}>Luo käyttäjä</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
