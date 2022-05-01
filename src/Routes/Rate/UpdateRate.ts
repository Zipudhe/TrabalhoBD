import { RateRepository } from "Repository/RateRepository"
import { RouteHandler } from "Utils/routeHandler"
import { BodyType, Req } from "Utils/request"

interface UpdateRateDeps {
  rateRepo: RateRepository
}

interface IRate extends BodyType {
  description: string,
  nota: number
}

export const UpdateRate: (deps: UpdateRateDeps) => 
  RouteHandler<Req<IRate, {}, {id: number}>
  > = ({ rateRepo }: UpdateRateDeps) => async (req, res) => {
    // Preciso corrigir essa tratativa
    if(!req.body) {
      return res
        .status(400)
        .json({
          code: 400,
          status: 'error',
          message: "Body needed"
        })
    }


    const { description, nota } = req.body

    const rate = await rateRepo.getRateById(req.params.id)

    if(!rate) {
      return res.status(400).json({
        code: 400,
        status: "error",
        message: "Rate not found"
      })
    }
    
    return await rateRepo.updateRate(rate, description, nota)
      .then(rate => res
        .status(200)
        .json({
          code: 200,
          status: "success",
          message: "rate created",
          data: rate
        }))
        .catch(err => res
          .status(400)
          .json({
            code: 400,
            status: "error",
            message: "Failed to update rate",
          }))
  }

export default UpdateRate