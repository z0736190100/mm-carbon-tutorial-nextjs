'use client';

import ShellHeader from '@/components/ShellHeader/ShellHeader';
import { Content, Theme } from '@carbon/react';

export function Providers({ children }) {
  return (
    <div>
      <Theme theme="g100">
        <ShellHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
