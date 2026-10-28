// Wrap every top-level bullet list in <v-clicks> so bullets reveal one click at
// a time without anyone having to write the tag. Nested bullets ride along with
// their parent. Slidev runs this on each slide's raw markdown before parsing.

const TOP_BULLET = /^\s{0,1}[-*+] |^\s{0,1}\d+[.)] /;

function wrapLists(ctx: any) {
  // Opt out per slide (`autoClicks: false` in that slide's frontmatter) or
  // for the whole deck (`autoClicks: false` in the deck's headmatter).
  const slideAutoClicks = ctx.slide?.frontmatter?.autoClicks;
  const deckAutoClicks = ctx.options?.data?.headmatter?.autoClicks;
  if (slideAutoClicks === false || (slideAutoClicks == null && deckAutoClicks === false)) return;

  const src: string = ctx.s.original;
  const lines = src.split('\n');

  // Byte offset of the start of each line.
  const offsets: number[] = [];
  let at = 0;
  for (const line of lines) {
    offsets.push(at);
    at += line.length + 1;
  }

  let i = 0;
  // A slide's own frontmatter is not content: YAML lists would match TOP_BULLET.
  if (lines[0]?.trim() === '---') {
    i = 1;
    while (i < lines.length && lines[i].trim() !== '---') i++;
    i++;
  }

  let inFence = false;
  let manual = 0; // depth of hand-written <v-clicks> / <v-click> blocks

  while (i < lines.length) {
    const line = lines[i];

    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      i++;
      continue;
    }
    if (inFence) {
      i++;
      continue;
    }
    if (/<v-clicks?[\s>]/.test(line)) manual++;
    if (/<\/v-clicks?>/.test(line)) manual--;
    if (manual > 0 || !TOP_BULLET.test(line)) {
      i++;
      continue;
    }

    // Consume the list: bullets plus their indented continuation lines, and
    // blank lines that are followed by more of the same list.
    const start = i;
    let end = i;
    while (i < lines.length) {
      const l = lines[i];
      if (TOP_BULLET.test(l) || /^\s+\S/.test(l)) {
        end = i;
        i++;
      } else if (l.trim() === '') {
        i++;
      } else break;
    }

    ctx.s.appendLeft(offsets[start], '<v-clicks>\n\n');
    const endOffset = offsets[end] + lines[end].length;
    ctx.s.appendRight(endOffset, '\n\n</v-clicks>');
  }
}

export default () => ({post: [wrapLists]});
