# Image Asset Guide

Governs every image under `public/images/`. Applies to all four
subfolders: `gallery/`, `recruiters/`, `students/`, `college/`.

## Folder registry

| Folder        | Contents                                   | Referenced from                                          |
| ------------- | ------------------------------------------- | --------------------------------------------------------- |
| `gallery/`    | Event photographs (drives, training, etc.)  | `constants/gallery.ts` (`src`)                             |
| `recruiters/` | Recruiter logos                             | `constants/recruiters.ts` (`logoSrc`)                      |
| `students/`   | Student photographs (testimonials/stories)  | `constants/testimonials.ts`, `constants/success-stories.ts`|
| `college/`    | Campus/building photography, OG image       | Hero background, About section, `lib/metadata.ts`          |

A file placed here without a matching constants entry (or vice versa) is
a broken reference — keep the two in sync.

## Required sizes & aspect ratio

| Folder        | Dimensions (px)     | Aspect ratio | Format          |
| ------------- | -------------------- | ------------ | --------------- |
| `gallery/`    | 1600 × 1067           | 3:2          | JPEG or WebP     |
| `recruiters/` | 320 × 160 (logo, transparent) | — (logo mark, not cropped) | PNG or SVG |
| `students/`   | 480 × 480             | 1:1          | JPEG or WebP     |
| `college/`    | 1920 × 1080 (hero); 1200 × 630 (OG image) | 16:9 | JPEG or WebP |

Export at 2x the largest on-screen display size the design system uses
for that slot, then compress (below) rather than upscaling a smaller
source image.

## File naming

Lowercase, hyphen-separated, no spaces, matching the `src` value in the
corresponding constants file exactly.

- **Gallery:** `{category}-{slug}-{yyyy-mm-dd}-{sequence}.jpg`
  e.g. `drive-tcs-2025-10-14-01.jpg`, `training-gd-session-2025-08-05-01.jpg`
  Category matches `GalleryItem["category"]`: `drive`, `training`,
  `internship`, `event`.
- **Recruiters:** `{recruiter-id}.png` using the same `id` as in
  `constants/recruiters.ts`, e.g. `tcs.png`, `lnt-construction.png`.
- **Students:** `{success-story-or-testimonial-id}.jpg`, e.g.
  `story-1.jpg`, matching the `id` field of the source record.
- **College:** `{purpose}-{variant}.jpg`, e.g. `hero-background.jpg`,
  `og-default.jpg`, `about-main-building.jpg`.

Never reuse a filename for a different photograph — replace the file's
content or increment the sequence number, so cached URLs don't serve
stale images to returning visitors.

## Compression guidelines

- Target **under 200 KB** for gallery/college photos, **under 40 KB**
  for recruiter logos, **under 100 KB** for student portraits.
- Run everything through `squoosh.app` or `sharp`/`imagemin` before
  committing; do not commit an unoptimized camera/phone export.
- Prefer WebP where the source allows transparency or the size saving
  is significant; JPEG (quality 75–82) is acceptable for photographs.
- Recruiter logos should be PNG with a transparent background, or SVG
  if the recruiter supplies a vector mark — never a logo on a white
  square background.
- Always render through `next/image` with explicit `width`/`height` (or
  `fill` inside a sized parent) so Next.js's own resizing/format
  negotiation applies on top of the source compression.

## Alt-text strategy

Two distinct fields exist for gallery images — do not collapse them:

- **`caption`** (visible, shown under the image): names the event,
  companies, or program, in the institutional tone used across the
  site — this is where "Tata Consultancy Services campus drive,
  October 2025" belongs.
- **`alt`** (screen-reader only, not visible): describes what the
  photograph actually shows, in plain visual terms — composition,
  people, setting — without repeating the event name already in the
  caption. Keep it under ~120 characters and avoid "image of" /
  "photo of" prefixes.

For `recruiters/` logos, alt text is the plain company name (e.g.
`"Tata Consultancy Services logo"`), generated from `Recruiter.name` —
no separate field needed.

For `students/` portraits used alongside a testimonial or success
story, alt text is `"{name}, {branch}"`, generated from the existing
record fields — no separate field needed.

## Consent

Any photograph in `students/` or `gallery/` that shows an identifiable
student requires that student's written consent on file with the T&P
Office before publishing. This applies regardless of how the photograph
was obtained (department camera, WhatsApp group, recruiter-provided).
See `students/README.md`.
