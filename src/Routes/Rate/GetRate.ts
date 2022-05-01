import { RateRepository } from "Repository/RateRepository"
import { RouteHandler } from "Utils/routeHandler"
import { BodyType, Req } from "Utils/request"

interface GetRateDeps {
  rateRepo: RateRepository
}

export const GetRate: (deps: GetRateDeps) => 
  RouteHandler<Req<{}, {}, {id: number }>
  > = ({ rateRepo }: GetRateDeps) => async (req, res) => {
    // Preciso corrigir essa tratativa
    if(!req.params) {
      return res
        .status(400)
        .json({
          code: 400,
          status: 'error',
          message: "Param needed"
        })
    }

    const { id } = req.params

    return await rateRepo.getRateById(id)
                          .then((data) => res
                          .status(200)
                          .json({
                            code: 200,
                            status: 'success',
                            message: "Rate found",
                            data
                          }))
                          .catch(err => res
                              .status(400)
                              .json({
                                code: 400,
                                status: "error",
                                message: "Failed to find rate"
                              }))
    }

export default GetRate