import React, { useState, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ChangeValueModal = ({
  itemId,
  baseValue,
  visible,
  onClose,
  onFinish,
}) => {
  const [value, setValue] = useState(baseValue?.toString());

  useEffect(() => {
    setValue(baseValue?.toString());
  }, [itemId, baseValue]);

  const handleChangeValue = (e) => {
    const numericValue = e.replace(/\D/g, '');
    setValue(numericValue);
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.messageText}>Alterar Quantidade</Text>
          <TextInput
            style={styles.quantityInput}
            value={value}
            onChangeText={handleChangeValue}
            keyboardType="numeric"
            placeholder="Digitar Quantidade"
            textAlign="center"
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.button,
                styles.updateButton,
                (value <= 0 || value == '') && { backgroundColor: '#cccccc' },
              ]}
              onPress={() => {
                onFinish({ id: itemId, newQuantity: value });
              }}
              disabled={value <= 0 || value == ''}
            >
              <Text style={[styles.buttonText]}>Atualizar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  quantityInput: {
    height: 40,
    borderColor: '#d0d0d0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    elevation: 5,
    width: 300,
  },
  messageText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#306b40',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  updateButton: {
    backgroundColor: '#306b40',
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#aaa',
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChangeValueModal;
