import fs from 'fs-extra'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function addBlock(block: string) {
    const source = path.resolve(
        __dirname,
        '../../../blocks',
        block,
        'files'
    )

    const target = process.cwd()

    await fs.copy(source, target)

    console.log(`Block "${block}" installed`)
}