import { Colors } from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const FormField = ({
  label,
  otherStyles,
  placeholder,
  value,
  handleChangeText,
  secureText,
  required,
  kType,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`${otherStyles} space-y-2`}>
      <Text className={`text-base text-gray-100`} style={{ fontWeight: 600 }}>
        {label} {required && <Text className="text-orange text-sm ">*</Text>}
      </Text>
      <View className="w-full h-14 px-4 bg-gray-100 rounded-2xl border-2 border-primary focus:border-2 focus:border-orange flex flex-row items-center justify-center">
        <TextInput
          className="flex-1 text-black text-base text-left h-full"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={Colors.gray.dark}
          onChangeText={handleChangeText}
          secureTextEntry={secureText && !showPassword}
          keyboardType={kType ? kType : ""}
        />
        {secureText && (
          <TouchableOpacity
            className="h-6"
            onPress={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <Feather name="eye-off" size={24} color={Colors.gray.dark} />
            ) : (
              <Feather name="eye" size={24} color={Colors.gray.dark} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
