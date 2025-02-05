import { Avatar, Image, Layout, Menu, MenuProps } from 'antd'
import { DocumentFilter, Folder, Home3, Setting2 } from 'iconsax-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import VietNamFlagIcon from '@/assets/icons/vietnamese.svg'
import LogoIcon from '@/assets/logo.svg'

const { Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  {
    key: 'dashboard',
    label: 'Tổng quan',
    icon: <Home3 variant="Bulk" />,
  },
  {
    key: 'dataExploit',
    label: 'Khai thác dữ liệu',
    icon: <DocumentFilter variant="Bulk" />,
  },
  {
    key: 'management',
    label: 'Quản lý',
    icon: <Folder variant="Bulk" />,
    children: [
      { key: 'customers', label: 'Khách hàng', className: '!pl-8' },
      { key: 'devices', label: 'Thiết bị', className: '!pl-8' },
      { key: 'bills', label: 'Hóa đơn', className: '!pl-8' },
    ],
  },
  {
    key: 'setting',
    label: 'Cấu hình',
    icon: <Setting2 variant="Bulk" />,
  },
]

type MainLayoutProps = {
  children: React.ReactNode
}

const HeaderLogo = () => (
  <div className="flex max-h-[56px] items-center gap-2 px-4 py-3">
    <img className="h-8 w-auto" src={LogoIcon} alt="logo" />
    <b className="text-[16px]">iLotusLand JSC</b>
  </div>
)

const FooterSetting = () => (
  <div className="absolute left-0 bottom-0 w-full border-t-2 px-4 py-3">
    <div className="flex items-center justify-between">
      <Avatar
        size={32}
        src={<Image preview={false} src="https://joeschmoe.io/api/v1/random" />}
      />

      <Image
        preview={false}
        alt="VietNamFlagIcon"
        src={VietNamFlagIcon}
        className="h-5 w-auto"
      />
    </div>
  </div>
)

export const MainLayout = ({ children }: MainLayoutProps) => {
  const navigate = useNavigate()
  // const [collapsed, setCollapsed] = useState<boolean>(false)

  // const handleCollapseSider = (collapsed: boolean) => {
  //   setCollapsed(collapsed)
  // }

  return (
    <Layout hasSider>
      <Sider
        // collapsible
        // collapsed={collapsed}
        // onCollapse={handleCollapseSider}
        theme="light"
        className="fixed left-0 top-0 bottom-0 h-[100vh] overflow-auto shadow-lg"
      >
        <HeaderLogo />

        <div className="h-1 w-full bg-gray-200" />

        <Menu
          mode="inline"
          items={items}
          inlineIndent={0}
          className="p-4 pr-0"
          defaultOpenKeys={['dashboard']}
          defaultSelectedKeys={['dashboard']}
          onClick={({ key }) => navigate(key)}
        />

        <FooterSetting />
      </Sider>

      <Layout className="ml-[200px]">{children}</Layout>
    </Layout>
  )
}
