import { CloseButton } from "../../CloseButton";
import { feedbackOptions, FeedbackType } from "..";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export const FeedbackTypeStep = ({ onFeedbackTypeChanged }: FeedbackTypeStepProps) => {
  return (
    <>
      <header className="flex items-center justify-center relative mb-8 w-full">
        <span className="text-xl font-medium leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <section className="flex gap-2">
        {Object.entries(feedbackOptions).map(([key, option]) => {
          return (
            <button
              key={key}
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              className="flex flex-col justify-center items-center p-2 rounded-lg bg-[#27272A] w-24 h-28 border-2 border-transparent transition-all ease-linear hover:border-brand-500 flex-1 focus:border-brand-500 focus:outline-none"
            >
              <img className="mb-2" src={option.image.source} alt={option.image.alt} />
              <span>{option.label}</span>
            </button>
          );
        })}
      </section>
    </>
  );
};
