import ClientPresentationApp from '../components/ClientPresentationApp'

interface ZurichAppProps {
  homePath?: string
}

export default function ZurichApp({ homePath = '/zurich' }: ZurichAppProps) {
  return (
    <ClientPresentationApp
      clientName="Aseguradora"
      clientLogo={undefined}
      homePath={homePath}
      initialTab="results"
      visibleTabs={['results', 'product', 'implement']}
    />
  )
}
