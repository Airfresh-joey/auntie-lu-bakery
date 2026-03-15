export type { CityPage } from './types'
import { sanDiegoCoreCities } from './san-diego-core'
import { northCountyCities } from './north-county'
import { southOrangeCountyCities } from './south-orange-county'
import { inlandDestinationCities } from './inland-destinations'
import { southBayAndAdditionalCities } from './south-bay-and-additional'

export const allCities = [
  ...sanDiegoCoreCities,
  ...northCountyCities,
  ...southOrangeCountyCities,
  ...inlandDestinationCities,
  ...southBayAndAdditionalCities,
]
