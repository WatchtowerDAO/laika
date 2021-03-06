// import { EditableMetadataLinks } from '@oceanprotocol/lib'

export interface MetadataEditForm {
  name: string
  description: string
  timeout: string
  price?: string
  links?: string | any[]
  author?: string
}
