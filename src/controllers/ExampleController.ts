import { ExampleService } from '../services'
import { Request, Response } from 'express'

export default class ExampleController {
  static async create (req: Request, res: Response) {
    try {
      const example = await ExampleService.create()

      res.json(example)
    } catch (error) {
    }
  }

  static async get (req: Request, res: Response) {
    try {
      const example = await ExampleService.get()

      res.json(example)
    } catch (error) {
    }
  }

  static async update (req: Request, res: Response) {
    try {
      const example = await ExampleService.update()

      res.json(example)
    } catch (error) {
    }
  }

  static async delete (req: Request, res: Response) {
    try {
      const result = await ExampleService.delete()

      res.status(201).end()
    } catch (error) {
    }
  }
}
