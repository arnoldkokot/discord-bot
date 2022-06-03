import { Accordion, AccordionTab } from "primereact/accordion";
export default function Questions() {
  return (
    <Accordion activeIndex={0}>
      <AccordionTab header="Do I need to assign bot any permissions?">
        <p>No, permissions will be assigned during invitation</p>
      </AccordionTab>
      <AccordionTab header="Can i invite bot to someone else's discord server">
        <p>
          Yes, if you have permission to do so from the owner. Available servers
          will appear during invitation process, if you don't find your desired
          one you probably do not have sufficient permissions.
        </p>
      </AccordionTab>
      <AccordionTab header="Bot does not respond to my commands">
        <p>
          Only tagging bot triggers commands (e.g. !pause won't work, you should
          use "@Daiji pause"). @everyone and direct messages are also ignored.
        </p>
      </AccordionTab>
      <AccordionTab
        header={`"Video unavailable" error occurs when i try to play something from youtube`}
      >
        <p>
          Check if the song is set to public, if it is, some songs still may be
          unplayable duo to Youtube copyright law.
        </p>
      </AccordionTab>
      <AccordionTab header="Bot appears offline and does not respond">
        <p>
          If its offline it is probably due to maintenance, kicking and
          re-inviting bot might help.
        </p>
      </AccordionTab>
    </Accordion>
  );
}
