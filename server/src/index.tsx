import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { typeConfig } from 'configs'
import {
  oauthRoute, userRoute, identityRoute,
  otherRoute, appRoute, roleRoute, scopeRoute,
} from 'routes'
import { setupMiddleware } from 'middlewares'

const app = new Hono<typeConfig.Context>()

app.use(
  '/*',
  cors(),
  setupMiddleware.session,
)

otherRoute.load(app)
oauthRoute.load(app)
identityRoute.load(app)
userRoute.load(app)
roleRoute.load(app)
scopeRoute.load(app)
appRoute.load(app)

export default app
