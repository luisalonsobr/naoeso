"use client";

interface ChatMessageProps {
  name: string;
  time: string;
  message: string;
  isRight?: boolean;
}

export default function ChatMessage({
  name,
  time,
  message,
  isRight = false,
}: ChatMessageProps) {
  return (
    <div className={`flex ${isRight ? "justify-end" : "justify-start"} mb-4`}>
      <div className={`max-w-[80%] ${isRight ? "order-2" : "order-1"}`}>
        <div
          className={`flex items-center gap-2 mb-1 ${
            isRight ? "justify-end" : "justify-start"
          }`}
        >
          <span className="text-sm font-medium">{name}</span>
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            {time}
          </span>
        </div>
        <div
          className={`rounded-lg px-4 py-2 ${
            isRight
              ? "bg-blue-500 text-white dark:bg-blue-600"
              : "bg-neutral-200 dark:bg-neutral-800"
          }`}
        >
          {message}
        </div>
      </div>
    </div>
  );
}
