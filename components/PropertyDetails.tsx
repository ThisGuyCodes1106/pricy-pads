'use client'

import React from 'react'
import Image from "next/image";
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'


import { PropertyProps } from '@/Types';

interface PropertyDetailsProps {
  modalOpen: boolean;
  closeModal: () => void;
  property: PropertyProps;
}

const PropertyDetails = ({ modalOpen, closeModal, property }: PropertyDetailsProps) =>  {
  return (
    <Fragment>
      <Transition appear show={modalOpen}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child 
            as={Fragment} 
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className="flex mid-h-full items-center justify-center p-4 text-center">
              <Transition.Child 
                as={Fragment} 
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-100'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xsl transition-all flex flex-col gap-5'>
                  <button 
                    type='button' 
                    onClick={closeModal}
                    className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                  >
                    <Image
                      src="/close.svg" 
                      alt='close'
                      width={20}
                      height={20}
                      className='object-contain'
                    />
                  </button>
                  
                  {/* actual content of property card */}
                  <div className='flex-1 flex flex-col gap-3'>
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image src='/beach-house.jpg' alt='' fill priority className='object-contain' />
                    </div>

                    
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  )
}

export default PropertyDetails