import { DataComplaintUser } from '@/features/complaints/pages/ComplaintUser'
import { Tabs } from '@mantine/core'

export const ComplaintForm = () => {
  return (
    <Tabs.Panel value='history' className="p-5 lg:p-10">
        <DataComplaintUser/>
    </Tabs.Panel>
  )
}
