#!/usr/bin/env node

import { cac } from 'cac'
import { consola } from 'consola'

const cli = cac('nuxt-blocks')

cli
    .command('add <block>', 'Add a block')
    .action((block) => {
        consola.success(`Adding "${block}" block`)
    })

cli.help()
cli.parse()