import NiceModal, { useModal } from '@ebay/nice-modal-react';
import AnimatedModal from '@sceneui/animated-modal';
import Button from '@sceneui/button';

const Modal = NiceModal.create(() => {
  const { visible, hide, show } = useModal();
  return (
    <AnimatedModal visible={visible} hide={hide} show={show}>
      <div>测试</div>
    </AnimatedModal>
  );
});

export default function ExampleModal() {
  const handleShow = () => {
    NiceModal.show(Modal);
  };
  return (
    <div>
      <Button solid onClick={handleShow}>
        显示
      </Button>
    </div>
  );
}
