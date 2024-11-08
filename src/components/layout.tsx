import Footer from './footer';
import { colors } from '@mui/material';
import { type ReactNode } from 'react';
import Header from './header';

export default function Layout({ children }: { readonly children: ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', position: 'relative' }}>
      <>
        <div
          style={{
            flexGrow: 1,
            zIndex: 0
          }}
        >
          <Header />
          <div style={{ minHeight: '78%', backgroundColor: colors.blue[200] }}>
            {children}
          </div>
          <Footer />
        </div>
      </>
    </div>
  );
}
