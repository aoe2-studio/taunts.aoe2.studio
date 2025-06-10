import tauntsJson from '@/taunts.json'
import Fuse from 'fuse.js'
import { useState } from 'react'

const fuse = new Fuse(tauntsJson, {
  keys: ['text'],
  threshold: 0.3,
  distance: 100,
  includeMatches: true,
  ignoreLocation: true,
  minMatchCharLength: 1,
  useExtendedSearch: false,
})

export const useSearchableTaunts = () => {
  const [query, setQuery] = useState('')
  const [currentTag, setCurrentTag] = useState('all')
  const unfilteredTaunts = query
    ? fuse.search(query).map((result) => result.item)
    : tauntsJson
  const taunts = unfilteredTaunts.filter(
    (taunt) => currentTag === 'all' || taunt.tags.includes(currentTag),
  )

  return {
    query,
    onQueryChange: (query: string) => setQuery(query),
    currentTag,
    onTagChange: (tag: string) => setCurrentTag(tag),
    taunts,
  }
}
