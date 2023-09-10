import { useModalStore } from '@/store/modalStore';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import cn from 'classnames';
import { overlayVariant, tapAnimationVariant } from './Modal.constants';
import { useEffect } from 'react';
import { useScrollLock } from '@/hooks/useScrollLock';
import { ReactComponent as IconClose } from '@/assets/images/icons/icon-close.svg';
import styles from './Modal.module.scss';

export const Modal = () => {
  const { closeModal, content, isOpen, options } = useModalStore();
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (isOpen) lockScroll();

    return () => unlockScroll();
  }, [isOpen]);

  return createPortal(
    <AnimatePresence mode='wait'>
      {isOpen && (
        <motion.div
          variants={overlayVariant}
          initial='initial'
          animate='animate'
          exit='initial'
          transition={{ duration: 0.2 }}
          className={styles.modal__overlay}
          aria-hidden
          onClick={closeModal}
        >
          <div className={styles.modal}>
            <div
              className={cn(options?.containerClassName, styles.modal__content)}
              onClick={(e) => e.stopPropagation()}
              aria-hidden
            >
              {options?.withCloseButton === false && !options?.title ? (
                <></>
              ) : (
                <div className={styles.modal__header}>
                  {options?.title && <h3 className={styles.modal__title}>{options?.title}</h3>}

                  {options?.withCloseButton !== false && (
                    <motion.button
                      whileTap={tapAnimationVariant}
                      className={styles.modal__closeButton}
                      onClick={closeModal}
                    >
                      <IconClose />
                    </motion.button>
                  )}
                </div>
              )}

              <div className={styles.modal__body}>{content}</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body as HTMLElement,
  );
};

Modal.displayName = 'dialog';
