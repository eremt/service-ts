import { ExampleController } from '../controllers'

import { Router } from 'express'
const router = Router()

router.post('/', ExampleController.create)
router.get('/', ExampleController.get)
router.put('/', ExampleController.update)
router.delete('/', ExampleController.delete)

export default router
