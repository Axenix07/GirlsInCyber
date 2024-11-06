import Footer from "./footer";
import spacing from "./theme/spacing";
import { colors } from "@mui/material";
import { type ReactNode } from "react";

export default function Layout({ children }: { readonly children: ReactNode }) {
    return (
      <div style={{ display: 'flex', minHeight: '100vh', position: 'relative' }}>
        
          <>
            <div
              style={{
                flexGrow: 1,
                paddingLeft: spacing[20] /* Adjust based on Sidebar width */,
                zIndex: 0
              }}
            >
              <div
                style={{ minHeight: '78%', backgroundColor: colors.blue[200] }}
              >
                {children}
              </div>
              <Footer />
            </div>
          </>
      </div>
    );
  }
  