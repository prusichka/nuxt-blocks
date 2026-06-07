#!/usr/bin/env node

import { cac } from 'cac'
import { consola } from 'consola'
import { addBlock } from './add.js'

const cli = cac('nuxt-blocks')

cli
    .command('add <block>', 'Add a block')
    .action(async (block: string) => {
        await addBlock(block)

        consola.success(`Adding "${block}" block`)
    })

cli.help()
cli.parse()