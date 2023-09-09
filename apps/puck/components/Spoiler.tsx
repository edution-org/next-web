import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion"

export function Spoiler({ title, content }) {
    return (
        <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent>{content}</AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
