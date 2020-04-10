import { Router } from 'express'
import * as request from '../app/controllers/bootcamps'

const router = new Router()

router.route('/')
  .get(request.getBootcamps)
  .post(request.createBootcamp)

router.route('/:id')
  .get(request.getBootcamp)
  .put(request.updateBootcamp)
  .delete(request.deleteBootcamp)

export default router