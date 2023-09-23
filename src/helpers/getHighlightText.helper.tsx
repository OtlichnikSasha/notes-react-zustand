import { ReactNode } from 'react';

export const getHighlightedText = (
  text: string,
  highlight: string,
  highlightColor: string = 'yellow',
): ReactNode => {
  try {
    const filteredHighlight = highlight.match(/[\w\p{sc=Cyrillic}]+/gu);
    const parts = text.split(new RegExp(`(${filteredHighlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) => (
          <span
            key={i}
            style={part.toLowerCase() === highlight.toLowerCase() ? { color: highlightColor } : {}}
          >
            {part}
          </span>
        ))}{' '}
      </span>
    );
  } catch (_e) {
    return text;
  }
};
