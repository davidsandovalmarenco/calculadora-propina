import React, { useEffect, useMemo, useState } from 'react';
import {
    SafeAreaView,
    Text,
    TextInput,
    View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import TipButton from '../components/TipButton';
import { styles } from '../styles/tipCalculator.styles';
import {
    calculateTip,
    formatCurrency,
    isValidAmount,
    parseAmount,
    sanitizeAmountInput,
} from '../utils/tip.utils';

export default function TipCalculatorScreen() {
    const [amount, setAmount] = useState('');
    const [selectedTip, setSelectedTip] = useState<number | null>(null);

    const validAmount = isValidAmount(amount);

    useEffect(() => {
        if (!validAmount) {
            setSelectedTip(null);
        }
    }, [validAmount]);

    const amountValue = useMemo(() => parseAmount(amount), [amount]);

    const tipValue = useMemo(() => {
        if (!validAmount || selectedTip === null) return 0;
        return calculateTip(amountValue, selectedTip);
    }, [amountValue, selectedTip, validAmount]);

    const totalToPay = useMemo(() => {
        if (!validAmount || selectedTip === null) return 0;
        return amountValue + tipValue;
    }, [amountValue, tipValue, selectedTip, validAmount]);

    const handleChangeAmount = (text: string) => {
        setAmount(sanitizeAmountInput(text));
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />

            <View style={styles.backgroundCircleTop} />
            <View style={styles.backgroundCircleBottom} />

            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Hecho por David Sandoval M</Text>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.inputCard}>
                        <Text style={styles.inputLabel}>Ingresa el total de la cuenta</Text>

                        <View style={styles.inputContainer}>
                            <Text style={styles.currencySymbol}>$</Text>
                            <TextInput
                                style={styles.input}
                                value={amount}
                                onChangeText={handleChangeAmount}
                                keyboardType="decimal-pad"
                                placeholder="0.0"
                                placeholderTextColor="#94a3b8"
                            />
                        </View>
                    </View>

                    <Text style={styles.sectionTitle}>Selecciona la propina</Text>

                    <View style={styles.buttonsContainer}>
                        <TipButton
                            label="Propina 10%"
                            active={selectedTip === 0.1}
                            disabled={!validAmount}
                            onPress={() => setSelectedTip(0.1)}
                        />
                        <TipButton
                            label="Propina 15%"
                            active={selectedTip === 0.15}
                            disabled={!validAmount}
                            onPress={() => setSelectedTip(0.15)}
                        />
                        <TipButton
                            label="Propina 20%"
                            active={selectedTip === 0.2}
                            disabled={!validAmount}
                            onPress={() => setSelectedTip(0.2)}
                        />
                    </View>

                    <View style={styles.resultsContainer}>
                        <View style={styles.resultBox}>
                            <Text style={styles.resultLabel}>Propina</Text>
                            <Text style={styles.resultValue}>{formatCurrency(tipValue)}</Text>
                        </View>

                        <View style={[styles.resultBox, styles.totalBox]}>
                            <Text style={styles.resultLabel}>Total a pagar</Text>
                            <Text style={styles.totalValue}>{formatCurrency(totalToPay)}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}