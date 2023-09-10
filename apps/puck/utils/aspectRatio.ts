export const aspectRatio = {
  "16/9": "16 / 9",
  "9/16": "9 / 16",
  "1/1": "1 / 1",
  "3/4": "3 / 4",
  "4/3": "4 / 3",
  "2/3": "2 / 3",
  "2/1": "2 / 1",
} as const

export const selectAspectRatios = Object.keys(aspectRatio).map((key) => ({
  value: key,
  label: key,
}))
