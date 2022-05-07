import { CloseButton } from "../../CloseButton";
import successIcon from "../../../assets/Success.svg";

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export const FeedbackSuccessStep = ({ onFeedbackRestartRequested }: FeedbackSuccessStepProps) => {
  return (
    <>
      <header className="relative w-full">
        <CloseButton />
      </header>

      <main className="flex flex-col items-center py-10 w-[304px]">
        <img src={successIcon} alt="" className="mb-[10px]" />
        <span className="text-xl font-medium">Agradecemos o feedback</span>
      </main>
      <button
        onClick={onFeedbackRestartRequested}
        className="py-2 px-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none ease-linear focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
      >
        Quero enviar outro
      </button>
    </>
  );
};
