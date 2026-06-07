import { consola } from 'consola'
import { getAvailableBlocks } from '../utils/blocks.js'

export async function listBlocks() {
    const blocks = await getAvailableBlocks()

    if (!blocks.length) {
        consola.warn('No blocks found.')
        return
    }

    consola.info('Available blocks:')

    for (const block of blocks) {
        consola.info(`• ${block.name}`)
        consola.info(`  ${block.description}`)
        consola.info(`  Status: ${block.status}`)
    }
}