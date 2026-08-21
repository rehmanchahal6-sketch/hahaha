'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items, initialOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(initialOpen);

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `accordion-panel-${index}`;
        const headerId = `accordion-header-${index}`;

        return (
          <div key={item.q} className={`accordion-item ${isOpen ? 'is-open' : ''}`}>
            <button
              id={headerId}
              type="button"
              className="accordion-header"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.q}</span>
              <ChevronDown size={18} className="accordion-chevron" aria-hidden />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={`accordion-panel ${isOpen ? 'is-open' : ''}`}
            >
              <div className="accordion-panel-inner">
                <p className="accordion-content">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
