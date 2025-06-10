'use client'

import { tags } from './tags'
import { useSearchableTaunts } from './use-searchable-taunts'

export const Taunts = () => {
  const { currentTag, onQueryChange, onTagChange, query, taunts } =
    useSearchableTaunts()

  return (
    <>
      <header className="flex flex-col gap-6">
        <input
          type="text"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search taunts..."
          className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex flex-col gap-2">
          <h2 className="font-serif text-xl font-semibold tracking-wide">
            Categories
          </h2>
          <ul className="flex flex-wrap gap-2">
            <li>
              <button
                className="cursor-pointer p-2 border border-gray-500 dark:border-gray-600 rounded data-[active=true]:border-2"
                data-active={currentTag === 'all'}
                onClick={() => onTagChange('all')}
              >
                all
              </button>
            </li>
            {tags.toSorted().map((tag) => (
              <li key={tag}>
                <button
                  className="cursor-pointer p-2 border border-gray-400 dark:border-gray-600 rounded data-[active=true]:border-2"
                  data-active={currentTag === tag}
                  onClick={() => onTagChange(tag)}
                >
                  {tag}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <ul className="list-disc flex flex-col gap-1">
        {taunts.map(({ key, text }) => (
          <li key={key}>
            {key}: {text}
          </li>
        ))}
      </ul>
    </>
  )
}
