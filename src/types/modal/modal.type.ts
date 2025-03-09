import React from "react";

export interface ModalProps {
  isOpen: boolean;
  isClose: () => void;
  children: React.ReactNode | null;
  openModal: (children: React.ReactNode) => void;
}