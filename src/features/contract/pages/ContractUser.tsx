import {  Button, Card, Tabs, Text } from "@mantine/core";
import { Contract } from "../types/contract";
import { modals } from "@mantine/modals";
import { DetailContract } from "../components/DetailContract";

export const ContractUser = () => {
    var items: Contract[] = [
        {
            contract_code: "TEST-114",
            contract_id: 1,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur nemo ratione ad corporis sequi explicabo totam autem aut inciduntll',
            title: 'Pemasangan Video Tron',
            customer_name: 'Budi',
            end_date: "17/03/24",
            start_date: '15/03/23',
            no: 1,
            product_name: "Video Tron"
        },
        {
            contract_code: "TEST-114",
            contract_id: 2,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur nemo ratione ad corporis sequi explicabo totam autem aut inciduntll',
            title: 'Pemasangan Video Tron',
            customer_name: 'Budi',
            end_date: "17/03/24",
            start_date: '15/03/23',
            no: 2,
            product_name: "Video Tron"
        }
    ] 
    const handleDetail = (contract: Contract) => {
        modals.open ({
            title: "Detail Kontrak",
            size: 'lg',
            children: (
                <DetailContract contract={contract}/>
            )
            
        })
    }
  return (
    <Tabs.Panel value="contract" className="p-5 lg:p-10">
    <div className="text-2xl lg:text-3xl mb-5">Contract Anda</div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
    {items.map((contract) => (
        <Card key={contract.contract_id} shadow="sm" padding="lg" radius="md" withBorder>
        <Text fw={500} size='xl'>{contract.title}</Text>
        <Text size="sm" c="dimmed">{contract.description}</Text>
        <div className="flex space-x-2">
          <Button color="blue" fullWidth mt="md" radius="md" onClick={() => handleDetail(contract)}>
            Detail
          </Button>
          <Button variant="outline" color="red" fullWidth mt="md" radius="md">
            Keluhkan
          </Button>
        </div>
      </Card>
    ))}
    </div>
  </Tabs.Panel>
  );
};
