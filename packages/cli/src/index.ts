#!/usr/bin/env node

import { cac } from 'cac'
import { addBlock } from './commands/add.js'
import { listBlocks } from './commands/list.js'

const cli = cac('nuxt-blocks')

cli
    .command('add <block>', 'Add a block')
    .action(async (block: string) => {
        await addBlock(block)
    })

cli
    .command('list', 'List available blocks')
    .action(async () => {
        await listBlocks()
    })

cli.help()
cli.parse()