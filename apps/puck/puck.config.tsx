import type { Config } from "@measured/puck"
import { selectAspectRatios } from "@utils/aspectRatio"
import { Image } from "components/Image"
import { Link } from "components/Link"
import { Spoiler } from "components/Spoiler"

import { Root } from "./components/Root"
import { Typography } from "./components/Typography"

// TODO: Better Type Inference
type Props = {
  Typography: PropsFrom<typeof Typography>
  Spoiler: PropsFrom<typeof Spoiler>
  Link: PropsFrom<typeof Link>
  Image: PropsFrom<typeof Image>
}

export const config = {
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
    Link: {
      fields: {
        href: { type: "text" },
        content: { type: "text" },
      },
      defaultProps: {
        href: "/",
        content: "Internal Link",
      },
      render: Link,
    },
    Image: {
      fields: {
        src: { type: "text" },
        alt: { type: "text" },
        aspectRatio: { type: "select", options: selectAspectRatios },
        align: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        maxWidth: { type: "number" },
      },
      defaultProps: {
        src: "https://picsum.photos/200/300",
        alt: "Description of the image",
        aspectRatio: "16/9",
        align: "left",
        maxWidth: 100,
      },
      render: Image,
    },
  },
} satisfies Config<Props>

export default config
