import { useState } from "react";

const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  return { open, close, isOpen };
};

export default useDisclosure;
