import { ArrowLeft } from "phosphor-react";
import { CloseButton } from "../../CloseButton";
import { feedbackOptions, FeedbackType } from "..";
import { ScreenshotButton } from "../ScreenshotButton";
import { FormEvent, useState } from "react";

interface FeedbackContentStepProps {
  selectedFeedback: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export const FeedbackContentStep = ({
  selectedFeedback,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) => {
  const feedbackOptionInfo = feedbackOptions[selectedFeedback];
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");

  const handleSubmitFeedback = (event: FormEvent) => {
    event.preventDefault();
    console.log(comment, screenshot);

    onFeedbackSent();
  };

  return (
    <>
      <header className="flex items-center justify-center relative mb-8 w-full gap-2">
        <button className="absolute left-0" onClick={onFeedbackRestartRequested}>
          <ArrowLeft className="text-zinc-400 hover:text-zinc-100" weight="bold" />
        </button>
        <img className="w-6 h-6" src={feedbackOptionInfo.image.source} alt={feedbackOptionInfo.image.alt} />
        <span className="text-xl font-medium leading-6">{feedbackOptionInfo.label}</span>
        <CloseButton />
      </header>

      <section className="flex flex-col gap-2">
        <form className="w-full" onSubmit={handleSubmitFeedback}>
          <textarea
            className="min-w-[304px] min-h-[112px] text-sm w-full placeholder-zinc-600 text-zinc-100 border-[#52525B] border resize-none bg-transparent focus:outline-none focus:border-brand-500 focus:ring-brand-500 focus:ring-1 rounded-[4px] scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
            placeholder="Conte com detalhes o que está acontecendo..."
            onChange={(event) => setComment(event.target.value)}
          />
          <footer className="flex gap-2">
            <ScreenshotButton screenshot={screenshot} onScreenshotTook={setScreenshot} />

            <button
              type="submit"
              className="p-2 bg-brand-500 flex-1 rounded-md border-transparent flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none transition-colors ease-linear focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
              disabled={comment.length <= 0}
            >
              Enviar feedback
            </button>
          </footer>
        </form>
      </section>
    </>
  );
};
