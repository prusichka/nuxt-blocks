#!/usr/bin/env node

import { cac } from 'cac'
import { addBlock } from './commands/add.js'

const cli = cac('nuxt-blocks')

cli
    .command('add <block>', 'Add a block')
    .action(async (block: string) => {
        await addBlock(block)
    })

cli.help()
cli.parse()