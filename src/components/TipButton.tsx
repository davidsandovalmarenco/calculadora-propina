import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/tipCalculator.styles';

type TipButtonProps = {
    label: string;
    active: boolean;
    disabled: boolean;
    onPress: () => void;
};

export default function TipButton({
    label,
    active,
    disabled,
    onPress,
}: TipButtonProps) {
    return (
        <View style={styles.buttonWrapper}>
            <TouchableOpacity
                activeOpacity={0.88}
                disabled={disabled}
                onPress={onPress}
                style={[
                    styles.button,
                    active && !disabled ? styles.buttonActive : null,
                    disabled ? styles.buttonDisabled : null,
                ]}
            >
                <Text
                    style={[
                        styles.buttonText,
                        active && !disabled ? styles.buttonTextActive : null,
                    ]}
                >
                    {label}
                </Text>
            </TouchableOpacity>
        </View>
    );
}