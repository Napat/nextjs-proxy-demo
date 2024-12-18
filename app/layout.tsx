// app/layout.tsx
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <header>
                    <h1>My Next.js App</h1>
                </header>
                <main>{children}</main>
                <footer>
                    <p>Footer content here</p>
                </footer>
            </body>
        </html>
    );
};

export default Layout;
