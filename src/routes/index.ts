import { Router } from 'express'
const router = Router()

import ExampleRoutes from './ExampleRoutes'
router.use('/example', ExampleRoutes)

router.get('/', (req, res) => {
  res.json({
    version: '0.0.1',
    documentation: '',
  })
})

export default router

