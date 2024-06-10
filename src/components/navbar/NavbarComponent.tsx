import {
  Group,
  Button,
  UnstyledButton,
  Text,
  ThemeIcon,
  Divider,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Avatar,
  Menu,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconLogout,
  IconUser,
} from "@tabler/icons-react";
import classes from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Authorization } from "@/features/auth/components/Authorization";

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export function NavbarComponent() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened] = useDisclosure(false);
  const theme = useMantineTheme();
  const navigate = useNavigate();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.colors.blue[6]}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box className="shadow-sm m-4 rounded-3xl fixed top-0 left-0 right-0 bg-white z-50">
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <img className="h-10 w-30" src="/logo.png" alt="Logo Chand Banua" />

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link}>
              Home
            </a>
            <a href="/Product" className={classes.link}>
              Product
            </a>
            <a href="/portofolio" className={classes.link}>
              Portofolio
            </a>
            <a href="/Videolist" className={classes.link}>
              Video
            </a>
          </Group>
          <Authorization role={["-Admin", "-Customer", "-Customer"]}>
            <Group visibleFrom="sm">
              <Link to={"/login"}>
                <Button>Log in</Button>
              </Link>
              <Link to={"/register"}>
                <Button variant="default">Sign up</Button>
              </Link>
            </Group>
          </Authorization>

          <Authorization role={["Admin", "Customer", "SuperAdmin"]}>
            <Menu withArrow>
              <Menu.Target>
                <Avatar src={"/user_default.png"} />
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Menu Profile</Menu.Label>
                <Menu.Item
                  leftSection={
                    <IconUser style={{ width: rem(14), height: rem(14) }} />
                  }
                >
                  Profile
                </Menu.Item>
                <Menu.Item
                  leftSection={
                    <IconLogout style={{ width: rem(14), height: rem(14) }} />
                  }
                >
                  Log Out
                </Menu.Item>

                <Menu.Divider />
              </Menu.Dropdown>
            </Menu>
          </Authorization>

          <Burger
            opened={drawerOpened}
            color="dark"
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="/" className={classes.link}>
            Home
          </a>
          {/* <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton> */}
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="/Product" className={classes.link}>
            Product
          </a>
          <a href="/portofolio" className={classes.link}>
            Portofolio
          </a>
          <a href="/videolist" className={classes.link}>
            Video
          </a>

          <Divider my="sm" />
          <Authorization role={["-Customer", "-Admin", "-SuperAdmin"]}>
            <Group justify="center" grow pb="xl" px="md">
              <Button onClick={() => navigate("/login")}>Log in</Button>
              <Button variant="default" onClick={() => navigate("/login")}>
                Sign up
              </Button>
            </Group>
          </Authorization>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
