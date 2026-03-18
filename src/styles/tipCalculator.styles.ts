import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#eef4ff',
    },

    backgroundCircleTop: {
        position: 'absolute',
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: 'rgba(37, 99, 235, 0.10)',
        top: -60,
        right: -60,
    },

    backgroundCircleBottom: {
        position: 'absolute',
        width: 260,
        height: 260,
        borderRadius: 130,
        backgroundColor: 'rgba(16, 185, 129, 0.08)',
        bottom: -80,
        left: -90,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 24,
    },

    card: {
        backgroundColor: '#ffffff',
        borderRadius: 30,
        padding: 24,
        shadowColor: '#0f172a',
        shadowOffset: { width: 0, height: 16 },
        shadowOpacity: 0.12,
        shadowRadius: 24,
        elevation: 12,
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },

    badge: {
        alignSelf: 'center',
        backgroundColor: '#e0ecff',
        paddingHorizontal: 14,
        paddingVertical: 7,
        borderRadius: 999,
        marginBottom: 14,
    },

    badgeText: {
        fontSize: 13,
        fontWeight: '700',
        color: '#1d4ed8',
        letterSpacing: 0.5,
    },

    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '800',
        color: '#1e3a8a',
        marginBottom: 8,
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 15,
        color: '#64748b',
        lineHeight: 22,
        marginBottom: 20,
        paddingHorizontal: 8,
    },

    divider: {
        height: 1,
        backgroundColor: '#e2e8f0',
        marginBottom: 22,
    },

    inputCard: {
        backgroundColor: '#f8fbff',
        borderRadius: 20,
        padding: 16,
        borderWidth: 1,
        borderColor: '#dbeafe',
        marginBottom: 22,
    },

    inputLabel: {
        fontSize: 15,
        fontWeight: '600',
        color: '#475569',
        marginBottom: 12,
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 1.5,
        borderColor: '#cbd5e1',
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 4,
    },

    currencySymbol: {
        fontSize: 22,
        fontWeight: '700',
        color: '#2563eb',
        marginRight: 8,
    },

    input: {
        flex: 1,
        fontSize: 24,
        fontWeight: '700',
        color: '#0f172a',
        paddingVertical: 14,
    },

    sectionTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: '#334155',
        marginBottom: 12,
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginHorizontal: -4,
        marginBottom: 24,
    },

    buttonWrapper: {
        flex: 1,
        paddingHorizontal: 4,
    },

    button: {
        minHeight: 56,
        borderRadius: 16,
        backgroundColor: '#f8fafc',
        borderWidth: 1.5,
        borderColor: '#cbd5e1',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#94a3b8',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 2,
    },

    buttonActive: {
        backgroundColor: '#2563eb',
        borderColor: '#2563eb',
        shadowColor: '#2563eb',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 14,
        elevation: 6,
    },

    buttonDisabled: {
        opacity: 0.45,
    },

    buttonText: {
        fontSize: 15,
        fontWeight: '700',
        color: '#334155',
        textAlign: 'center',
    },

    buttonTextActive: {
        color: '#ffffff',
    },

    resultsContainer: {
        marginTop: 6,
    },

    resultBox: {
        backgroundColor: '#f8fafc',
        borderRadius: 20,
        paddingVertical: 18,
        paddingHorizontal: 18,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        marginBottom: 14,
    },

    totalBox: {
        backgroundColor: '#ecfdf5',
        borderColor: '#bbf7d0',
    },

    resultLabel: {
        fontSize: 14,
        fontWeight: '700',
        color: '#64748b',
        marginBottom: 8,
        textTransform: 'uppercase',
        letterSpacing: 0.6,
    },

    resultValue: {
        fontSize: 28,
        fontWeight: '800',
        color: '#0f766e',
    },

    totalValue: {
        fontSize: 30,
        fontWeight: '800',
        color: '#15803d',
    },
});