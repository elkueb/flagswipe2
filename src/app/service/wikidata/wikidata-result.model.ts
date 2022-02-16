export interface WikidataResult {
  head?: Head
  results?: Result
}

export interface Head {
}

export interface Result {
  bindings?: Binding[]
}

export interface Binding {
}

export interface WikidataObject {
  type?: string
  value?: string
  "xml:Lang"?: string
}
