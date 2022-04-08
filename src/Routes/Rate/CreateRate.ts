import { RateRepository } from "Repository/RateRepository"
import { RouteHandler } from "Utils/routeHandler"
import { BodyType, Req } from "Utils/request"

interface CrateRateDeps {
  rateRepo: RateRepository
}

interface IRate extends BodyType {
  id: number,
  description: string,
  nota: number
}

export const CreateRate: (deps: CrateRateDeps) => 
  RouteHandler<Req<IRate, {}>
  > = ({ rateRepo }: CrateRateDeps) => async (req, res) => {
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


    const { id, description, nota } = req.body


    const exists = await rateRepo.getRateById(id)
    if(exists) {
      return res
        .status(400)
        .json({
          code: 400,
          status: 'error',
          message: "Rate já existe"
        })
    }

    const rate = await rateRepo.createRate(id, description, nota )

      if(!rate) {
        return res
        .status(400)
        .json({
          code: 400,
          status: "error",
          message: "Failed to create rate",
        })
      }
      return res
        .status(200)
        .json({
          code: 200,
          status: "success",
          message: "rate created",
          data: rate
        })
  }

export default CreateRate