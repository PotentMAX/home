(function() {
    // 1. Inject scoped CSS styles into the <head>
    const cssStyles = `
        /* CSS Reset variables scoped specifically for the navbar container */
        .potentmax-navbar-wrapper,
        .potentmax-navbar-wrapper *,
        .potentmax-navbar-wrapper :before,
        .potentmax-navbar-wrapper :after {
            box-sizing: border-box;
            border-width: 0;
            border-style: solid;
            border-color: #E8E5EB;
            --tw-border-spacing-x: 0;
            --tw-border-spacing-y: 0;
            --tw-translate-x: 0;
            --tw-translate-y: 0;
            --tw-rotate: 0;
            --tw-skew-x: 0;
            --tw-skew-y: 0;
            --tw-scale-x: 1;
            --tw-scale-y: 1;
        }

        /* Navbar-specific styling and theme variables */
        .potentmax-navbar-wrapper {
            --background: 280 20% 12%;
            --foreground: 0 0% 100%;
            --card: 280 15% 16%;
            --primary: 280 100% 40%;
            --secondary: 270 38% 49%;
            --muted: 280 15% 20%;
            --accent: 280 100% 66%;
            --border: 280 15% 22%;
            --radius: .5rem;

            background-color: hsl(var(--background));
            color: hsl(var(--foreground));
            font-family: ui-sans-serif, system-ui, sans-serif,
                "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol,
                "Noto Color Emoji";
            line-height: 1.5;
            width: 100%;
        }

        .potentmax-navbar-wrapper a {
            color: inherit;
            text-decoration: inherit;
        }

        .potentmax-navbar-wrapper .flex {
            display: flex;
        }

        .potentmax-navbar-wrapper .items-center {
            align-items: center;
        }

        .potentmax-navbar-wrapper .gap-2 {
            gap: .5rem;
        }

        .potentmax-navbar-wrapper .gap-4 {
            gap: 1rem;
        }

        .potentmax-navbar-wrapper .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
        }

        .potentmax-navbar-wrapper .py-2 {
            padding-top: .5rem;
            padding-bottom: .5rem;
        }

        .potentmax-navbar-wrapper .h-10 {
            height: 2.5rem;
        }

        .potentmax-navbar-wrapper .w-10 {
            width: 2.5rem;
        }

        .potentmax-navbar-wrapper .h-4 {
            height: 1rem;
        }

        .potentmax-navbar-wrapper .w-4 {
            width: 1rem;
        }

        .potentmax-navbar-wrapper .rounded {
            border-radius: .25rem;
        }

        .potentmax-navbar-wrapper .rounded-md {
            border-radius: calc(var(--radius) - 2px);
        }

        .potentmax-navbar-wrapper .px-3 {
            padding-left: .75rem;
            padding-right: .75rem;
        }

        .potentmax-navbar-wrapper .py-1\\.5 {
            padding-top: .375rem;
            padding-bottom: .375rem;
        }

        .potentmax-navbar-wrapper .text-sm {
            font-size: .875rem;
            line-height: 1.25rem;
        }

        .potentmax-navbar-wrapper .font-semibold {
            font-weight: 600;
        }

        .potentmax-navbar-wrapper .text-white {
            color: #fff;
        }

        .potentmax-navbar-wrapper .transition-colors {
            transition-property: color, background-color, border-color;
            transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-duration: 150ms;
        }

        .potentmax-navbar-wrapper .hover\\:bg-white\\/10:hover {
            background-color: rgb(255 255 255 / 0.1);
        }

        .potentmax-navbar-wrapper .ml-auto {
            margin-left: auto;
        }

        /*
         * Mobile navbar mechanism
         *
         * At widths of 459px or less:
         * - Hide the text labels for navbar buttons
         * - Keep the PotentMAX logo visible
         * - Increase Lucide icons to 24x24
         * - Do not affect potentmax.svg
         * - "NO WAY!" >:(
         */
        @media (max-width: 459px) {
            .potentmax-navbar-wrapper nav > a:not(:first-child) span,
            .potentmax-navbar-wrapper nav > div span {
                display: none;
            }

            .potentmax-navbar-wrapper nav a svg.lucide {
                width: 24px !important;
                height: 24px !important;
            }
        }

        /* External-site warning */
        .potentmax-external-notice {
            width: 100%;
            padding: 10px 16px;
            box-sizing: border-box;
            background: #FACDFF;
            color: #470366;
            border-bottom: 1px solid #E4B5FF;
            font-family: ui-sans-serif, system-ui, sans-serif;
            font-size: 14px;
            line-height: 1.5;
            text-align: center;
        }

        .potentmax-external-notice a {
            color: inherit;
            font-weight: 700;
            text-decoration: underline;
        }
    `;

    const styleEl = document.createElement('style');
    styleEl.innerHTML = cssStyles;
    document.head.appendChild(styleEl);

    // 2. Include the Lucide Icons Script if it doesn't already exist on the page
    if (!document.querySelector('script[src*="lucide"]')) {
        const lucideScript = document.createElement('script');

        lucideScript.src = "https://unpkg.com/lucide@latest";
        document.head.appendChild(lucideScript);

        lucideScript.onload = function() {
            if (window.lucide) {
                window.lucide.createIcons();
            }
        };
    }

    // 3. Dynamically generate the Settings URL with the current page's URL
    const currentUrlEncoded = encodeURIComponent(window.location.href);
    const settingsUrl =
        `https://potentmax.github.io/settings?from=${currentUrlEncoded}`;

    // 4. Create the container wrapper and insert the HTML template
    const wrapperDiv = document.createElement('div');
    wrapperDiv.className = "potentmax-navbar-wrapper";

    const navHTML = `
        <nav class="flex gap-4 px-4 py-2">

            <a href="https://potentmax.github.io/home" class="flex items-center gap-2">
                <img
                    src="https://potentmax.github.io/home/assets/potentmax.svg"
                    alt="PotentMAX icon"
                    class="h-10 w-10 rounded"
                >
            </a>

            <a
                href="https://potentmax.github.io/editor"
                class="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
                <i data-lucide="plus-circle" class="w-4 h-4 text-white"></i>
                <span>Create</span>
            </a>

            <a
                href="https://potentmax.github.io/home/explore/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
                <i data-lucide="compass" class="w-4 h-4 text-white"></i>
                <span>Explore</span>
            </a>

            <!-- Right-aligned options -->
            <div class="ml-auto flex gap-4">

                <a
                    href="https://potentmax.github.io/home/commits"
                    onclick="window.open(this.href, 'commitsWindow', 'width=1000,height=700,resizable=yes,scrollbars=yes'); return false;"
                    class="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                    <i data-lucide="circle-fading-arrow-up" class="w-4 h-4 text-white"></i>
                    <span>Commits</span>
                </a>

                <a
                    href="${settingsUrl}"
                    class="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                    <i data-lucide="settings" class="w-4 h-4 text-white"></i>
                    <span>Settings</span>
                </a>

            </div>
        </nav>
    `;

    wrapperDiv.innerHTML = navHTML;

    // 5. Prepend the navbar to the top of the body
    document.body.prepend(wrapperDiv);

    /*
     * potentmax.github.io
     * www.potentmax.github.io
     * potentmax.github.io
     * potentmax.github.io/anything
     *
     * are all considered official PotentMAX domains.
     */
    const hostname = window.location.hostname.toLowerCase();

    const isPotentMAXHost =
        hostname === "potentmax.github.io" ||
        hostname.startsWith("potentmax.github.io/");

    // Show the warning on every non-PotentMAX website
    if (!isPotentMAXHost) {
        const noticeDiv = document.createElement("div");
        noticeDiv.className = "potentmax-external-notice";

        noticeDiv.innerHTML = `
            This page is an unofficial mod of CattyMod.
            <a
                href="potentmax.github.io/home"
                target="_blank"
                rel="noopener noreferrer"
            >Go to potentmax.github.io/home</a>
            if you want to get a private and powerful Scratch mod.
        `;

        // Immediately below the navbar
        wrapperDiv.insertAdjacentElement(
            "afterend",
            noticeDiv
        );
    }

    // Render icons right away if Lucide is already available globally
    if (window.lucide) {
        window.lucide.createIcons();
    }
})();
