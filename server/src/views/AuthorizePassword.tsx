import { html } from 'hono/html'
import { localeConfig } from 'configs'
import Layout from 'views/components/Layout'
import { oauthDto } from 'dtos'
import AuthorizeCommonFields from 'views/components/AuthorizeCommonFields'
import PoweredBy from 'views/components/PoweredBy'

const AuthorizePassword = ({
  queryDto, logoUrl, enableSignUp, queryString,
}: {
  queryDto: oauthDto.GetAuthorizeReqQueryDto;
  logoUrl: string;
  enableSignUp: boolean;
  queryString: string;
}) => {
  return (
    <Layout>
      {html`
        <script>
          function handleSubmit () {
            fetch('/oauth2/authorize-password', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  email: document.getElementById('form-email').value,
                  password: document.getElementById('form-password').value,
                  clientId: document.getElementById('form-clientId').value,
                  redirectUri: document.getElementById('form-redirectUri').value,
                  responseType: document.getElementById('form-responseType').value,
                  state: document.getElementById('form-state').value,
                  codeChallenge: document.getElementById('form-code-challenge').value,
                  codeChallengeMethod: document.getElementById('form-code-challenge-method').value,
                  scope: document.getElementById('form-scope').value.split(','),
                })
            })
            .then((response) => {
              if (!response.ok) {
                return response.text().then(text => {
                  throw new Error(text);
                });
              }
              return response.json();
            })
            .then((data) => {
              var url = data.redirectUri + "?state=" + data.state + "&code=" + data.code;
              window.location.href = url;
              return true
            })
            .catch((error) => {
              console.error("Login failed: " + error)
              return false;
            });
            return false;
          }
        </script>
      `}
      <section class='flex-col items-center gap-4'>
        {!!logoUrl && (
          <img
            class='logo'
            src={logoUrl}
            alt='Logo'
          />
        )}
        <h1>{localeConfig.AuthorizePasswordPage.Title}</h1>
        <form
          autocomplete='on'
          onsubmit='return handleSubmit()'
        >
          <section class='flex-col gap-4'>
            <AuthorizeCommonFields queryDto={queryDto} />
            <button
              class='button mt-4'
              type='submit'
            >
              {localeConfig.AuthorizePasswordPage.SubmitBtn}
            </button>
          </section>
        </form>
        {enableSignUp && (
          <a
            class='button-text mt-4'
            href={`/oauth2/authorize-account?${queryString}`}
          >
            {localeConfig.AuthorizePasswordPage.SignUpBtn}
          </a>
        )}
        <PoweredBy />
      </section>
    </Layout>
  )
}

export default AuthorizePassword
