import React, { useState } from "react";
import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "../WidgetForm";

// import { Container } from './styles';

export const Widget: React.FC = () => {
  return (
    <Popover className="absolute bottom-5 right-5 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className="bg-brand-500 flex items-center rounded-full p-3 text-[#ffffff] leading-6 font-medium group shadow-lg shadow-brand-500">
        <ChatTeardropDots size={24} color="#ffffff" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
};
