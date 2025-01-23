import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://myproject-api:8080/api/graphql',
  documents: ['src/graphql/**/*.graphql'],
  generates: {
    './src/graphql/generated/': {
      preset: 'client'
    }
  }
}

export default config