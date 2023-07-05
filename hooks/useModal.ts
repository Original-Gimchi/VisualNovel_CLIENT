import { modalState } from '@/store/modal.store';
import { ReactNode, useCallback } from 'react';
import { useRecoilState } from 'recoil';

export interface ModalState {
  title?: string;
  content: ReactNode;
  visible?: boolean;
  menualClose?: boolean;
  onClose?: () => void;
}

const useModal = () => {
  const [modal, setModal] = useRecoilState(modalState);

  const openModal = useCallback(
    (modalData: ModalState) => {
      setModal({
        ...modalData,
        visible: true
      });
    },
    [setModal]
  );

  const closeModal = useCallback(() => {
    setModal({
      title: '',
      content: null,
      visible: false
    });
  }, [setModal]);

  return { openModal, closeModal, visible: !!modal.visible };
};

export default useModal;
