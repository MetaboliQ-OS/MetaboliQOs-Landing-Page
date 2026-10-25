import type { Metadata } from "next";
import { ArticleCard } from "@/components/site/ArticleCard";
import { VideoEmbed } from "@/components/site/VideoEmbed";
import { ActionLink, PageIntro, Section } from "@/components/site/ui";
import { articles } from "@/lib/articles";
import { socialChannels } from "@/lib/nav";
import { createPageMetadata } from "@/lib/seo";
import { founderVideos, youtubeChannel } from "@/lib/v1-content";

export const metadata: Metadata = createPageMetadata({
  title: "Media & Events | MetaboliQ OS",
  description:
    "Videos, articles, event appearances and discussions about metabolic health, personalised decisions and longevity.",
  path: "/media-events",
});

/**
 * No verified events, webinars or archive entries exist yet, so those sections
 * show "Updates coming soon" rather than invented dates (§10 build notes).
 */
const pending = [
  { id: "upcoming", title: "Upcoming Events", line: "See where we are speaking or taking part next." },
  { id: "past", title: "Past Events", line: "Highlights and reflections from previous events." },
  { id: "webinars", title: "Webinars", line: "Join a conversation and explore the ideas in more detail." },
  { id: "archive", title: "Archive", line: "Browse earlier updates and recordings." },
];

export default function MediaEventsPage() {
  return (
    <>
      <PageIntro eyebrow="Media & Events" title="Conversations, Research and the Journey Behind MetaboliQ OS.">
        <p>
          Explore our videos, articles, event appearances and discussions about metabolic health, personalised decisions
          and longevity.
        </p>
      </PageIntro>

      <Section id="youtube" eyebrow="YouTube" title="Watch our videos.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {founderVideos.map((v) => (
            <VideoEmbed key={v.id} id={v.id} title={v.title} />
          ))}
        </div>
        <div className="mt-6">
          <ActionLink action={{ label: "Visit the MetaboliQ OS channel", href: youtubeChannel, external: true }} variant="text" />
        </div>
      </Section>

      <Section id="articles" tone="alt" eyebrow="Articles" title="Read our latest thinking.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 3).map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
        <div className="mt-6">
          <ActionLink action={{ label: "View All Articles", href: "/learn" }} variant="text" />
        </div>
      </Section>

      <Section eyebrow="Events" title="Events and webinars.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pending.map((p) => (
            <div key={p.id} id={p.id} className="scroll-mt-28 rounded-2xl border border-dashed border-[var(--line-strong)] p-5">
              <h3 className="text-[1.2rem] font-semibold text-text-primary">{p.title}</h3>
              <p className="mt-1 text-sm text-text-muted">{p.line}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[var(--gold-ink)]">Updates coming soon</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="social" tone="alt" eyebrow="Social media" title="Follow the journey and join the conversation.">
        <ul className="flex flex-wrap gap-2.5">
          {socialChannels.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost px-5 py-3 text-sm"
              >
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
