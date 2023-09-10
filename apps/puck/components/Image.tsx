import { aspectRatio as twAspectRatio } from "@utils/aspectRatio"

// Tailwind needs full string to match the search
const aspect: Record<keyof typeof twAspectRatio, string> = {
  "16/9": "aspect-16/9",
  "9/16": "aspect-9/16",
  "1/1": "aspect-1/1",
  "3/4": "aspect-3/4",
  "4/3": "aspect-4/3",
  "2/3": "aspect-2/3",
  "2/1": "aspect-2/1",
} as const

const alignClasses = {
  left: "",
  center: "mx-auto",
  right: "ml-auto",
}

export function Image({
  src,
  alt,
  maxWidth,
  aspectRatio,
  align,
}: {
  src: string
  alt: string
  maxWidth: number
  aspectRatio: keyof typeof twAspectRatio
  align: keyof typeof alignClasses
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      decoding='async'
      loading='lazy'
      src={src}
      alt={alt}
      className={`${aspect[aspectRatio]} flex h-auto w-full ${alignClasses[align]}`}
      style={{ maxWidth: `${maxWidth}%` }}
    />
  )
}
