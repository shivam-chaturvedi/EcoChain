import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Modal,
  TextInput,
  Dimensions,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { Colors } from '../../../constants';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SchoolPendingSubmissions'>;
};

const { height } = Dimensions.get('window');

type Submission = {
  id: string;
  title: string;
  category: string;
  submittedBy: string;
  status: 'pending' | 'approved' | 'rejected';
};

const SUBMISSIONS: Submission[] = [
  { id: '1', title: 'Recycling Activity', category: 'Plastic', submittedBy: 'Alex Rivera', status: 'pending' },
  { id: '2', title: 'Solar Panel Study', category: 'Energy', submittedBy: 'Maya Chen', status: 'pending' },
  { id: '3', title: 'Compost Journal', category: 'Organic', submittedBy: 'Jordan Lee', status: 'pending' },
];

export default function SchoolPendingSubmissionsScreen({ navigation }: Props) {
  const [submissions, setSubmissions] = useState<Submission[]>(SUBMISSIONS);
  const [rejectModalId, setRejectModalId] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState('');

  function handleApprove(id: string) {
    setSubmissions(prev => prev.map(s => s.id === id ? { ...s, status: 'approved' } : s));
  }

  function openRejectModal(id: string) {
    setRejectModalId(id);
    setRejectReason('');
  }

  function handleRejectConfirm() {
    if (!rejectModalId) return;
    setSubmissions(prev => prev.map(s => s.id === rejectModalId ? { ...s, status: 'rejected' } : s));
    setRejectModalId(null);
  }

  const pendingSubmissions = submissions.filter(s => s.status === 'pending');

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.surface} />

      {/* ── Reject Submission bottom sheet ── */}
      <Modal
        visible={!!rejectModalId}
        transparent
        animationType="slide"
        onRequestClose={() => setRejectModalId(null)}>
        <View style={styles.modalBackdrop}>
          <TouchableOpacity
            style={styles.modalDismissArea}
            activeOpacity={1}
            onPress={() => setRejectModalId(null)}
          />
          <View style={styles.bottomSheet}>
            {/* Sheet header */}
            <View style={styles.sheetHeader}>
              <Text style={styles.sheetTitle}>Reject Submission</Text>
              <TouchableOpacity
                onPress={() => setRejectModalId(null)}
                style={styles.sheetCloseBtn}
                activeOpacity={0.7}>
                <Text style={styles.sheetCloseText}>✕</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sheetDivider} />

            {/* Sheet body */}
            <View style={styles.sheetBody}>
              <Text style={styles.sheetBodyLabel}>Reason for rejection</Text>
              <TextInput
                style={styles.sheetTextArea}
                value={rejectReason}
                onChangeText={setRejectReason}
                placeholder="Explain why this submission is being rejected..."
                placeholderTextColor={Colors.textLight}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />

              <TouchableOpacity
                style={styles.confirmRejectBtn}
                onPress={handleRejectConfirm}
                activeOpacity={0.85}>
                <Text style={styles.confirmRejectBtnText}>Confirm Rejection</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setRejectModalId(null)}
                activeOpacity={0.7}>
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

        {/* ── Title block ── */}
        <View style={styles.titleBlock}>
          <Text style={styles.queueLabel}>VERIFICATION QUEUE</Text>
          <Text style={styles.title}>Pending Submissions</Text>
        </View>

        {/* ── Cards ── */}
        <View style={styles.cards}>
          {pendingSubmissions.map(sub => (
            <SubmissionCard
              key={sub.id}
              submission={sub}
              onApprove={() => handleApprove(sub.id)}
              onReject={() => openRejectModal(sub.id)}
            />
          ))}

          {pendingSubmissions.length === 0 && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyEmoji}>✅</Text>
              <Text style={styles.emptyTitle}>All reviewed!</Text>
              <Text style={styles.emptySubtitle}>No pending submissions remain.</Text>
            </View>
          )}
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function SubmissionCard({
  submission: s,
  onApprove,
  onReject,
}: {
  submission: Submission;
  onApprove: () => void;
  onReject: () => void;
}) {
  return (
    <View style={cardStyles.card}>
      {/* Image placeholder */}
      <View style={cardStyles.imagePlaceholder}>
        <Text style={cardStyles.imgLabel}>img</Text>
      </View>

      {/* Card body */}
      <View style={cardStyles.body}>
        {/* Title + category badge */}
        <View style={cardStyles.titleRow}>
          <Text style={cardStyles.title}>{s.title}</Text>
          <View style={cardStyles.categoryBadge}>
            <Text style={cardStyles.categoryBadgeText}>{s.category}</Text>
          </View>
        </View>

        {/* Submitted by */}
        <Text style={cardStyles.submittedBy}>Submitted by {s.submittedBy}</Text>

        {/* Action buttons */}
        <View style={cardStyles.actionsRow}>
          <TouchableOpacity style={cardStyles.approveBtn} onPress={onApprove} activeOpacity={0.8}>
            <Text style={cardStyles.approveBtnText}>Approve</Text>
          </TouchableOpacity>
          <TouchableOpacity style={cardStyles.rejectBtn} onPress={onReject} activeOpacity={0.8}>
            <Text style={cardStyles.rejectBtnText}>Reject</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.surface,
  },

  // Scroll
  scroll: {
    paddingBottom: 24,
  },

  // Title block
  titleBlock: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 20,
  },
  queueLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: Colors.primaryDark,
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: Colors.text,
    letterSpacing: -0.7,
  },

  // Cards
  cards: {
    paddingHorizontal: 16,
    gap: 16,
  },

  // Empty state
  emptyState: {
    alignItems: 'center',
    paddingVertical: 56,
    gap: 8,
  },
  emptyEmoji: { fontSize: 40 },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.text,
  },
  emptySubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
  },

  // Modal
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'flex-end',
  },
  modalDismissArea: {
    flex: 1,
  },
  bottomSheet: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingBottom: 36,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 12,
  },
  sheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  sheetTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '800',
    color: Colors.text,
    letterSpacing: -0.2,
  },
  sheetCloseBtn: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 15,
  },
  sheetCloseText: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: '700',
  },
  sheetDivider: {
    height: 1,
    backgroundColor: Colors.border,
    marginHorizontal: 20,
  },
  sheetBody: {
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 14,
  },
  sheetBodyLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.textSecondary,
    letterSpacing: 0.3,
  },
  sheetTextArea: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: Colors.text,
    minHeight: 90,
  },
  confirmRejectBtn: {
    backgroundColor: '#EF4444',
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
  },
  confirmRejectBtnText: {
    fontSize: 15,
    fontWeight: '800',
    color: Colors.white,
  },
  cancelBtn: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  cancelBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
});

const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  imagePlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imgLabel: {
    fontSize: 13,
    color: '#AEAEAE',
    fontWeight: '500',
  },
  body: {
    padding: 16,
    gap: 6,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.text,
    letterSpacing: -0.2,
    flex: 1,
  },
  categoryBadge: {
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  categoryBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  submittedBy: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
  },
  approveBtn: {
    flex: 1,
    backgroundColor: '#A8D5D0',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  approveBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2D7A73',
  },
  rejectBtn: {
    flex: 1,
    backgroundColor: '#F5B8B8',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  rejectBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#C04444',
  },
});
