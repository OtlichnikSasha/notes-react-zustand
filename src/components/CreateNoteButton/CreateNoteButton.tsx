import { useModalStore } from '@/store/modalStore';
import { CreateNoteModal } from '../CreateNoteModal/CreateNoteModal';
import { motion } from 'framer-motion';
import styles from './CreateNoteButton.module.scss';

export const CreateNoteButton = () => {
  const handleOpenModal = useModalStore((state) => state.handleOpenModal);

  const handleOpenCreateModal = (): void => {
    handleOpenModal(<CreateNoteModal />, {
      title: 'Создать заметку',
    });
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={styles.button}
      onClick={handleOpenCreateModal}
    >
      <span>+</span>
    </motion.button>
  );
};
