import {
  css, Style,
} from 'hono/css'
import { html } from 'hono/html'
import {
  localeConfig, typeConfig,
} from 'configs'

export interface Branding {
  logoUrl: string;
  fontFamily: string;
  fontUrl: string;
  layoutColor: string;
  labelColor: string;
  primaryButtonColor: string;
  primaryButtonLabelColor: string;
  primaryButtonBorderColor: string;
  secondaryButtonColor: string;
  secondaryButtonLabelColor: string;
  secondaryButtonBorderColor: string;
  criticalIndicatorColor: string;
  termsLink: string;
  privacyPolicyLink: string;
}

const Layout = ({
  branding, children, locale, locales,
}: { branding: Branding; children: any; locale: typeConfig.Locale; locales: typeConfig.Locale[] }) => (
  <html lang={locale}>
    <head>
      <meta charset='utf-8' />
      <title>{localeConfig.common.documentTitle[locale]}</title>
      <link
        rel='icon'
        type='image/x-icon'
        href={branding.logoUrl} />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1' />
      <link
        rel='preconnect'
        href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com' />
      <link
        href={branding.fontUrl}
        rel='stylesheet' />
      <Style>
        {css`
          body { padding: 0; margin: 0; font-family: ${branding.fontFamily}; font-size: 16px; }
          a { text-decoration: none; }
          p { padding: 0; margin: 0; }
          h1 { padding: 0; margin: 0; }
          .flex-row { display: flex; flex-direction: row; }
          .flex-col { display: flex; flex-direction: column; }
          .flex-wrap { flex-wrap: wrap; }
          .justify-between { justify-content: space-between; }
          .justify-around { justify-content: space-around; }
          .justify-center { justify-content: center; }
          .justify-end { justify-content: flex-end; }
          .items-center { align-items: center; }
          .hidden { display: none; }
          .text-semibold { font-weight: 600; }
          .text-sm { font-size: 14px; }
          .text-red { color: ${branding.criticalIndicatorColor}; }
          .text-green { color: green; }
          .text-gray { color: gray; }
          .text-center { text-align: center; }
          .p-2 { padding: 8px; }
          .pl-2 { padding-left: 8px; }
          .pr-2 { padding-right: 8px; }
          .p-4 { padding: 16px; }
          .ml-2 { margin-left: 8px; }
          .ml-12 { margin-left: 48px; }
          .mr-2 { margin-right: 8px; }
          .mt-2 { margin-top: 8px; }
          .mt-4 { margin-top: 16px; }
          .mt-8 { margin-top: 32px; }
          .mb-4 { margin-bottom: 16px; }
          .gap-8 { gap: 32px; }
          .gap-4 { gap: 16px; }
          .gap-2 { gap: 8px; }
          .border { border: 1px solid lightgray; }
          .rounded-lg { border-radius: 16px; }
          .rounded-md { border-radius: 8px; }
          .w-full { width: 100%; }
          .w-half { width: 50%; }
          .w-text { width: 280px; }
          .input-icon-button {
            position: absolute;
            margin-left: 255px;
            width: unset !important;
            height: unset !important;
            background-color: unset !important;
            border: unset !important;
            padding: unset !important;
            cursor: pointer;
          }
          .input-icon {
            width: 18px;
            height: 18px;
          }
          .main {
            background-color: ${branding.layoutColor};
            color: ${branding.labelColor};
            height: 100vh;
            width: 100%;
          }
          .container {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);;
            background-color: white;
            padding: 32px;
          }
          .logo {
            width: 40px;
          }
          button {
            width: 280px;
          }
          .button {
            background-color: ${branding.primaryButtonColor};
            color: ${branding.primaryButtonLabelColor};
            cursor: pointer;
            border: 1px solid ${branding.primaryButtonBorderColor};
            padding: 8px;
            border-radius: 8px;
            font-weight: 500;
            font-size: 16px;
          }
          .button-secondary {
            background-color: ${branding.secondaryButtonColor};
            color: ${branding.secondaryButtonLabelColor};
            border: 1px solid ${branding.secondaryButtonBorderColor};
            text-align: center;
            cursor: pointer;
            border-radius: 8px;
            font-weight: 500;
            font-size: 16px;
          }
          .code-input {
            background-color: white;
            border: 1px solid lightgray;
            text-align: center;
            border-radius: 12px;
            width: 42px;
            height: 42px;
          }
          .input {
            background-color: white;
            border: 1px solid lightgray;
            padding: 12px;
            border-radius: 8px;
            width: 280px;
          }
          .label {
            font-weight: 500;
          }
          .locale-selector {
            width: 62px;
          }
          .alert {
            background-color: ${branding.criticalIndicatorColor};
            color: white;
            border-radius: 8px;
            padding: 8px 16px;
            font-size: 14px;
            width: 280px;
            align-self: center;
            box-sizing: border-box;
          }
          form {
            margin-bottom: 0px;
          }
          .inner-container {
            max-height: 80vh;
            overflow-y: auto;
            overflow-x: hidden;
          }
          .option {
            background-color: white;
            color: #333;
            padding: 8px;
            font-weight: 500;
            font-size: 16px;
            cursor: pointer;
          }
          @media (width <= 625px) {
            #row-names {
              flex-direction: column;
            }
          }
        `}
      </Style>
    </head>
    <body>
      <main class='flex-col items-center justify-center main'>
        <section class='flex-col justify-center items-center container rounded-lg'>
          <section class='flex-col items-center gap-4 inner-container'>
            <header class={`flex-row w-full ${locales.length > 1 ? 'justify-between' : 'justify-center'}`}>
              {locales.length > 1 && <div class='locale-selector' />}
              <img
                class='logo'
                src={branding.logoUrl}
                alt='Logo'
              />
              {locales.length > 1 && (
                <select
                  class='button locale-selector'
                  onchange='handleSwitchLocale(event)'
                  aria-label='Select Locale'
                >
                  {locales.map((targetLocale) => (
                    <option
                      key={targetLocale}
                      value={targetLocale}
                      selected={targetLocale === locale}>
                      {targetLocale.toUpperCase()}
                    </option>
                  ))}
                </select>
              )}
            </header>
            {children}
            <a
              target='__blank'
              href='https://github.com/ValueMelody/melody-auth'
              class='text-sm mt-2'
            >
              {localeConfig.common.poweredByAuth[locale]}
            </a>
          </section>
        </section>
      </main>
      {html`
        <script>
          function handleSwitchLocale(e) {
            var url = window.location.href.replace("locale=${locale}", "locale=" + e.target.value)
            if (url.indexOf('locale=') === -1) {
              url = url + "&locale=" + e.target.value
            }
            window.location.href = url
          }
        </script>
      `}
    </body>
  </html>
)

export default Layout
