import ClientPresentationApp from '../components/ClientPresentationApp'
import type { TabId } from '../components/ClientPresentationApp'

const CLIENT_NAME = 'Omint'
const CLIENT_LOGO = '/images/logo-omint.png'

export default function OmintApp() {
  const visibleTabs: TabId[] = ['objetivo', 'results', 'product', 'value', 'implement']

  return (
    <ClientPresentationApp
      clientName={CLIENT_NAME}
      clientLogo={CLIENT_LOGO}
      homePath="/"
      visibleTabs={visibleTabs}
      initialTab="objetivo"
    />
  )
}
