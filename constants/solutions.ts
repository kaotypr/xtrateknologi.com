export type SolutionType = {
  title_dictionary: string
  description_dictionary: string
  illustration_image: string
  link: string
}

export const XTRA_MAIN_SOLUTION: SolutionType[] = [
  {
    title_dictionary: 'solutions.main.business.title',
    description_dictionary: 'solutions.main.business.description',
    illustration_image: '/static/images/illustrations/business.png',
    link: '/solutions#business',
  },
  {
    title_dictionary: 'solutions.main.it.title',
    description_dictionary: 'solutions.main.it.description',
    illustration_image: '/static/images/illustrations/it.png',
    link: '/solutions#it',
  },
  {
    title_dictionary: 'solutions.main.electrical.title',
    description_dictionary: 'solutions.main.electrical.description',
    illustration_image: '/static/images/illustrations/electrical.png',
    link: '/solutions#electrical',
  },
]

export const XTRA_CAROUSEL_SOLUTION: SolutionType[] = [
  {
    title_dictionary: 'solutions.it.hardware_supply.title',
    description_dictionary: 'solutions.it.hardware_supply.description',
    illustration_image: '/static/images/illustrations/hardware-supply.png',
    link: '/solutions#it-hardware-supply',
  },
  {
    title_dictionary: 'solutions.it.cctv.title',
    description_dictionary: 'solutions.it.cctv.description',
    illustration_image: '/static/images/illustrations/cctv.png',
    link: '/solutions#it-cctv',
  },
  {
    title_dictionary: 'solutions.it.network_security.title',
    description_dictionary: 'solutions.it.network_security.description',
    illustration_image: '/static/images/illustrations/network-security.png',
    link: '/solutions#it-network-security',
  },
  {
    title_dictionary: 'solutions.it.app_development.title',
    description_dictionary: 'solutions.it.app_development.description',
    illustration_image: '/static/images/illustrations/app-development.png',
    link: '/solutions#it-app-development',
  },
]

export const XTRA_BUSINESS_SOLUTION: SolutionType[] = []
export const XTRA_IT_SOLUTION: SolutionType[] = []
export const XTRA_ELECTRICAL_SOLUTION: SolutionType[] = []
