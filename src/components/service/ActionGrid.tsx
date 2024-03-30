import {
    Card,
    Text,
    SimpleGrid,
    UnstyledButton,
    Anchor,
    Group,
    useMantineTheme,
  } from '@mantine/core';
  import {
    IconCreditCard,
    IconBuildingBank,
    IconRepeat,
    IconReceiptRefund,
    IconReceipt,
    IconReceiptTax,
    IconReport,
    IconCashBanknote,
    IconCoin,
  } from '@tabler/icons-react';
  import classes from './Action.module.css';
  
  const mockdata = [
    { title: 'Credit cards', icon: IconCreditCard, color: 'violet' },
    { title: 'Banks nearby', icon: IconBuildingBank, color: 'indigo' },
    { title: 'Transfers', icon: IconRepeat, color: 'blue' },
    { title: 'Refunds', icon: IconReceiptRefund, color: 'green' },
    { title: 'Receipts', icon: IconReceipt, color: 'teal' },
    { title: 'Taxes', icon: IconReceiptTax, color: 'cyan' },
    { title: 'Reports', icon: IconReport, color: 'pink' },
    { title: 'Payments', icon: IconCoin, color: 'red' },
    { title: 'Cashback', icon: IconCashBanknote, color: 'orange' },
  ];
  
  export function ActionsGrid() {
    const theme = useMantineTheme();
  
    const items = mockdata.map((item) => (
      <UnstyledButton key={item.title} className={classes.item}>
        <item.icon color={theme.colors[item.color][6]} size="4rem" />
        <Text size="xs" mt={7}>
          {item.title}
        </Text>
      </UnstyledButton>
    ));
  
    return (
      <Card withBorder radius="md" className='bg-gray-50'>
          <Text variant='filled' color='blue' className="text-center text-6xl font-bold">Services</Text>
        <SimpleGrid cols={3} mt="md" className='w-[80%] mx-auto'>
          {items}
        </SimpleGrid>
      </Card>
    );
  }