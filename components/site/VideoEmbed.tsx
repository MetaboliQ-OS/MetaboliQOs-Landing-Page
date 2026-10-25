"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Click-to-play YouTube video (§13: poster image, captions, click-to-play; the
 * page stays usable without playing it). Nothing loads from YouTube until the
 * visitor presses play, and the privacy-enhanced domain is used.
 */
export function VideoEmbed({ id, title, caption }: { id: string; title: string; caption?: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="w-full">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[var(--line-strong)] bg-black shadow-[var(--shadow-card)]">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&cc_load_policy=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full"
            aria-label={`Play video: ${title}`}
          >
            <Image
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              fill
              sizes="(max-width: 1024px) 92vw, 560px"
              className="object-cover opacity-90 transition group-hover:opacity-100"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" aria-hidden />
            <span
              className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#c9a84c] text-[#0d0d0d] shadow-[0_6px_30px_rgba(0,0,0,0.5)] transition group-hover:scale-105"
              aria-hidden
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
            </span>
            <span className="absolute inset-x-0 bottom-0 p-4 text-left text-sm font-semibold text-white">{title}</span>
          </button>
        )}
      </div>
      {caption ? <figcaption className="mt-2 text-xs text-text-muted">{caption}</figcaption> : null}
    </figure>
  );
}
