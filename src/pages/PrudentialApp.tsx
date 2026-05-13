import ClientPresentationApp from '../components/ClientPresentationApp'
import type { TabId } from '../components/ClientPresentationApp'

const CLIENT_NAME = 'Aseguradora'

export default function PrudentialApp() {
  const visibleTabs: TabId[] = ['objetivo', 'results', 'product', 'value', 'implement']

  return (
    <ClientPresentationApp
      clientName={CLIENT_NAME}
      clientLogo={undefined}
      homePath="/aseguradora"
      visibleTabs={visibleTabs}
      initialTab="objetivo"
      hero={{
        eyebrow: 'Propuesta de colaboración',
        title: (
          <>
            Prevención, bienestar y valor cotidiano para <span className="font-semibold">Aseguradora</span>
          </>
        ),
        description:
          'Fisify convierte la fisioterapia digital en una experiencia de prevención y bienestar que el asegurado usa en su día a día y asocia al valor del seguro.',
        image: '/images/new-hero-2.png',
        imageAlt: 'Fisioterapia digital para aseguradoras',
      }}
      footer={{
        description:
          'Fisify ayuda a tangibilizar el valor del seguro con una experiencia de prevención y bienestar que el asegurado utiliza en su día a día.',
        bottomText: '© 2026 Fisify. Propuesta de colaboración para la aseguradora.',
      }}
    />
  )
}
