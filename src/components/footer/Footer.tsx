import { Text, Container, ActionIcon, Group, rem } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";

const data = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Support", link: "#" },
      { label: "Forums", link: "#" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Media assets", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join Discord", link: "#" },
      { label: "Follow on Twitter", link: "#" },
      { label: "Email newsletter", link: "#" },
      { label: "GitHub discussions", link: "#" },
    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className="text-sm font-raleway text-gray-400 block py-2 hover:underline"
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className="" key={group.title}>
        <Text className="font-semibold text-lg">{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className="p-5">
      <Container className="flex flex-col lg:flex-row justify-between">
        <div className="">
          <img src="/logo.png" alt="logo chand banua" className="h-25 w-40" />
          <Text size="xs" c="dimmed" className="">
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className="flex gap-20 flex-row lg: mt-5">{groups}</div>
      </Container>
      <div className="w-[80%] mx-auto h-[0.10rem] bg-gray-200 my-5"></div>
      <Container className="flex justify-between">
        <Text c="dimmed" size="sm">
          © 2024 Matahariled. All rights reserved.
        </Text>

        <Group gap={0} className="" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
