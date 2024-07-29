import type { Request, RequestHandler, Response } from "express";
import { reportService } from "./reportService";

class ReportController {
  public getUsers: RequestHandler = async (_req: Request, res: Response) => {
    const serviceResponse = reportService.findAll();
    return res.json(serviceResponse);
  };

  public getUser: RequestHandler = async (req: Request, res: Response) => {
    const id = Number.parseInt(req.params.id as string, 10);
    const serviceResponse = reportService.findById(id);
    return res.json(serviceResponse);
  };
}

export const reportController = new ReportController();
