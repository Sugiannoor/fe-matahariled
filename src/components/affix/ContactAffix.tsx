import { IconBrandWhatsapp } from "@tabler/icons-react";
import { Affix } from "@mantine/core";

export function ContactAffix() {

  return (
    <>
      <Affix position={{ bottom:80, right: 20 }}>
      <IconBrandWhatsapp
              size={40}
              color="white"
              className="bg-[#238BE6] rounded-full cursor-pointer p-1"
            />
      </Affix>
    </>
  );
}
