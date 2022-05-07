import { useState } from "react";

import bugImageUrl from "../../assets/Bug.svg";
import ideaImageUrl from "../../assets/Idea.svg";
import thoughtImageUrl from "../../assets/Thought.svg";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackOptions = {
  bug: {
    label: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  idea: {
    label: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de um lâmpada",
    },
  },
  other: {
    label: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackOptions;

export const WidgetForm: React.FC = () => {
  const [feedbackOption, setFeedbackOption] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleRestartFeedback = () => {
    setFeedbackOption(null);
    setFeedbackSent(false);
  };

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto min-h-[310px]">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackOption ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackOption} />
          ) : (
            <FeedbackContentStep
              selectedFeedback={feedbackOption}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="mt-10">
        <span className="text-xs text-neutral-400">
          Feito com &#10084; por{" "}
          <a href="https://github.com/gustavobtflores" className="underline underline-offset-2">
            Gustavo
          </a>
        </span>
      </footer>
    </div>
  );
};
