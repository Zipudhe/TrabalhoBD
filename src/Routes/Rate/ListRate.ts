import { RateRepository } from "Repository/RateRepository"
import { RouteHandler } from "Utils/routeHandler"
import { BodyType, Req } from "Utils/request"

interface GetRateDeps {
  rateRepo: RateRepository
}

export const ListRate: (deps: GetRateDeps) => 
  RouteHandler<Req<{}, {}, {}>
  > = ({ rateRepo }: GetRateDeps) => async (_req, res) => {
    // Preciso corrigir essa tratativa

    return await rateRepo.listRate()
                          .then((data) => res
                          .status(200)
                          .json({
                            code: 200,
                            status: 'success',
                            message: "found rates",
                            data
                          }))
                          .catch(err => res
                              .status(400)
                              .json({
                                code: 400,
                                status: "error",
                                message: "Failed to list rates"
                              }))
    }

export default ListRate