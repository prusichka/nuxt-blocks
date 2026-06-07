import fs from 'fs-extra'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export function getBlocksDir() {
    return path.resolve(__dirname, '../../../../blocks')
}

export function getBlockDir(block: string) {
    return path.join(getBlocksDir(), block)
}

export function getBlockFilesDir(block: string) {
    return path.join(getBlockDir(block), 'files')
}

export async function getAvailableBlocks() {
    return fs.readdir(getBlocksDir())
}

export async function blockExists(block: string) {
    const configExists = await fs.pathExists(
        path.join(getBlockDir(block), 'block.json')
    )

    const filesExist = await fs.pathExists(
        getBlockFilesDir(block)
    )

    return configExists && filesExist
}