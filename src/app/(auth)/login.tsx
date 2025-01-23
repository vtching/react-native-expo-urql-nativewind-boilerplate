import { useState } from 'react';
import { router, Link } from 'expo-router';
import { Text, View, TextInput, Image, Button, Link } from 'react-native';
import { useMutation } from 'urql';
import { useSession } from '../../ctx';
import Toast from 'react-native-toast-message';
import { LoginDocument } from '../../graphql/generated/graphql';

function Login() {
  const [email, setEmail] = useState('testdefault');
  const [password, setPassword] = useState('testdefault');

  const [userLoginResult, userLogin] = useMutation(LoginDocument);

  const { signIn } = useSession();
  return (
    <View className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
      <View className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          alt="myproject"
          source={{ uri: "https://tailwindui.com/plus/img/logos/mark.svg?color=red&shade=600" }}
          className="mx-auto h-10 w-10"
        />
        <Text className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Log into your account
        </Text>
      </View>
      <View className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Text
          className="block text-sm/6 font-medium text-gray-900"
        >
          Email address
        </Text>
        <View className="mt-2">
          <TextInput
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            placeholder="Enter email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <Text
          className="block text-sm/6 font-medium text-gray-900"
        >
          Password
        </Text>
        <View className="mt-2">
          <TextInput
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            placeholder="Enter password"
            keyboardType="visible-password"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <Button
          style="mt-2 flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          title="Log In"
          onPress={() => {
            userLogin({ email, password }).then((result) => {
              console.log('userLogin result: ', result);
              if (result.error) {
                Toast.show({
                  type: 'error',
                  text1: 'Login failed',
                  text2: result.error.graphQLErrors.at(0)?.message
                })
              } else if (result.data?.login?.token) {
                signIn(result.data?.login?.token);
                router.replace('/');
              } else {
                Toast.show({
                  type: 'error',
                  text1: 'Login failed',
                  text2: 'Token is missing',
                });
              }
            });
          }}
        />
      </View>
      <View className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        Don't have an account? <Link href="/signup">Signup</Link>
      </View>
    </View>
  );
}

export default Login;