import fs from 'fs-extra'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export interface BlockMeta {
    name: string
    title: string
    description: string
    version: string
    status: string
}

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

export function getBlockConfigPath(block: string) {
    return path.join(getBlockDir(block), 'block.json')
}

export async function getAvailableBlockNames() {
    const blocks = await fs.readdir(getBlocksDir())

    return blocks.filter((block) => !block.startsWith('.'))
}

export async function getBlockMeta(block: string): Promise<BlockMeta | null> {
    const configPath = getBlockConfigPath(block)

    const exists = await fs.pathExists(configPath)

    if (!exists) {
        return null
    }

    return fs.readJson(configPath)
}

export async function getAvailableBlocks() {
    const blockNames = await getAvailableBlockNames()

    const blocks = await Promise.all(
        blockNames.map(async (blockName) => {
            return getBlockMeta(blockName)
        })
    )

    return blocks.filter((block): block is BlockMeta => Boolean(block))
}

export async function blockExists(block: string) {
    const meta = await getBlockMeta(block)

    const filesExist = await fs.pathExists(
        getBlockFilesDir(block)
    )

    return Boolean(meta) && filesExist
}