import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";
import { Affix,  Transition, } from "@mantine/core";

export function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <IconArrowUp
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              size={35}
              color="white"
              className="bg-[#238BE6] rounded-full cursor-pointer p-1"
            />
          )}
        </Transition>
      </Affix>
    </>
  );
}
