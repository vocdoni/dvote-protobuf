import { defineConfig } from 'tsup'

export default defineConfig({
  format: ['esm', 'cjs'],
  splitting: false,
  noExternal: [
    'protobufjs/minimal',
  ],
  entry: [
    'build/ts/index.ts',
    'build/ts/client-store/index.ts',
    'build/ts/metadata/index.ts',
    'build/ts/vochain/index.ts',
  ],
})
