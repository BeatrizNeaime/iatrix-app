import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const Button = ({ label, handleClick, otherStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
      className={`bg-orange rounded-xl min-h-[48px] w-full flex flex-row justify-center items-center ${otherStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      onPress={handleClick}
      disabled={isLoading}
    >
      <Text className={`text-white font-semibold text-lg ${textStyles}`}>
        {label}
      </Text>
      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;
