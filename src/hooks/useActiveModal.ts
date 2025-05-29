"use client";
import { useState } from "react";

export default function useActiveModal<T extends string>() {
  const [activeModal, setActiveModal] = useState<T | null>(null);

  const openModal = (type: T) => setActiveModal(type);
  const closeModal = () => setActiveModal(null);

  const toggleModal = (type: T | null) => {
    setActiveModal((prev) => (prev === type ? null : type));
  };

  const nextModal = (type: T) => activeModal === type;

  return { activeModal, openModal, closeModal, toggleModal, nextModal };
}
