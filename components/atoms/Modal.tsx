import useModal, { ModalState } from '@/hooks/useModal';
import { modalState } from '@/store/modal.store';
import classNames from 'classnames';
import { useRecoilState } from 'recoil';

interface ModalViewProps extends ModalState {
  onClose?: () => void;
}

function XIcon({ ...props }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M23.6484 21.9384C23.8737 22.1665 24 22.4747 24 22.7958C24 23.1169 23.8737 23.4251 23.6484 23.6532C23.4192 23.8757 23.1128 24 22.7939 24C22.4751 24 22.1687 23.8757 21.9394 23.6532L12 13.6648L2.06059 23.6532C1.83135 23.8757 1.52495 24 1.20607 24C0.887193 24 0.580792 23.8757 0.351552 23.6532C0.126341 23.4251 0 23.1169 0 22.7958C0 22.4747 0.126341 22.1665 0.351552 21.9384L10.306 11.9649L0.351552 1.99149C0.160304 1.75767 0.0625691 1.46083 0.0773569 1.1587C0.0921447 0.856579 0.218398 0.570775 0.43156 0.356884C0.644722 0.142992 0.929551 0.0163064 1.23064 0.001468C1.53174 -0.0133704 1.82757 0.0846995 2.06059 0.276602L12 10.2651L21.9394 0.276602C22.1724 0.0846995 22.4683 -0.0133704 22.7694 0.001468C23.0704 0.0163064 23.3553 0.142992 23.5684 0.356884C23.7816 0.570775 23.9079 0.856579 23.9226 1.1587C23.9374 1.46083 23.8397 1.75767 23.6484 1.99149L13.694 11.9649L23.6484 21.9384Z"
        fill="black"
      />
    </svg>
  );
}

function ModalView({ title, content, visible, onClose }: ModalViewProps) {
  return (
    <>
      <div
        className={classNames('fixed top-0 left-0 w-full h-full bg-black opacity-20 z-40', { hidden: !visible })}
        onClick={onClose}
      />
      <div
        className={classNames(
          { hidden: !visible },
          { 'rounded-lg': title },
          { 'rounded-3xl': !title },
          'fixed top-1/2 left-1/2 flex flex-col bg-white max-h-45 w-3/4 max-w-37.5 -translate-x-1/2 -translate-y-1/2 overflow-auto overflow-x-hidden z-50'
        )}
      >
        {title ? (
          <div className="flex justify-between items-center w-full px-6 py-5 h-16 border-b-0.5 border-primary-border_gray">
            <h1 className="font-bold text-xl">{title}</h1>
            <XIcon className="cursor-pointer" onClick={onClose} />
          </div>
        ) : null}

        <div className="flex flex-col mt-6 gap-2.5 px-10">{content}</div>
      </div>
    </>
  );
}

export default function Modal() {
  const [modal] = useRecoilState(modalState);
  const { closeModal } = useModal();

  return (
    <ModalView
      {...modal}
      onClose={() => {
        modal.onClose?.();
        if (!modal.menualClose) closeModal();
      }}
    />
  );
}
