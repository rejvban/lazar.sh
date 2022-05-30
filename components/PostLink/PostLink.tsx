import { useMemo } from 'react';
import Link from 'next/link';
import randomcolor from 'randomcolor';

import type { BlogPostEntry } from '../../lib/api';

const PostLink: React.FC<BlogPostEntry> = ({ title, subject, slug }) => {
  const underlineColor = useMemo(
    () => randomcolor({ seed: subject[0] }),
    [subject],
  );

  return (
    <div className="my-2 p-2">
      <Link href={`/blog/${slug}`}>
        <h5
          className="inline cursor-pointer font-semibold underline decoration-amber-500 decoration-2 hover:decoration-4"
          style={{
            textDecorationColor: underlineColor,
          }}
        >
          {title}
        </h5>
      </Link>
      <div>
        <span className="text-xs opacity-80">{subject.join(', ')}</span>
      </div>
    </div>
  );
};

export { PostLink };
