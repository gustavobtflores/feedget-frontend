import React from "react";
import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

// import { Container } from './styles';

export const CloseButton: React.FC = () => {
  return (
    <Popover.Button title="Fechar formulário" className="right-0 absolute text-zinc-400 hover:text-zinc-100">
      <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
  );
};
