// node slides/setup/transformers.test.mjs
import assert from 'node:assert/strict';
import setup from './transformers.ts';

// Stand-in for MagicString: only the three methods the transformer uses.
class Edits {
  constructor(original) { this.original = original; this.ins = []; }
  appendLeft(at, text) { this.ins.push([at, 0, text]); }
  appendRight(at, text) { this.ins.push([at, 1, text]); }
  toString() {
    let out = '', last = 0;
    for (const [at, , text] of [...this.ins].sort((a, b) => a[0] - b[0] || a[1] - b[1])) {
      out += this.original.slice(last, at) + text;
      last = at;
    }
    return out + this.original.slice(last);
  }
}

const [wrap] = setup().post;
const run = (src, extra = {}) => {
  const s = new Edits(src);
  wrap({s, ...extra});
  return s.toString();
};

// Top-level list gets wrapped; nested bullets ride along inside the same block.
const out = run('## Title\n\n- one\n  - nested\n- two\n\ntext\n');
assert.equal(out.match(/<v-clicks>/g).length, 1);
assert.match(out, /<v-clicks>\n\n- one\n  - nested\n- two\n\n<\/v-clicks>/);

// Frontmatter YAML lists are not content.
assert.ok(!run('---\ntags:\n- a\n- b\n---\n\n# Hi\n').includes('v-clicks'));

// Code fences are left alone.
assert.ok(!run('```md\n- not a bullet\n```\n').includes('v-clicks'));

// Hand-written <v-clicks> is not double-wrapped.
assert.equal(run('<v-clicks>\n\n- one\n\n</v-clicks>\n').match(/<v-clicks>/g).length, 1);

// Deck headmatter `autoClicks: false` turns off auto-wrapping for the deck.
assert.ok(!run('- one\n', {options: {data: {headmatter: {autoClicks: false}}}}).includes('v-clicks'));

// A slide's own `autoClicks: false` overrides the deck default either way.
assert.ok(!run('- one\n', {slide: {frontmatter: {autoClicks: false}}}).includes('v-clicks'));
assert.ok(run('- one\n', {
  slide: {frontmatter: {autoClicks: true}},
  options: {data: {headmatter: {autoClicks: false}}},
}).includes('v-clicks'));

console.log('✓ transformers');
