import fs from 'fs-extra'
import { consola } from 'consola'
import {
    blockExists,
    getAvailableBlocks,
    getBlockFilesDir
} from '../utils/blocks.js'

export async function addBlock(block: string) {
    const exists = await blockExists(block)

    if (!exists) {
        consola.error(`Block "${block}" was not found.`)
        consola.info('Available blocks:')

        const blocks = await getAvailableBlocks()

        for (const item of blocks) {
            consola.info(`- ${item.name}: ${item.description}`)
        }

        return
    }

    await fs.copy(getBlockFilesDir(block), process.cwd(), {
        overwrite: true
    })

    consola.success(`Block "${block}" installed successfully.`)
}