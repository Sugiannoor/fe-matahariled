import { Tabs, TextInput, Textarea } from '@mantine/core'

export const ProfileForm = () => {
  return (
    <Tabs.Panel value="profile" className="p-5 lg:p-10">
      <div className="flex justify-center my-28">
        <img
          className="h-48 w-48 rounded-full object-cover object-center"
          src="/user_default.png"
          alt="User image"
        />
      </div>
      <TextInput
        label="Nama Lengkap"
        mt={20}
        value={"Akhmad Sugiannoor"}
        readOnly
      />
      <TextInput label="Username" mt={20} value={"Akhmad123"} readOnly />
      <TextInput
        label="Email"
        mt='md'
        value={"AkhmadSugiannoor@gmail.com"}
        readOnly
      />
      <TextInput label="Nomor Telephone" mt='md' value={"+62481231241"} readOnly />
      <TextInput
        label="Nama Lengkap"
        mt='md'
        value={"Akhmad Sugiannoor"}
        readOnly
      />
      <Textarea
        label="Alamat"
        value={"Jl. Kuin Selatan"}
        mt='md'
        readOnly
      />
    </Tabs.Panel>
  )
}
