import taunts from '@/taunts.json'

export const tags = Array.from(new Set(taunts.flatMap((taunt) => taunt.tags)))
