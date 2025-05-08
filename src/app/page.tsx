"use client";

import Content from "@/content/neverjust.mdx";
import ChatMessage from "./components/ChatMessage";

export default function MDXPage() {
  return (
    <div className="prose prose-neutral">
      <Content components={{ ChatMessage }} />
    </div>
  );
}
