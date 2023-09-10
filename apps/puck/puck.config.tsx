import type { Config } from "@measured/puck"
import { Spoiler } from "components/Spoiler"

import { Root } from "./components/Root"
import { Typography } from "./components/Typography"

// TODO: Better Type Inference
type Props = {
  Typography: PropsFrom<typeof Typography>
  Spoiler: PropsFrom<typeof Spoiler>
}

export const config: Config<Props> = {
  root: {
    render: Root,
  },
  components: {
    Typography: {
      fields: {
        text: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "Heading 1", value: "h1" },
            { label: "Heading 2", value: "h2" },
            { label: "Heading 3", value: "h3" },
            { label: "Heading 4", value: "h4" },
            { label: "Text", value: "text" },
            { label: "Quote", value: "quote" },
          ],
        },
      },
      defaultProps: {
        text: "This is example text",
        variant: "text",
      },
      render: Typography,
    },
    Spoiler: {
      fields: {
        title: { type: "text" },
        content: { type: "text" },
      },
      defaultProps: {
        title: "Spoiler Title",
        content: "Spoiler Content",
      },
      render: Spoiler,
    },
  },
}

export default config
