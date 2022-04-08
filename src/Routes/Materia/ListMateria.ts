import { MateriaRepository } from "Repository/MateriaRepository"
import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"

interface GetMateriasDeps {
  materiaRepo: MateriaRepository
}

export const ListAlunos: (deps: GetMateriasDeps) => 
  RouteHandler<Req<{}, {}, {}>
  > = ({ materiaRepo }: GetMateriasDeps) => async (req, res) => {
    // Preciso corrigir essa tratativa



    return await materiaRepo.listMaterias()
      .then(materia => res
                      .status(200)
                      .json({
                        code: 200,
                        status: 'success',
                        message: "Got Materia",
                        data: materia
                      }))
        .catch(() => res
                      .status(404)
                      .json({
                        code: 404,
                        status: "error",
                        message: "Materia not found"
                      }))
}


export default ListAlunos