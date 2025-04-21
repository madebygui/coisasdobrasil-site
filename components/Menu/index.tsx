'use client';

import { Modal, ModalBody, ModalContent, ModalFooter, useDisclosure } from '@heroui/modal';
import { useEffect } from 'react';
import { X } from 'lucide-react';
import './styles.css';
import { HoverTextSlide } from '@/components/Animations/HoverTextSlide';

interface Props {
  open: boolean;
  handleCloseAction: () => void;
}

const ModalMotion = {
  variants: {
    initial: {
      x: 1300,
      opacity: 0,
    },
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      x: 1300,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  },
};

export function Menu({ open, handleCloseAction }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (open) {
      onOpen();
    } else {
      handleCloseAction();
      onClose();
    }
  }, [open]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        size='full'
        onClose={() => {
          handleCloseAction();
          onClose();
        }}
        motionProps={ModalMotion}
        hideCloseButton={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className='flex justify-end p-4'>
                  <X color='black' size={24} className='cursor-pointer' onClick={onClose} />
                </div>

                <div className='flex flex-col gap-4 p-8'>
                  <HoverTextSlide text='Home' />
                  <HoverTextSlide text='Produtos' />
                  <HoverTextSlide text='Portfólio' />
                  <HoverTextSlide text='Contato' />
                </div>
              </ModalBody>
              <ModalFooter className='flex justify-start p-12'>
                <div className='grid grid-cols-2 gap-4'>
                  <a className='nav-link-footer-container group'>
                    <span className='nav-link-footer'>Sobre</span>
                  </a>

                  <a className='nav-link-footer-container group'>
                    <span className='nav-link-footer'>Sob medida</span>
                  </a>

                  <a className='nav-link-footer-container group'>
                    <span className='nav-link-footer'>Blog</span>
                  </a>

                  <a className='nav-link-footer-container group'>
                    <span className='nav-link-footer'>Download</span>
                  </a>

                  <a className='nav-link-footer-container group'>
                    <span className='nav-link-footer'>Contato</span>
                  </a>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
