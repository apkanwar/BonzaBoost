import { useIsVisible } from '@/lib/useIsVisible';
import { Disclosure } from '@headlessui/react';
import { useEffect, useRef, useState } from 'react';

export default function FAQContent() {
  const [faqQA, setFAQ] = useState([]);

  const ref = useRef();
  const isVisible = useIsVisible(ref);

  useEffect(() => {
    fetchFAQ();
  }, []);

  const fetchFAQ = async () => {
    try {
      const response = await fetch('/api/faq');
      if (!response.ok) {
        throw new Error('Failed to Fetch Data');
      }
      const { FAQ } = await response.json();
      setFAQ(FAQ);
    } catch (error) {
      console.error('Error Fetching Data:', error);
    }
  };

  return (
    <div ref={ref} className={`${isVisible ? "opacity-100" : "opacity-0"} transition-opacity ease-in duration-1000 mx-auto max-w-5xl px-6 pt-32 pb-12 bg-transparent text-white`}>
      <h1 className='text-5xl font-headings font-semibold pb-16'>Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqQA.map((q) => (
          <Disclosure key={q.id}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex text-start justify-between my-auto w-full text-lg font-headings font-semibold bg-transparent transition-all">
                  <span>{q.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${open ? 'transform rotate-180' : ''}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="text-lg font-main bg-transparent pb-3">
                  {open ? (
                    <p className="whitespace-pre-line text-gray-300 text-xl">{q.answer}</p>
                  ) : null}
                </Disclosure.Panel>
                <hr className="border-white" />
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};