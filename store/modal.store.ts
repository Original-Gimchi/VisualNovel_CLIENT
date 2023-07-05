import { ModalState } from '@/hooks/useModal';
import { atom } from 'recoil';

const modalState = atom<ModalState>({
  key: 'modal',
  default: {
    title: '',
    content: null,
    visible: false
  }
});

export { modalState };
